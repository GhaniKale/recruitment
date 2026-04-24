import AdminLayout from '../components/AdminLayout';
import StatsGrid from '../components/StatsGrid';
import AnalyticsChart from '../components/AnalyticsChart';
import AnalyticsMap from '../components/AnalyticsMap';
import AnalyticsConversion from '../components/AnalyticsConversion';
import ApplicantsTable from '../components/ApplicantsTable';

export default function AdminDashboard() {
    // Mock User
    const user = { name: 'Admin', role: 'Super Administrator' };

    return (
        <AdminLayout title="Dashboard Pelamar" user={user}>
            <StatsGrid />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <AnalyticsChart />
                <aside className="lg:col-span-1 space-y-6">
                    <AnalyticsMap />
                    <AnalyticsConversion />
                </aside>
            </div>

            <ApplicantsTable />
        </AdminLayout>
    );
}
