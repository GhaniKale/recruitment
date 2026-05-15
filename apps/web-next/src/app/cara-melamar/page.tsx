import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cara Melamar | LPK Akuur Sauyunan',
  description: 'Panduan lengkap cara melamar pekerjaan ke luar negeri melalui LPK Akuur Sauyunan. Ikuti langkah-langkah mudahnya di sini.',
  alternates: {
    canonical: '/cara-melamar',
  },
};

export default function CaraMelamarPage() {
    const steps = [
        {
            title: 'Buka halaman Lowongan',
            desc: 'Klik tombol "Lihat Lowongan" untuk melihat daftar pekerjaan yang tersedia.',
            icon: 'work_outline'
        },
        {
            title: 'Pilih pekerjaan yang diinginkan',
            desc: 'Baca detail pekerjaan dengan teliti dan klik tombol "Detail Lowongan".',
            icon: 'ads_click'
        },
        {
            title: 'Klik tombol "Apply"',
            desc: 'Jika Anda merasa cocok dengan persyaratan, klik tombol "Apply" pada halaman detail.',
            icon: 'touch_app'
        },
        {
            title: 'Isi data diri lengkap',
            desc: 'Lengkapi formulir pendaftaran dengan data diri yang akurat dan dapat dipertanggungjawabkan.',
            icon: 'person_add'
        },
        {
            title: 'Upload CV (WAJIB)',
            desc: 'Unggah Curriculum Vitae (CV) terbaru Anda sebagai syarat wajib pendaftaran.',
            icon: 'upload_file'
        },
        {
            title: 'Klik Submit',
            desc: 'Periksa kembali data Anda, lalu klik "Submit" untuk mengirimkan lamaran.',
            icon: 'check_circle'
        }
    ];

    return (
        <>
            <Navbar />
            <main className="bg-slate-50 dark:bg-slate-900 min-h-screen pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase rounded-full mb-4">
                            Panduan Pelamar
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                            Cara Melamar Pekerjaan
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            Ikuti langkah-langkah di bawah ini untuk memastikan proses pendaftaran Anda berjalan lancar.
                        </p>
                    </div>

                    <div className="space-y-6 mb-12">
                        {steps.map((step, index) => (
                            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row gap-6 items-start sm:items-center hover:shadow-md transition-shadow">
                                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                                    <span className="material-icons text-3xl">{step.icon}</span>
                                </div>
                                <div className="flex-grow">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-sm font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded">Step {index + 1}</span>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{step.title}</h3>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-400">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center bg-white dark:bg-slate-800 rounded-2xl p-8 border border-primary/20 shadow-lg shadow-primary/5">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Siap untuk memulai karir Anda?</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-8">Jelajahi berbagai peluang karir menarik yang menanti Anda di luar negeri.</p>
                        <Link href="/jobs" className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/30 hover:-translate-y-1">
                            <span className="material-icons">work</span>
                            <span>Lihat Lowongan Sekarang</span>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
