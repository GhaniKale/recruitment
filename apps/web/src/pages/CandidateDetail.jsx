import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import AdminLayout from '../components/AdminLayout';

export default function CandidateDetail() {
    const { id } = useParams();
    const [status, setStatus] = useState('Wawancara HR');

    const breadcrumbs = [
        { label: 'Kandidat', href: '/admin/candidates' },
        { label: 'Detail', href: null } // Active/Current
    ];

    return (
        <AdminLayout breadcrumbs={breadcrumbs}>
            <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-6">

                {/* Header Section: Identity & Status Action */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden border-2 border-white dark:border-slate-700 shadow-sm">
                            <img
                                alt="Candidate Portrait"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZYQ8SCdCx7qTSChsF1ae39URVNu_aMVXzhkD6actcb0z57WDP1iZVOOW9JOVsV1xiuo3Z4_RE8AFUcCFB7y_239x_uYrSMlyX4rrvarPUm5ywFZlEPnyhqtDoLGaewb9Sg07t2G758ElsxDxv2oUJw0CAKHZ6ZTMwgPmMZS41B0SrpB7baMe6FLnFduGit_1ur7g6z9zd_sPqUmHovxctZSPMjvjgEka9A1TRQtEnRXbFQWXFuh6bwi8GYXjX1LcfKoWZczMvaw"
                            />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Budi Santoso</h1>
                            <p className="text-slate-500 dark:text-slate-400">Senior Frontend Engineer Applicant</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        <div className="relative">
                            <select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="block w-full sm:w-48 pl-3 pr-10 py-2.5 text-base border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-lg dark:bg-slate-800 dark:text-white cursor-pointer shadow-sm"
                            >
                                <option>Seleksi Berkas</option>
                                <option>Wawancara HR</option>
                                <option>Wawancara User</option>
                                <option>Offering</option>
                                <option>Ditolak</option>
                            </select>
                        </div>
                        <button className="inline-flex justify-center items-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all">
                            <span className="material-icons text-sm mr-2">save</span>
                            Update Status
                        </button>
                    </div>
                </div>

                {/* Main Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column: Details */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Contact & Identity Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Card: Kontak */}
                            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                                <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
                                    <h3 className="font-semibold text-slate-800 dark:text-white flex items-center gap-2">
                                        <span className="material-icons text-primary text-lg">contact_phone</span>
                                        Kontak
                                    </h3>
                                    <button className="text-xs font-medium text-primary hover:text-blue-700">Edit</button>
                                </div>
                                <div className="p-5 space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <span className="material-icons text-primary text-sm">phone</span>
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">Nomor Telepon</p>
                                            <p className="text-slate-800 dark:text-slate-200 font-medium mt-0.5">+62 812 3456 7890</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <span className="material-icons text-primary text-sm">email</span>
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">Email</p>
                                            <p className="text-slate-800 dark:text-slate-200 font-medium mt-0.5">budi.santoso@example.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <span className="material-icons text-primary text-sm">link</span>
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">LinkedIn</p>
                                            <a href="#" className="text-primary hover:underline font-medium mt-0.5 block">linkedin.com/in/budisantoso</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card: Identitas */}
                            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                                <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
                                    <h3 className="font-semibold text-slate-800 dark:text-white flex items-center gap-2">
                                        <span className="material-icons text-primary text-lg">badge</span>
                                        Identitas
                                    </h3>
                                    <button className="text-xs font-medium text-primary hover:text-blue-700">Edit</button>
                                </div>
                                <div className="p-5 space-y-4">
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-1">NIK (KTP)</p>
                                        <p className="text-slate-800 dark:text-slate-200">3201234567890001</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-1">Tempat, Tanggal Lahir</p>
                                        <p className="text-slate-800 dark:text-slate-200">Bandung, 12 Agustus 1995</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-1">Alamat Domisili</p>
                                        <p className="text-slate-800 dark:text-slate-200 leading-snug">Jl. Merdeka No. 45, Kel. Citarum, Kec. Bandung Wetan, Kota Bandung, Jawa Barat</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card: Dokumen */}
                        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                            <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800">
                                <h3 className="font-semibold text-slate-800 dark:text-white flex items-center gap-2">
                                    <span className="material-icons text-primary text-lg">folder_open</span>
                                    Dokumen
                                </h3>
                            </div>
                            <div className="p-5">
                                <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg group hover:border-primary/50 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded bg-red-100 text-red-500 flex items-center justify-center">
                                            <span className="material-icons">picture_as_pdf</span>
                                        </div>
                                        <div>
                                            <p className="font-medium text-slate-900 dark:text-white group-hover:text-primary transition-colors">CV_Budi_Santoso.pdf</p>
                                            <p className="text-xs text-slate-500">Diunggah 2 hari yang lalu • 2.4 MB</p>
                                        </div>
                                    </div>
                                    <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors">
                                        <span className="material-icons text-sm">download</span>
                                        Unduh
                                    </button>
                                </div>
                                <div className="mt-3 flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg group hover:border-primary/50 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded bg-blue-100 text-blue-500 flex items-center justify-center">
                                            <span className="material-icons">description</span>
                                        </div>
                                        <div>
                                            <p className="font-medium text-slate-900 dark:text-white group-hover:text-primary transition-colors">Portofolio_Design.pdf</p>
                                            <p className="text-xs text-slate-500">Diunggah 2 hari yang lalu • 15 MB</p>
                                        </div>
                                    </div>
                                    <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors">
                                        <span className="material-icons text-sm">download</span>
                                        Unduh
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Card: Admin Notes */}
                        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                            <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800">
                                <h3 className="font-semibold text-slate-800 dark:text-white flex items-center gap-2">
                                    <span className="material-icons text-primary text-lg">edit_note</span>
                                    Catatan Admin
                                </h3>
                            </div>
                            <div className="p-5">
                                <textarea
                                    className="w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white shadow-sm focus:border-primary focus:ring-primary min-h-[120px]"
                                    placeholder="Tambahkan catatan internal mengenai kandidat ini..."
                                ></textarea>
                                <div className="mt-3 flex justify-end">
                                    <button className="text-sm px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors font-medium">
                                        Simpan Catatan
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Timeline */}
                    <div className="lg:col-span-1">
                        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm sticky top-24">
                            <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800">
                                <h3 className="font-semibold text-slate-800 dark:text-white flex items-center gap-2">
                                    <span className="material-icons text-primary text-lg">history</span>
                                    Timeline Proses
                                </h3>
                            </div>
                            <div className="p-5">
                                <div className="relative pl-4 border-l-2 border-slate-100 dark:border-slate-800 space-y-8">
                                    {/* Timeline Item: Current */}
                                    <div className="relative">
                                        <div className="absolute -left-[21px] top-1 w-3 h-3 bg-primary rounded-full ring-4 ring-white dark:ring-slate-900"></div>
                                        <p className="text-xs text-primary font-bold mb-1">HARI INI, 10:30</p>
                                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Status diubah ke Wawancara HR</h4>
                                        <p className="text-sm text-slate-500 mt-1">Oleh Admin HR (Siti Rahma)</p>
                                    </div>
                                    {/* Timeline Item */}
                                    <div className="relative">
                                        <div className="absolute -left-[21px] top-1 w-3 h-3 bg-slate-300 dark:bg-slate-600 rounded-full ring-4 ring-white dark:ring-slate-900"></div>
                                        <p className="text-xs text-slate-400 font-bold mb-1">KEMARIN, 14:15</p>
                                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Lolos Screening Awal</h4>
                                        <p className="text-sm text-slate-500 mt-1">Sistem otomatis menandai kandidat memenuhi kriteria dasar.</p>
                                    </div>
                                    {/* Timeline Item */}
                                    <div className="relative">
                                        <div className="absolute -left-[21px] top-1 w-3 h-3 bg-slate-300 dark:bg-slate-600 rounded-full ring-4 ring-white dark:ring-slate-900"></div>
                                        <p className="text-xs text-slate-400 font-bold mb-1">2 HARI LALU, 09:00</p>
                                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Aplikasi Diterima</h4>
                                        <p className="text-sm text-slate-500 mt-1">Kandidat mengirimkan lamaran melalui portal web.</p>
                                    </div>
                                    {/* Timeline Item (Start) */}
                                    <div className="relative">
                                        <div className="absolute -left-[21px] top-1 w-3 h-3 bg-slate-300 dark:bg-slate-600 rounded-full ring-4 ring-white dark:ring-slate-900"></div>
                                        <p className="text-xs text-slate-400 font-bold mb-1">2 HARI LALU, 08:45</p>
                                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Akun Dibuat</h4>
                                        <p className="text-sm text-slate-500 mt-1">Budi Santoso mendaftar akun baru.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
