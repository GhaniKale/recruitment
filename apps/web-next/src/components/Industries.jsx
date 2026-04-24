export default function Industries() {
    const industries = [
        { name: 'Konstruksi', sub: 'Sipil & Bangunan', icon: 'construction' },
        { name: 'Perhotelan', sub: 'F&B, Housekeeping', icon: 'restaurant' },
        { name: 'Manufaktur', sub: 'Operator & Teknisi', icon: 'precision_manufacturing' },
        { name: 'Perkebunan', sub: 'Sawit & Buah', icon: 'agriculture' },
        { name: 'Logistik', sub: 'Gudang & Transport', icon: 'local_shipping' },
    ];

    return (
        <section id="industries" className="py-24 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Bidang Keahlian</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">Sektor Industri Utama</h2>
                    <p className="text-slate-600 dark:text-slate-400">Kami memiliki spesialisasi dalam menyediakan tenaga kerja terampil untuk berbagai sektor industri vital di pasar internasional.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="group p-6 rounded-2xl bg-background-light dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer text-center"
                        >
                            <div className="w-16 h-16 mx-auto bg-white dark:bg-slate-700 rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                                <span className="material-icons text-primary text-3xl">{industry.icon}</span>
                            </div>
                            <h3 className="font-bold text-slate-900 dark:text-white mb-1">{industry.name}</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400">{industry.sub}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
