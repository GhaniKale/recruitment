import { createClient } from '@/lib/supabase/server';
import JobForm from '@/components/admin/JobForm';
import { notFound } from 'next/navigation';

export const revalidate = 0;

export default async function EditJobPage({ params }: { params: { id: string } }) {
    const supabase = await createClient();

    const { data: job, error } = await supabase
        .from('jobs')
        .select('*')
        .eq('id', params.id)
        .single();

    if (error || !job) {
        notFound();
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Edit Lowongan</h1>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Perbarui informasi lowongan pekerjaan.</p>
            </div>
            <JobForm job={job} />
        </div>
    );
}
