import Link from 'next/link';

export default function HowToApply() {
    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Cara Melamar
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        Proses pendaftaran yang mudah dan transparan. Ikuti 3 langkah sederhana ini untuk memulai karir global Anda.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {[
                        { step: 1, title: 'Pilih Lowongan', desc: 'Temukan pekerjaan yang sesuai dengan minat dan keahlian Anda.', icon: 'search' },
                        { step: 2, title: 'Isi Data & Upload CV', desc: 'Lengkapi formulir pendaftaran dan unggah CV terbaik Anda.', icon: 'description' },
                        { step: 3, title: 'Submit Lamaran', desc: 'Kirim lamaran Anda dan tunggu informasi selanjutnya dari tim kami.', icon: 'send' },
                    ].map((item, index) => (
                        <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700 text-center relative hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="material-icons text-3xl">{item.icon}</span>
                            </div>
                            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-400 font-bold text-sm">
                                {item.step}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/cara-melamar" className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-primary border border-primary/20 hover:border-primary hover:bg-primary/5 font-medium rounded-xl transition-colors shadow-sm">
                        <span>Lihat Panduan Lengkap</span>
                        <span className="material-icons text-sm">arrow_forward</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
