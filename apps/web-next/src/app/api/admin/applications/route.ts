import { requireAdmin } from '@/utils/supabase/admin';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
    console.log('--- API: Fetching Applications ---');

    // 1. Standardized Admin Check
    const { supabase, error } = await requireAdmin();

    if (error) {
        return error;
    }

    // 2. Main Query with Joins
    // Explicitly using LEFT JOIN logic (Supabase standard)

    // Select specific fields to ensure we aren't pulling massive blobs if that's an issue
    const { data: applications, error: queryError } = await supabase
        .from('applications')
        .select(`
            id,
            status,
            created_at,
            job_id,
            candidate_id,
            candidates (
                name,
                email,
                phone
            ),
            jobs (
                title,
                country,
                city
            )
        `)
        .order('created_at', { ascending: false });

    if (queryError) {
        console.error('API Query Error:', queryError);
        return NextResponse.json({ error: queryError.message }, { status: 500 });
    }

    console.log(`API Fetch Success: Retrieved ${applications?.length} rows.`);

    // Log first items to check structure
    if (applications && applications.length > 0) {
        console.log('First Application Sample:', JSON.stringify(applications[0], null, 2));
    } else {
        console.warn('API returned 0 rows.');
    }

    return NextResponse.json({
        data: applications,
        meta: {
            total: applications?.length || 0,
            sanity_check: 'performed'
        }
    });
}
