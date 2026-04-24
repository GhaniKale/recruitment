import { Link } from 'react-router-dom';

export default function AdminHeader({ breadcrumbs }) {
    return (
        <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 lg:px-8 sticky top-0 z-10">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm">
                {breadcrumbs ? (
                    breadcrumbs.map((crumb, index) => (
                        <div key={index} className="flex items-center gap-2">
                            {index > 0 && <span className="text-slate-300">/</span>}
                            {crumb.href ? (
                                <Link to={crumb.href} className="text-slate-500 hover:text-primary transition-colors">
                                    {crumb.label}
                                </Link>
                            ) : (
                                <span className="font-medium text-slate-800 dark:text-white">{crumb.label}</span>
                            )}
                        </div>
                    ))
                ) : (
                    <span className="font-medium text-slate-800 dark:text-white">Dashboard</span>
                )}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
                <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                    <span className="material-icons">notifications</span>
                </button>
                <button className="lg:hidden p-2 text-slate-400">
                    <span className="material-icons">menu</span>
                </button>
            </div>
        </header>
    );
}
