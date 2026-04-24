
export default function HomeCTA() {
    return (
        <section className="py-20 bg-primary/5 dark:bg-slate-800/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Siap Mengembangkan Karir atau Bisnis Anda?</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
                    Hubungi tim kami hari ini untuk konsultasi gratis mengenai kebutuhan rekrutmen atau peluang kerja yang tersedia.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="px-8 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-blue-600 transition-colors shadow-lg shadow-primary/30">
                        Hubungi Kami
                    </button>
                    <a href="/jobs" className="px-8 py-3 rounded-xl bg-white dark:bg-slate-700 text-slate-700 dark:text-white font-semibold border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors">
                        Lihat Lowongan Terbaru
                    </a>
                </div>
            </div>
        </section>
    );
}
