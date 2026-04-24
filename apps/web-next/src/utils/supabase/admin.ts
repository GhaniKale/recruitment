import { createClient } from '@/lib/supabase/server';
import { SupabaseClient, User } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

/**
 * Checks if the current user is an admin.
 * If strictly enforced, returns a Response on failure.
 * If successful, returns the user and a service-role Supabase client.
 */
export async function requireAdmin(): Promise<
    | { error: NextResponse; supabase?: never; user?: never }
    | { error?: never; supabase: SupabaseClient; user: User }
> {
    // 1. Create standard client to check auth cookie
    const supabaseAuth = await createClient(false);
    const { data: { user }, error: authError } = await supabaseAuth.auth.getUser();

    if (authError || !user) {
        return {
            error: NextResponse.json(
                { ok: false, error: 'Unauthorized: Harap login terlebih dahulu.' },
                { status: 401 }
            )
        };
    }

    // 2. Check Admin Role
    const { data: profile } = await supabaseAuth
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single();

    let role = profile?.role;

    // 3. Auto-promote known admins (SEED/DEV Helper)
    // Adjust this logic as needed for production vs dev
    const adminEmails = ['admin@mardel.com', 'admin@example.com']; // Add your specific admin email here if needed
    const isKnownAdminEmail = user.email && (
        adminEmails.includes(user.email) ||
        user.email.startsWith('admin') // Temporary convenience
    );

    if (role !== 'admin' && isKnownAdminEmail) {
        console.log(`Auto-promoting ${user.email} to admin...`);
        const supabaseAdmin = await createClient(true);
        await supabaseAdmin
            .from('profiles')
            .update({ role: 'admin' })
            .eq('id', user.id);
        role = 'admin';
    }

    if (role !== 'admin') {
        return {
            error: NextResponse.json(
                { ok: false, error: 'Forbidden: Akses hanya untuk admin.' },
                { status: 403 }
            )
        };
    }

    // 4. Return Service Role Client for Admin Operations
    // We use service role to bypass RLS for admin actions (viewing all data, deleting, etc)
    const supabaseAdmin = await createClient(true);
    return { supabase: supabaseAdmin, user };
}
