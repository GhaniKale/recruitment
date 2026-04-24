import { createClient } from '@/lib/supabase/server';
import AdminLayout from '@/components/AdminLayout'; // Check if layout is used in page or layout.tsx
// Actually AdminLayout is used in layout.tsx, so page just renders content.
// But wait, the previous AdminDashboard.jsx used AdminLayout.
// In Next.js App Router, layout.tsx handles the layout. page.tsx should just render the inner content.
// So I should NOT wrap it in AdminLayout if app/admin/layout.tsx already does it.
// I created app/admin/layout.tsx in Step 215. So page.tsx should just be the content.

import StatsGrid from '@/components/StatsGrid';
import AnalyticsChart from '@/components/AnalyticsChart';
import AnalyticsMap from '@/components/AnalyticsMap';
import AnalyticsConversion from '@/components/AnalyticsConversion';
import ApplicantsTable from '@/components/ApplicantsTable';

export const revalidate = 0;

export default async function AdminDashboard() {
    const supabase = await createClient(true);

    // 1. Total Applications
    const { count: totalApps } = await supabase
        .from('applications')
        .select('*', { count: 'exact', head: true });

    // 2. Applications Today
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const { count: todayApps } = await supabase
        .from('applications')
        .select('*', { count: 'exact', head: true })
        .gte('created_at', today.toISOString());

    // 3. Waiting Review / 'Baru' or 'Review'
    const { count: reviewApps } = await supabase
        .from('applications')
        .select('*', { count: 'exact', head: true })
        .in('status', ['baru', 'review']);

    // 4. Accepted
    const { count: acceptedApps } = await supabase
        .from('applications')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'terpilih');

    // 5. Recent Applicants
    const { data: recentApplicants } = await supabase
        .from('applications')
        .select('*, jobs(title, city, country)')
        .order('created_at', { ascending: false })
        .limit(5);

    const stats = [
        { label: 'Total Pelamar', value: totalApps?.toString() || '0', change: '', icon: 'group', color: 'text-primary', bg: 'bg-primary/10' },
        { label: 'Pelamar Hari Ini', value: todayApps?.toString() || '0', change: 'Update terbaru', icon: 'today', color: 'text-blue-500', bg: 'bg-blue-500/10' },
        { label: 'Menunggu Review', value: reviewApps?.toString() || '0', change: 'Perlu tindakan', icon: 'pending_actions', color: 'text-orange-500', bg: 'bg-orange-500/10' },
        { label: 'Diterima Kerja', value: acceptedApps?.toString() || '0', change: '', icon: 'check_circle', color: 'text-green-500', bg: 'bg-green-500/10' },
    ];

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Dashboard Pelamar</h1>

            <StatsGrid stats={stats} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <AnalyticsChart />
                <aside className="lg:col-span-1 space-y-6">
                    <AnalyticsMap />
                    <AnalyticsConversion />
                </aside>
            </div>

            <ApplicantsTable applicants={recentApplicants} />
        </div>
    );
}
