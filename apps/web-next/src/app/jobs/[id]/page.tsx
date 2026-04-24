import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JobDetailHeader from '@/components/JobDetailHeader';
import JobContent from '@/components/JobContent';
import JobSidebar from '@/components/JobSidebar';
import Breadcrumbs from '@/components/Breadcrumbs';

export const revalidate = 0;

export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const supabase = await createClient();

    const { data: job, error } = await supabase
        .from('jobs')
        .select('*')
        .eq('id', id)
        .single();

    if (error || !job) {
        notFound();
    }

    // Format job data for components
    const formattedJob = {
        ...job,
        location: `${job.city}, ${job.country}`,
        category: 'General',
        type: 'Full Time',
        // Components expect specific structure, checking if we need to adapt more
    };

    const breadcrumbItems = [
        { label: 'Lowongan', href: '/jobs' },
        { label: job.title, href: null },
    ];

    return (
        <>
            <Navbar />
            <main className="bg-background-light dark:bg-background-dark min-h-screen pb-20 pt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-6">
                        <Breadcrumbs items={breadcrumbItems} />
                    </div>

                    <JobDetailHeader job={formattedJob} />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                        <div className="lg:col-span-2 space-y-8">
                            <JobContent
                                description={job.description}
                                requirements={job.requirements ? job.requirements.split('\n').filter((line: string) => line.trim() !== '') : []}
                            />
                        </div>
                        <div className="lg:col-span-1">
                            <JobSidebar jobId={job.id} />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
