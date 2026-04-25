'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useEffect } from 'react';

import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

export default function AdminSidebar({ sidebarOpen, setSidebarOpen }) {
    const pathname = usePathname();
    const router = useRouter();
    const supabase = createClient();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.refresh(); // Refresh to ensure middleware catches the lack of session
        router.push('/admin/login');
    };

    // Close sidebar on route change (mobile)
    useEffect(() => {
        if (sidebarOpen && setSidebarOpen) {
            setSidebarOpen(false);
        }
    }, [pathname]);

    return (
        <>
            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Sidebar */}
            <aside
                className={clsx(
                    "fixed inset-y-0 left-0 z-50 w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-transform duration-300 lg:static lg:translate-x-0 flex flex-col",
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                {/* Logo Area */}
                <div className="h-16 flex items-center px-6 border-b border-slate-200 dark:border-slate-800 justify-between shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white font-bold">M</div>
                        <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">LPK Akuur</span>
                    </div>
                    {/* Close button for mobile */}
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="lg:hidden text-slate-400 hover:text-slate-600"
                    >
                        <span className="material-icons">close</span>
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                    {/* Hardcoded nav items for now, same as before */}
                    {[
                        { name: 'Dashboard', path: '/admin/dashboard', icon: 'dashboard' },
                        { name: 'Kandidat', path: '/admin/candidates', icon: 'people' },
                        { name: 'Lowongan', path: '/admin/jobs', icon: 'work' },
                        { name: 'Pengaturan', path: '/admin/settings', icon: 'settings' },
                    ].map((item) => {
                        const isActive = pathname.startsWith(item.path);
                        return (
                            <Link
                                key={item.name}
                                href={item.path}
                                onClick={() => setSidebarOpen(false)}
                                className={clsx(
                                    "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                                    isActive
                                        ? "bg-primary/10 text-primary font-medium"
                                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                                )}
                            >
                                <span className="material-icons text-xl">{item.icon}</span>
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* User Profile at Bottom */}
                <div className="p-4 border-t border-slate-200 dark:border-slate-800 shrink-0">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                            {/* Placeholder generic avatar */}
                            <div className="w-full h-full flex items-center justify-center bg-primary text-white text-xs">A</div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-slate-900 dark:text-white truncate">Admin HR</p>
                            <p className="text-xs text-slate-500 truncate">admin@Akuursauyunan.id</p>
                        </div>
                    </div>

                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg transition-colors border border-transparent hover:border-red-200 dark:hover:border-red-900/20"
                    >
                        <span className="material-icons text-lg">logout</span>
                        Sign Out
                    </button>
                </div>
            </aside>
        </>
    );
}
