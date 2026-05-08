import { requireAdmin } from '@/utils/supabase/admin';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const adminCheck = await requireAdmin();
    
    if (adminCheck.error) {
        return adminCheck.error;
    }

    const { supabase } = adminCheck;

    // 2. Parse Body
    const body = await request.json();
    const { path } = body;

    if (!path) {
        return NextResponse.json({ error: 'Path is required' }, { status: 400 });
    }

    // 3. Generate Signed URL
    // Ensure path is clean (remove bucket name if included?)
    // Assuming 'cvs' bucket
    const { data, error: storageError } = await supabase
        .storage
        .from('cvs')
        .createSignedUrl(path, 60); // 60 seconds

    if (storageError) {
        return NextResponse.json({ error: storageError.message }, { status: 500 });
    }

    return NextResponse.json({ url: data.signedUrl });
}
