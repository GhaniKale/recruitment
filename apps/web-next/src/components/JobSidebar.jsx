import Link from 'next/link';

export default function JobSidebar({ jobId }) {
    const shareLinks = [
        { name: 'WhatsApp', color: 'bg-[#25D366] hover:bg-[#20bd5a]', icon: 'share' }, // Using share icon as placeholder
        { name: 'LinkedIn', color: 'bg-[#0077b5] hover:bg-[#006097]', icon: 'share' },
        { name: 'Facebook', color: 'bg-[#1877f2] hover:bg-[#166fe5]', icon: 'share' },
        { name: 'Copy Link', color: 'bg-slate-600 hover:bg-slate-700', icon: 'content_copy' },
    ];

    return (
        <div className="lg:sticky lg:top-24 space-y-6">
            {/* Apply Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-none">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Tertarik dengan posisi ini?</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                    Segera kirimkan lamaran Anda sebelum pendaftaran ditutup.
                </p>

                <Link
                    href={`/jobs/${jobId}/apply`}
                    className="block w-full py-3.5 px-4 bg-primary hover:bg-primary-hover text-white text-center font-bold rounded-xl shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 mb-4"
                >
                    LAMAR SEKARANG
                </Link>

                <p className="text-center text-xs text-slate-400">
                    Proses seleksi tidak dipungut biaya apapun.
                </p>
            </div>

            {/* Share Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Bagikan Lowongan</h3>
                <div className="grid grid-cols-4 gap-2">
                    {shareLinks.map((link) => (
                        <button
                            key={link.name}
                            className={`w-full aspect-square flex items-center justify-center rounded-lg text-white transition-colors ${link.color}`}
                            title={link.name}
                        >
                            <span className="material-icons text-lg">{link.icon}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Contact Widget */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white/10 rounded-lg">
                            <span className="material-icons">support_agent</span>
                        </div>
                        <h3 className="font-bold">Butuh Bantuan?</h3>
                    </div>
                    <p className="text-slate-300 text-sm mb-4">
                        Hubungi tim rekrutmen kami jika ada pertanyaan.
                    </p>
                    <button className="w-full py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-sm font-medium transition-colors">
                        Chat WhatsApp
                    </button>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            </div>
        </div>
    );
}
