import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import FormHeader from '@/components/FormHeader'; // Ensure this component exists
import ApplicationForm from '@/components/ApplicationForm';
import Footer from '@/components/Footer';

export const revalidate = 0;

export default async function ApplyPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    // Fetch Job Title
    const supabase = await createClient();
    const { data: job } = await supabase.from('jobs').select('title').eq('id', id).single();

    if (!job) {
        notFound();
    }

    const breadcrumbs = [
        { label: 'Lowongan', href: '/jobs' },
        { label: job.title, href: `/jobs/${id}` },
        { label: 'Formulir Lamaran', href: null }
    ];

    // Pass server action or handle inside component?
    // We will update ApplicationForm to handle the action invocation

    return (
        <>
            <Navbar />
            <main className="bg-background-light dark:bg-background-dark min-h-screen pb-20">
                <FormHeader
                    title="Formulir Lamaran Kerja"
                    subtitle="Lengkapi data diri Anda dengan benar untuk melanjutkan proses seleksi."
                />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
                    <div className="mb-6">
                        <Breadcrumbs items={breadcrumbs} />
                    </div>
                    <ApplicationForm jobTitle={job.title} jobId={id} />
                </div>
            </main>
            <Footer />
        </>
    );
}
