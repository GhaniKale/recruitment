
export default function JobDetailHeader({ job }) {
    return (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 mb-8 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div>
                        <div className="flex flex-wrap gap-3 mb-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                                {job.category}
                            </span>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                                {job.type}
                            </span>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                                ID: {job.id}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">{job.title}</h1>

                        <div className="flex flex-wrap gap-y-2 gap-x-6 text-slate-600 dark:text-slate-300 text-sm md:text-base">
                            <div className="flex items-center">
                                <span className="material-icons text-slate-400 mr-2 text-xl">location_on</span>
                                {job.location}
                            </div>
                            <div className="flex items-center">
                                <span className="material-icons text-green-600 mr-2 text-xl">payments</span>
                                <span className="font-semibold">{job.salary}</span>
                            </div>
                            <div className="flex items-center">
                                <span className="material-icons text-slate-400 mr-2 text-xl">schedule</span>
                                Diposting {job.postedAt}
                            </div>
                        </div>
                    </div>

                    <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center border border-slate-100 dark:border-slate-700">
                            <span className="material-icons text-4xl text-slate-400">domain</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        </div>
    );
}
