'use server';

import { createClient } from '@/lib/supabase/server';
import { applicationSchema } from '@/lib/schemas';
export async function submitApplication(prevState: unknown, formData: FormData) {
    console.log('--- Submitting Application ---');
    const file = formData.get('cv_file') as File;
    const rawData = {
        job_id: formData.get('job_id'),
        full_name: formData.get('full_name'),
        nik: formData.get('nik'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        address: formData.get('address'),
        cv_file: file,
    };

    console.log('Received Data:', { ...rawData, cv_file: file.name, size: file.size });

    const validation = applicationSchema.safeParse(rawData);

    if (!validation.success) {
        console.error('Validation Error:', validation.error.flatten().fieldErrors);
        return {
            error: validation.error.flatten().fieldErrors,
            message: 'Validasi gagal. Mohon periksa kembali input Anda.'
        };
    }

    const supabase = await createClient(true); // useServiceRole = true (Bypass RLS for submission)

    // 1. Upload CV
    const timestamp = Date.now();
    const safeFileName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, '');
    const cvPath = `${rawData.job_id}/${timestamp}_${safeFileName}`;

    console.log('Uploading CV to path:', cvPath);

    // Ensure bucket exists or handle error gracefully if using standard bucket
    const { data: uploadData, error: uploadError } = await supabase.storage
        .from('cvs')
        .upload(cvPath, file);

    if (uploadError) {
        console.error('Upload CV error:', uploadError);
        // Fallback or return error? For detailed debugging return message.
        return { message: `Gagal upload CV: ${uploadError.message}` };
    }
    console.log('Upload CV success:', uploadData);

    // 2. Insert Candidate
    // Check if candidate exists by email? Or just insert new?
    // For simplicity, let's try to find existing candidate by email first
    let candidateId;

    console.log('Checking for existing candidate:', rawData.email);

    const { data: existingCandidate, error: findError } = await supabase
        .from('candidates')
        .select('id')
        .eq('email', rawData.email)
        .maybeSingle();

    if (findError) {
        console.error('Error finding candidate:', findError);
        return { message: `Gagal validasi kandidat: ${findError.message}` };
    }

    if (existingCandidate) {
        console.log('Candidate found:', existingCandidate.id);
        candidateId = existingCandidate.id;
        // Optional: Update candidate details if needed
    } else {
        console.log('Creating new candidate...');
        const { data: newCandidate, error: candidateError } = await supabase
            .from('candidates')
            .insert({
                name: rawData.full_name,
                nik: rawData.nik,
                email: rawData.email,
                phone: rawData.phone,
                address: rawData.address,
                // resume_url: cvPath // Store CV path in candidate too?
            })
            .select('id')
            .single();

        if (candidateError) {
            console.error('Insert Candidate error:', candidateError);
            return { message: `Gagal menyimpan data kandidat: ${candidateError.message}` };
        }
        console.log('New candidate created:', newCandidate.id);
        candidateId = newCandidate.id;
    }

    // 3. Insert Application
    // Schema expects: job_id, candidate_id, status, resume_url
    console.log('Inserting into applications table...');
    const { error: insertError, data: appData } = await supabase
        .from('applications')
        .insert({
            job_id: rawData.job_id,
            candidate_id: candidateId,
            status: 'baru', // Reverted to lowercase to satisfy DB constraint "applications_status_check"
            resume_url: cvPath, // Path in storage
            // cover_letter: ...
        })
        .select()
        .single();


    if (insertError) {
        console.error('Insert Application error:', insertError);
        return { message: `Gagal menyimpan lamaran: ${insertError.message}` };
    }
    console.log('Application inserted successfully:', appData);

    return { success: true };
}
