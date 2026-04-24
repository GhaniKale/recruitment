import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PlacementCost() {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">
            <Navbar />

            <main className="flex-grow max-w-5xl mx-auto px-4 py-12 space-y-16 w-full">
                {/* Hero Section */}
                <section className="text-center space-y-8">
                    <div className="space-y-4">
                        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase rounded-full">Tahun Penempatan 2026</span>
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                            BIAYA PROSES PENEMPATAN <span className="text-primary">TURKEY</span>
                        </h1>
                        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                            Transparansi biaya pemberangkatan tenaga kerja profesional ke Turki dengan sistem pembayaran bertahap yang aman dan terpercaya.
                        </p>
                    </div>

                    {/* Main Cost Badge */}
                    <div className="relative inline-block group w-full max-w-3xl mx-auto">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent-gold rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-8 shadow-xl flex flex-col md:flex-row items-center gap-8 md:divide-x divide-slate-200 dark:divide-slate-800">
                            <div className="flex flex-col items-center md:items-start space-y-1 min-w-max">
                                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Total Biaya Penempatan</span>
                                <span className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter">Rp 25.000.000</span>
                            </div>
                            <div className="md:pl-8 space-y-4 w-full">
                                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold rounded-lg transition-colors">
                                    <span className="material-icons">download</span>
                                    <span>Download Rincian (PDF)</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Payment Stages Section */}
                <section className="space-y-10">
                    <div className="flex items-center gap-4">
                        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight">Tahapan Pembayaran</h2>
                        <div className="h-px flex-grow bg-slate-200 dark:bg-slate-800"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
                        {/* Vertical Timeline Container */}
                        <div className="relative flex flex-col space-y-0">
                            {/* Stage 1 */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="z-10 flex items-center justify-center w-12 h-12 bg-primary rounded-full ring-4 ring-primary/20 text-white shadow-lg shadow-primary/20">
                                        <span className="material-icons">description</span>
                                    </div>
                                    <div className="w-1 h-full bg-slate-200 dark:bg-slate-800 group-last:bg-transparent"></div>
                                </div>
                                <div className="flex-grow pb-12 pt-1">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Pembayaran Pertama (Rp 2.000.000)</h3>
                                        <span className="text-sm font-semibold px-3 py-1 bg-green-100 text-green-700 rounded-full w-fit">Pendaftaran Awal</span>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-400">Pembayaran dilakukan saat pengisian formulir pendaftaran, verifikasi dokumen asli, dan seleksi berkas awal untuk kualifikasi penempatan.</p>
                                </div>
                            </div>

                            {/* Stage 2 */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="z-10 flex items-center justify-center w-12 h-12 bg-white dark:bg-slate-800 border-2 border-primary rounded-full ring-4 ring-primary/10 text-primary">
                                        <span className="material-icons">assignment_ind</span>
                                    </div>
                                    <div className="w-1 h-full bg-slate-200 dark:bg-slate-800 group-last:bg-transparent"></div>
                                </div>
                                <div className="flex-grow pb-12 pt-1">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Pembayaran Kedua (Rp 10.000.000)</h3>
                                        <span className="text-sm font-semibold px-3 py-1 bg-blue-100 text-blue-700 rounded-full w-fit">Proses Dokumen</span>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-400">Pengurusan kontrak kerja, medical check-up tahap lanjut, legalitas dokumen di kementerian terkait, dan penempatan jadwal di database sistem Turki.</p>
                                </div>
                            </div>

                            {/* Stage 3 */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="z-10 flex items-center justify-center w-12 h-12 bg-white dark:bg-slate-800 border-2 border-primary rounded-full ring-4 ring-primary/10 text-primary">
                                        <span className="material-icons">verified_user</span>
                                    </div>
                                    <div className="w-1 h-full bg-slate-200 dark:bg-slate-800 group-last:bg-transparent"></div>
                                </div>
                                <div className="flex-grow pb-12 pt-1">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Pembayaran Ketiga (Rp 5.000.000)</h3>
                                        <span className="text-sm font-semibold px-3 py-1 bg-amber-100 text-amber-700 rounded-full w-fit">Visa Approved</span>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-400">Dibayarkan segera setelah notifikasi Visa Kerja (e-Visa) dari Kedutaan Besar Turki telah disetujui dan diterbitkan secara resmi.</p>
                                </div>
                            </div>

                            {/* Stage 4 */}
                            <div className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="z-10 flex items-center justify-center w-12 h-12 bg-white dark:bg-slate-800 border-2 border-primary rounded-full ring-4 ring-primary/10 text-primary">
                                        <span className="material-icons">flight_takeoff</span>
                                    </div>
                                    <div className="w-1 h-0 bg-transparent"></div>
                                </div>
                                <div className="flex-grow pt-1">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Pembayaran Keempat (Rp 8.000.000)</h3>
                                        <span className="text-sm font-semibold px-3 py-1 bg-purple-100 text-purple-700 rounded-full w-fit">Finalisasi & Tiket</span>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-400">Pelunasan untuk tiket pesawat (Jakarta-Istanbul), asuransi perjalanan internasional, dan pembekalan akhir sebelum keberangkatan (PAP).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Policies & Important Info */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Refund Policy */}
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-primary/10 rounded-lg">
                                <span className="material-icons text-primary">currency_exchange</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Kebijakan Pengembalian Dana</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex gap-3 items-start">
                                <span className="material-icons text-green-500 text-xl mt-0.5">check_circle</span>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Pengembalian 100% jika pembatalan dilakukan oleh pihak perusahaan atau user di Turki.</p>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="material-icons text-green-500 text-xl mt-0.5">check_circle</span>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Pengembalian 70% jika kandidat dinyatakan tidak lulus medical check-up tahap 2.</p>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="material-icons text-red-400 text-xl mt-0.5">cancel</span>
                                <p className="text-sm text-slate-600 dark:text-slate-400">Dikenakan biaya administrasi jika pembatalan sepihak oleh kandidat setelah Visa terbit.</p>
                            </li>
                        </ul>
                    </div>

                    {/* Important Info */}
                    <div className="bg-slate-900 dark:bg-slate-800 rounded-xl p-6 shadow-xl border border-primary/20">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-amber-400/20 rounded-lg">
                                <span className="material-icons text-amber-400">shield</span>
                            </div>
                            <h3 className="text-lg font-bold text-white">Informasi Penting & Keamanan</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                                <div className="flex items-start gap-3">
                                    <span className="material-icons text-amber-400 mt-1">warning</span>
                                    <div className="space-y-1">
                                        <p className="text-sm font-bold text-white">Waspada Penipuan</p>
                                        <p className="text-xs text-slate-400">PT Mardel TIDAK PERNAH meminta transfer ke rekening pribadi/individu. Semua transaksi wajib melalui Rekening Resmi Perusahaan.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 bg-primary/20 rounded-lg border border-primary/30">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-[10px] font-bold text-primary-300 uppercase tracking-widest text-primary/70">Official Bank Account</p>
                                        <p className="text-sm font-black text-white">Bank Mandiri: 123-00-98765-43-2</p>
                                        <p class="text-xs text-white/70">A/N PT MARDEL JAYA ABADI</p>
                                    </div>
                                    <span className="material-icons text-primary">account_balance</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Footer */}
                <section className="flex flex-col md:flex-row items-center justify-center gap-4 py-8 border-t border-slate-200 dark:border-slate-800">
                    <button className="w-full md:w-auto px-8 py-3.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2">
                        <span className="material-icons">chat</span>
                        <span>Tanya Admin (WhatsApp)</span>
                    </button>
                    <button className="w-full md:w-auto px-12 py-3.5 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 active:scale-95">
                        <span>Daftar Sekarang</span>
                        <span className="material-icons">rocket_launch</span>
                    </button>
                </section>

            </main>

            <Footer />
        </div>
    );
}
