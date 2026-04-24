import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

export default function AdminSidebar() {
    const location = useLocation();

    const navItems = [
        { name: 'Dashboard', path: '/admin/dashboard', icon: 'dashboard' },
        { name: 'Kandidat', path: '/admin/candidates', icon: 'people' },
        { name: 'Lowongan', path: '/admin/jobs', icon: 'work' },
        { name: 'Pengaturan', path: '/admin/settings', icon: 'settings' },
    ];

    return (
        <aside className="hidden lg:flex flex-col w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-all duration-300">
            {/* Logo Area */}
            <div className="h-16 flex items-center px-6 border-b border-slate-200 dark:border-slate-800">
                <div className="w-8 h-8 rounded bg-primary mr-3 flex items-center justify-center text-white font-bold">M</div>
                <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">PT Mardel</span>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                {navItems.map((item) => {
                    const isActive = location.pathname.startsWith(item.path);
                    return (
                        <Link
                            key={item.name}
                            to={item.path}
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
            <div className="p-4 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                        <img
                            alt="Admin Profile"
                            className="w-full h-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBThahoSgM3jypJBELOtiNUNBl7ZgluXcV26tc3Z3A84Ip27Jb-EtaDal-h6FngwDZjqYJqK8QS9C17IAojalZbU0lk6A0dMnMEh4SFPdxHoVv8EQJIdRn3VKu99u_JTHL5dsIVq5hUFVFs3CfBbh1dRviR0gVqzXx3EvptXa7snp-4toxSe2GzaCwBVJn0ex1ML4dJKVXOK7AN3vfruQMB4blBRQ31-Mf7uzGcGAeeNdX7ESqlq6rJKkr1Ap4XSu_tHEIhQ00bgg"
                        />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-900 dark:text-white truncate">Admin HR</p>
                        <p className="text-xs text-slate-500 truncate">hr@mardel.co.id</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
