import React from 'react';
import AdminLayout from '../components/AdminLayout';
import AnalyticsFilters from '../components/AnalyticsFilters';
import AnalyticsStats from '../components/AnalyticsStats';
import AnalyticsChart from '../components/AnalyticsChart';
import AnalyticsMap from '../components/AnalyticsMap';
import AnalyticsConversion from '../components/AnalyticsConversion';

export default function Analytics() {
    const user = { name: 'Admin HR', role: 'admin@mardel.co.id' };

    return (
        <AdminLayout title="Laporan Analitik Rekrutmen" user={user}>
            <AnalyticsFilters />
            <AnalyticsStats />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <AnalyticsChart />
                <aside className="lg:col-span-1 space-y-6">
                    <AnalyticsMap />
                    <AnalyticsConversion />
                </aside>
            </div>
        </AdminLayout>
    );
}
