import { Link } from 'react-router-dom';

export default function Breadcrumbs({ items }) {
    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <Link to="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-white transition-colors">
                        <span className="material-icons text-lg mr-2">home</span>
                        Beranda
                    </Link>
                </li>
                {items.map((item, index) => (
                    <li key={index}>
                        <div className="flex items-center">
                            <span className="material-icons text-slate-400 text-lg mx-1">chevron_right</span>
                            {item.href ? (
                                <Link to={item.href} className="text-sm font-medium text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-white transition-colors">
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-sm font-medium text-slate-800 dark:text-white" aria-current="page">
                                    {item.label}
                                </span>
                            )}
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    );
}
