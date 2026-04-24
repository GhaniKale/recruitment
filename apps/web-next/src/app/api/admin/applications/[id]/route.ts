import { requireAdmin } from '@/utils/supabase/admin';
import { NextResponse } from 'next/server';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    // 1. Standardized Admin Check
    const { supabase, error } = await requireAdmin();

    if (error) {
        return error;
    }

    // 2. Fetch Data using Service Role (Returned by requireAdmin)
    const { data, error: fetchError } = await supabase
        .from('applications')
        .select('*, candidates(*), jobs(title, country, city)')
        .eq('id', id)
        .single();

    if (fetchError) {
        return NextResponse.json({ error: fetchError.message }, { status: 500 });
    }

    return NextResponse.json(data);
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    // 1. Standardized Admin Check
    const { supabase, error } = await requireAdmin();

    if (error) {
        return error;
    }

    // 2. Perform DB Operations with Service Role Client (Returned by requireAdmin)
    try {
        // Get Application Data first to get CV path
        const { data: application } = await supabase
            .from('applications')
            .select('resume_url')
            .eq('id', id)
            .single();

        // Delete File (Optional / Best Effort)
        if (application?.resume_url) {
            const { error: storageError } = await supabase.storage.from('cvs').remove([application.resume_url]);
            if (storageError) {
                console.warn('Gagal menghapus file CV:', storageError);
            }
        }

        // Delete Record
        const { error: deleteError } = await supabase
            .from('applications')
            .delete()
            .eq('id', id);

        if (deleteError) {
            console.error('Database delete error:', deleteError);
            return NextResponse.json({ ok: false, error: deleteError.message }, { status: 500 });
        }

        return NextResponse.json({ ok: true });

    } catch (err: unknown) {
        console.error('Unexpected error during delete:', err);
        return NextResponse.json({ ok: false, error: err instanceof Error ? err.message : 'Internal Server Error' }, { status: 500 });
    }
}
