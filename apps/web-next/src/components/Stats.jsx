export default function Stats() {
    const stats = [
        { value: '18+', label: 'Tahun Pengalaman' },
        { value: '10k+', label: 'Kandidat Ditempatkan' },
        { value: '50+', label: 'Perusahaan Partner' },
    ];

    return (
        <section className="py-12 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-slate-800">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center p-4">
                            <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
                            <div className="text-slate-500 dark:text-slate-400 font-medium tracking-wide uppercase text-sm">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
