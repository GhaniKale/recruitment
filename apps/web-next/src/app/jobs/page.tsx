import { createClient } from '@/lib/supabase/server';
import Navbar from '@/components/Navbar';
import JobsHero from '@/components/JobsHero';
import JobFilter from '@/components/JobFilter';
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
                <JobFilter jobs={formattedJobs} />
            </main>
            <Footer />
        </>
    );
}
