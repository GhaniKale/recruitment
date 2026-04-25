'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const countries = [
    {
        id: 'turki',
        name: 'Turki',
        flag: '🇹🇷',
        cost: 'Rp 25.000.000',
        costNum: 25000000,
        color: 'from-red-500 to-red-700',
        borderColor: 'border-red-500',
        bgColor: 'bg-red-50 dark:bg-red-950/20',
        description: 'Program penempatan tenaga kerja ke Turki di sektor perhotelan, manufaktur, dan konstruksi',
        requirements: [
            'Usia Min 18 tahun',
            'Sehat jasmani & rohani',
            'Tidak buta warna',
            'Pendidikan min. SMA/sederajat',
            'Memiliki paspor aktif',
            'Bersedia mengikuti pelatihan',
        ],
        stages: [
            { title: 'Pembayaran Pertama', amount: 'Rp 2.000.000', desc: 'Pendaftaran awal, verifikasi dokumen asli, dan seleksi berkas.' },
            { title: 'Pembayaran Kedua', amount: 'Rp 10.000.000', desc: 'Pengurusan kontrak kerja, medical check-up, legalitas dokumen kementerian.' },
            { title: 'Pembayaran Ketiga', amount: 'Rp 5.000.000', desc: 'Setelah Visa Kerja (e-Visa) dari Kedutaan Besar Turki disetujui.' },
            { title: 'Pembayaran Keempat', amount: 'Rp 8.000.000', desc: 'Tiket pesawat (Jakarta-Istanbul), asuransi perjalanan, dan pembekalan akhir (PAP).' },
        ],
    },
    {
        id: 'malaysia',
        name: 'Malaysia',
        flag: '🇲🇾',
        cost: 'Rp 15.000.000',
        costNum: 15000000,
        color: 'from-blue-600 to-blue-800',
        borderColor: 'border-blue-600',
        bgColor: 'bg-blue-50 dark:bg-blue-950/20',
        description: 'Program penempatan tenaga kerja ke Malaysia di sektor perhotelan, asisten rumah tangga, perkebunan, dan manufaktur.',
        requirements: [
            'Usia Min 18 tahun',
            'Sehat jasmani & rohani',
            'Pendidikan min. SMP/sederajat',
            'Memiliki paspor aktif',
            'Bersedia mengikuti pelatihan',
        ],
        stages: [
            { title: 'Pembayaran Pertama', amount: 'Rp 2.000.000', desc: 'Pendaftaran awal, verifikasi dokumen, dan seleksi berkas.' },
            { title: 'Pembayaran Kedua', amount: 'Rp 8.000.000', desc: 'Pengurusan kontrak kerja, medical check-up, dan dokumen resmi.' },
            { title: 'Pembayaran Ketiga', amount: 'Rp 5.000.000', desc: 'Tiket pesawat, asuransi, dan pembekalan akhir sebelum keberangkatan.' },
        ],
    },
    {
        id: 'arab-saudi',
        name: 'Arab Saudi',
        flag: '🇸🇦',
        cost: 'Rp 20.000.000',
        costNum: 20000000,
        color: 'from-green-600 to-green-800',
        borderColor: 'border-green-600',
        bgColor: 'bg-green-50 dark:bg-green-950/20',
        description: 'Program penempatan tenaga kerja ke Arab Saudi di sektor hospitality, kesehatan, dan konstruksi.',
        requirements: [
            'Usia Min 18 tahun',
            'Sehat jasmani & rohani',
            'Pendidikan min. SMP/sederajat',
            'Memiliki paspor aktif',
            'Bersedia mengikuti pelatihan',
            'Wajib mengikuti tes Bahasa Arab dasar',
        ],
        stages: [
            { title: 'Pembayaran Pertama', amount: 'Rp 3.000.000', desc: 'Pendaftaran awal, verifikasi dokumen, dan seleksi berkas.' },
            { title: 'Pembayaran Kedua', amount: 'Rp 10.000.000', desc: 'Pengurusan kontrak kerja, medical check-up, legalitas dokumen.' },
            { title: 'Pembayaran Ketiga', amount: 'Rp 7.000.000', desc: 'Visa kerja, tiket pesawat, asuransi, dan pembekalan akhir.' },
        ],
    },
];

