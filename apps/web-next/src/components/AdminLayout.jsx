'use client';

import { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';

export default function AdminLayout({ children, breadcrumbs }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-200">
            <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <AdminHeader
                    breadcrumbs={breadcrumbs}
                    setSidebarOpen={setSidebarOpen}
                />
                <main className="flex-1 overflow-y-auto w-full relative">
                    {children}
                </main>
            </div>
        </div>
    );
}
