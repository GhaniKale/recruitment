
export default function HomeHero() {
    return (
        <section className="relative pt-16 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Text Content */}
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Resmi &amp; Terdaftar
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
                            Solusi Rekrutmen <span className="text-primary relative inline-block">
                                Terpercaya
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20" preserveAspectRatio="none" viewBox="0 0 100 10">
                                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path>
                                </svg>
                            </span> Sejak 2006
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-lg">
                            Menghubungkan talenta terbaik Indonesia dengan peluang karir internasional. Kami menjembatani kesuksesan Anda dengan mitra global yang kredibel.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="/jobs" className="inline-flex justify-center items-center px-8 py-4 rounded-xl bg-primary text-white font-semibold text-lg hover:bg-blue-600 transition-all shadow-xl shadow-primary/25 hover:-translate-y-1">
                                LIHAT LOWONGAN
                                <span className="material-icons ml-2 text-xl">arrow_forward</span>
                            </a>
                            <a href="#about" className="inline-flex justify-center items-center px-8 py-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                                Pelajari Kami
                            </a>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="relative lg:ml-auto">
                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>

                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 dark:shadow-slate-900/50 border border-slate-100 dark:border-slate-800">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX211xTE5miaDIDICk_a0dn72UtHeegMLoZKZ5pCBDDU-5b_mAPl-CsLb0a5xgxfv7mlAWcIsIZybi_8uOwrPoz7FhaZ4g6cqv6CRtEZz5GFwBrkQ8KhNfprXpEwVNtTEbwqWbabvbMMwdPiKj0l0U-VST_ZWBsoaze1NgKVL6m8ui3r1qKnyLhc4WdQqrJCz75_GEzGrck7_E2nlMTRdHdLTxd366_k9HMy4w0SFJ3OA_opCOpCcS___re_p4Yfd2kFFvDCIIzQ"
                                alt="Professional diverse team in a corporate office setting"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />

                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 flex items-center gap-4 max-w-xs">
                                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg text-green-600 dark:text-green-400">
                                    <span className="material-icons">verified_user</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">Izin Resmi Kemnaker</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Nomor: KEP.123/MEN/2006</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
