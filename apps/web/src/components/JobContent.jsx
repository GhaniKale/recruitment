export default function JobContent({ description, requirements }) {
    return (
        <div className="space-y-10">
            <div className="prose prose-slate dark:prose-invert max-w-none">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="material-icons text-primary">description</span>
                    Deskripsi Pekerjaan
                </h3>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                        {description}
                    </p>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="material-icons text-primary">fact_check</span>
                    Kualifikasi &amp; Persyaratan
                </h3>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8">
                    <ul className="space-y-4">
                        {requirements.map((req, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <span className="material-icons text-green-500 mt-0.5 flex-shrink-0">check_circle_outline</span>
                                <span className="text-slate-700 dark:text-slate-300">{req}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
