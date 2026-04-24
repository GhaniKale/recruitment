import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const supabase = await createClient(true); // Admin client

    // 1. Check Auth & Role
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single();

    if (profile?.role !== 'admin') {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // 2. Parse Body
    const body = await request.json();
    const { path } = body;

    if (!path) {
        return NextResponse.json({ error: 'Path is required' }, { status: 400 });
    }

    // 3. Generate Signed URL
    // Ensure path is clean (remove bucket name if included?)
    // Assuming 'cvs' bucket
    const { data, error } = await supabase
        .storage
        .from('cvs')
        .createSignedUrl(path, 60); // 60 seconds

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ url: data.signedUrl });
}
