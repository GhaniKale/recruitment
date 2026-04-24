export default function JobBenefits({ benefits }) {
    return (
        <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-icons text-primary">diamond</span>
                Benefit &amp; Fasilitas
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400">
                            <span className="material-icons text-xl">{benefit.icon}</span>
                        </div>
                        <span className="font-medium text-slate-700 dark:text-slate-200">{benefit.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
