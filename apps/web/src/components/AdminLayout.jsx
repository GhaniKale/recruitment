import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';

export default function AdminLayout({ children, breadcrumbs }) {
    return (
        <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-200">
            <AdminSidebar />
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <AdminHeader breadcrumbs={breadcrumbs} />
                <main className="flex-1 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
