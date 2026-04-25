'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function KontakPage() {
    const [formData, setFormData] = useState({ nama: '', whatsapp: '', pesan: '' });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Build WhatsApp message
        const message = encodeURIComponent(
            `Halo, saya ${formData.nama}.\nNomor WA: ${formData.whatsapp}\n\nPesan:\n${formData.pesan}`
        );
        window.open(`https://wa.me/6285972842784?text=${message}`, '_blank');
        setSent(true);
    };

    return (
        <>
            <Navbar />
            <main className="bg-background-light dark:bg-background-dark min-h-screen pt-20">
                <div className="max-w-5xl mx-auto px-4 py-12">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase rounded-full mb-4">
                            Hubungi Kami
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Kontak</h1>
                        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
                            Punya pertanyaan? Hubungi kami langsung via WhatsApp atau isi form di bawah ini.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 p-8 space-y-6">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">LPK Akuur Sauyunan</h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Lembaga penyalur tenaga kerja luar negeri resmi dan terpercaya dengan pendampingan lengkap hingga penempatan.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                                            <span className="material-icons text-accent text-xl">location_on</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-900 dark:text-white text-sm">Alamat</p>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">Jl. Jendral Sudirman Kav. 52-53, Jakarta Selatan, 12190</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                                            <span className="material-icons text-accent text-xl">phone</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-900 dark:text-white text-sm">WhatsApp Admin</p>
                                            <a href="https://wa.me/6285972842784" className="text-sm text-accent hover:underline font-bold">085972842784</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp CTA Card */}
                            <a
                                href="https://wa.me/6285972842784"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 bg-accent hover:bg-accent-hover text-white rounded-2xl p-6 shadow-xl shadow-accent/20 transition-all hover:-translate-y-1 group"
                            >
                                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                                </div>
                                <div>
                                    <p className="font-bold text-lg">Chat Langsung via WhatsApp</p>
                                    <p className="text-white/80 text-sm">Respon cepat, hubungi kami sekarang</p>
                                </div>
                                <span className="material-icons ml-auto text-2xl">arrow_forward</span>
                            </a>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 p-8">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Kirim Pesan</h2>

                            {sent && (
                                <div className="mb-6 p-4 bg-accent/10 border border-accent/30 rounded-lg text-accent font-semibold text-sm flex items-center gap-2">
                                    <span className="material-icons text-lg">check_circle</span>
                                    Pesan Anda telah dikirim ke WhatsApp admin.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="nama" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Nama Lengkap</label>
                                    <input
                                        type="text"
                                        id="nama"
                                        name="nama"
                                        required
                                        value={formData.nama}
                                        onChange={handleChange}
                                        className="block w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 shadow-sm focus:border-primary focus:ring-primary sm:text-sm dark:text-white"
                                        placeholder="Masukkan nama lengkap"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="whatsapp" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Nomor WhatsApp</label>
                                    <input
                                        type="tel"
                                        id="whatsapp"
                                        name="whatsapp"
                                        required
                                        value={formData.whatsapp}
                                        onChange={handleChange}
                                        className="block w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 shadow-sm focus:border-primary focus:ring-primary sm:text-sm dark:text-white"
                                        placeholder="0812..."
                                    />
                                </div>
                                <div>
                                    <label htmlFor="pesan" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Pesan</label>
                                    <textarea
                                        id="pesan"
                                        name="pesan"
                                        rows={5}
                                        required
                                        value={formData.pesan}
                                        onChange={handleChange}
                                        className="block w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 shadow-sm focus:border-primary focus:ring-primary sm:text-sm dark:text-white"
                                        placeholder="Tulis pesan atau pertanyaan Anda..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-3.5 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                                >
                                    <span className="material-icons">send</span>
                                    Kirim Pesan
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