export default function CostPage() {
    const [selected, setSelected] = useState<typeof countries[number] | null>(null);

    return (
        <>
            <Navbar />
            <main className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display pt-20">
                <div className="max-w-5xl mx-auto px-4 py-12 space-y-16 w-full">
                    {/* Hero Section */}
                    <section className="text-center space-y-6">
                        <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase rounded-full">
                            Recruitment Kerja Luar Negeri
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                            Pilih <span className="text-primary">Negara Tujuan</span> Anda
                        </h1>
                        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                            Kami membuka kesempatan kerja ke luar negeri dengan pendampingan lengkap, legalitas jelas, dan proses terpercaya.
                        </p>
                    </section>

                    {/* Country Cards */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {countries.map((country) => (
                            <button
                                key={country.id}
                                onClick={() => setSelected(selected?.id === country.id ? null : country)}
                                className={`relative group text-left p-6 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                                    selected?.id === country.id
                                        ? `${country.borderColor} ${country.bgColor} shadow-lg`
                                        : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-slate-300'
                                }`}
                            >
                                <div className="text-center space-y-4">
                                    <div className="text-6xl">{country.flag}</div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{country.name}</h3>
                                    <div className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${country.color} text-white font-bold text-lg shadow-md`}>
                                        {country.cost}
                                    </div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">{country.description}</p>
                                </div>
                                {selected?.id === country.id && (
                                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                                        <span className="material-icons text-primary text-3xl">expand_more</span>
                                    </div>
                                )}
                            </button>
                        ))}
                    </section>

                    {/* Detail Panel */}
                    {selected && (
                        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
                            {/* Header */}
                            <div className={`bg-gradient-to-r ${selected.color} p-6 text-white`}>
                                <div className="flex items-center gap-4">
                                    <span className="text-5xl">{selected.flag}</span>
                                    <div>
                                        <h2 className="text-2xl font-bold">Program {selected.name}</h2>
                                        <p className="opacity-90">Total Biaya: {selected.cost}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 md:p-8 space-y-8">
                                {/* Requirements */}
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                        <span className="material-icons text-accent">assignment</span>
                                        Persyaratan
                                    </h3>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {selected.requirements.map((req, i) => (
                                            <div key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                                                <span className="material-icons text-accent text-lg mt-0.5">check_circle</span>
                                                <span className="text-sm">{req}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Payment Stages */}
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                        <span className="material-icons text-primary">payments</span>
                                        Tahapan Pembayaran
                                    </h3>
                                    <div className="relative flex flex-col space-y-0">
                                        {selected.stages.map((stage, i) => (
                                            <div key={i} className="flex gap-6 group">
                                                <div className="flex flex-col items-center">
                                                    <div className={`z-10 flex items-center justify-center w-10 h-10 rounded-full ring-4 ring-primary/20 text-white shadow-md ${i === 0 ? 'bg-primary' : 'bg-white dark:bg-slate-800 border-2 border-primary text-primary'}`}>
                                                        <span className="font-bold text-sm">{i + 1}</span>
                                                    </div>
                                                    {i < selected.stages.length - 1 && <div className="w-0.5 h-full bg-slate-200 dark:bg-slate-700"></div>}
                                                </div>
                                                <div className="flex-grow pb-8 pt-1">
                                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
                                                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">{stage.title} ({stage.amount})</h4>
                                                    </div>
                                                    <p className="text-sm text-slate-600 dark:text-slate-400">{stage.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                                    <Link href="/jobs" className="flex-1 px-8 py-3.5 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 text-center">
                                        <span className="material-icons">rocket_launch</span>
                                        Daftar Sekarang
                                    </Link>
                                    <a href="https://wa.me/6285972842784" target="_blank" rel="noopener noreferrer" className="flex-1 px-8 py-3.5 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl transition-all shadow-lg shadow-accent/20 flex items-center justify-center gap-2 text-center">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                                        Chat WhatsApp
                                    </a>
                                </div>

                                {/* Security Info */}
                                <div className="bg-slate-900 dark:bg-slate-800 rounded-xl p-5 border border-primary/20">
                                    <div className="flex items-start gap-3">
                                        <span className="material-icons text-amber-400 mt-0.5">warning</span>
                                        <div>
                                            <p className="text-sm font-bold text-white mb-1">Waspada Penipuan</p>
                                            <p className="text-xs text-slate-400">LPK Akuur Sauyunan TIDAK PERNAH meminta transfer ke rekening pribadi. Semua transaksi wajib melalui rekening resmi perusahaan.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
