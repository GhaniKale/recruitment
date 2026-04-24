import { Link } from 'react-router-dom';
import clsx from 'clsx';

export default function JobCard({ job }) {
    // Determine icon and color based on industry/category (mock logic)
    const getCategoryStyles = (category) => {
        switch (category) {
            case 'Engineering': return { bg: 'bg-blue-50 dark:bg-slate-700', icon: 'engineering', color: 'text-primary' };
            case 'Hospitality': return { bg: 'bg-orange-50 dark:bg-slate-700', icon: 'restaurant', color: 'text-orange-500' };
            case 'Healthcare': return { bg: 'bg-purple-50 dark:bg-slate-700', icon: 'local_hospital', color: 'text-purple-500' };
            case 'Construction': return { bg: 'bg-yellow-50 dark:bg-slate-700', icon: 'construction', color: 'text-yellow-600' };
            case 'Service': return { bg: 'bg-red-50 dark:bg-slate-700', icon: 'cleaning_services', color: 'text-red-500' };
            case 'Technical': return { bg: 'bg-indigo-50 dark:bg-slate-700', icon: 'bolt', color: 'text-indigo-500' };
            default: return { bg: 'bg-slate-50 dark:bg-slate-700', icon: 'work', color: 'text-slate-500' };
        }
    };

    const style = getCategoryStyles(job.category);

    return (
        <div className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col">
            <div className="h-2 bg-primary w-full"></div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <div className={clsx("p-2 rounded-lg", style.bg)}>
                        <span className={clsx("material-icons text-3xl", style.color)}>{style.icon}</span>
                    </div>
                    <span className={clsx(
                        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                        job.type === 'Full Time'
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    )}>
                        {job.type}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">{job.title}</h3>

                <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center text-slate-600 dark:text-slate-300 text-sm">
                        <span className="material-icons text-slate-400 text-lg mr-2">place</span>
                        {job.location}
                    </div>
                    <div className="flex items-center text-slate-600 dark:text-slate-300 text-sm font-medium">
                        <span className="material-icons text-green-600 text-lg mr-2">payments</span>
                        {job.salary}
                    </div>
                </div>

                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-2 flex-grow">
                    {job.description}
                </p>

                <div className="flex gap-3 mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
                    <Link
                        to={`/jobs/${job.id}`}
                        className="flex-1 text-center px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-sm font-medium"
                    >
                        Detail
                    </Link>
                    <Link
                        to={`/jobs/${job.id}/apply`}
                        className="flex-1 text-center px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors shadow-md shadow-primary/20 text-sm font-medium"
                    >
                        Apply
                    </Link>
                </div>
            </div>
        </div>
    );
}
