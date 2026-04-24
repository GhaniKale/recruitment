import { createClient } from '@/lib/supabase/server';
import Navbar from '@/components/Navbar';
import JobsHero from '@/components/JobsHero';
import JobFilter from '@/components/JobFilter';
import JobCard from '@/components/JobCard';
import Pagination from '@/components/Pagination';
import Footer from '@/components/Footer';

export const revalidate = 0; // Disable static optimization for real-time data

export default async function JobsPage() {
    const supabase = await createClient();
    const { data: jobs } = await supabase
        .from('jobs')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });

    // Transform data to match JobCard props if necessary
    const formattedJobs = jobs?.map(job => ({
        ...job,
        // Map DB fields to UI props
        location: `${job.city}, ${job.country}`,
        category: 'General', // Default as DB doesn't have category
        type: 'Full Time', // Default as DB doesn't have type
    })) || [];

    return (
        <>
            <Navbar />
            <main className="bg-background-light dark:bg-background-dark min-h-screen pb-20">
                <JobsHero />
                <JobFilter />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Lowongan Terbaru</h2>
                        <span className="text-sm text-slate-500 dark:text-slate-400">Menampilkan {formattedJobs.length} lowongan</span>
                    </div>

                    {formattedJobs.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {formattedJobs.map((job) => (
                                <JobCard key={job.id} job={job} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-slate-500">Belum ada lowongan tersedia saat ini.</p>
                        </div>
                    )}

                    {/* Pagination - Placeholder for now as we just fetch all */}
                    <Pagination />
                </div>
            </main>
            <Footer />
        </>
    );
}
