import { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../components/AdminLayout';

export default function AdminJobListings() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCountry, setFilterCountry] = useState('all');
    const [filterStatus, setFilterStatus] = useState('all');

    // Mock User for AdminLayout
    const user = { name: 'Admin', role: 'Super Administrator' };

    const breadcrumbs = [
        { label: 'Dashboard', href: '/admin/dashboard' },
        { label: 'Lowongan' },
    ];

    const jobs = [
        {
            id: 1,
            title: 'Operator Produksi',
            category: 'Manufaktur Otomotif',
            icon: 'engineering',
            iconColor: 'bg-primary/10 text-primary dark:text-blue-300',
            country: 'Jepang',
            flagColor: 'bg-gray-200',
            flagContent: <div className="absolute inset-0 bg-white"><div className="w-2.5 h-2.5 bg-red-600 rounded-full mx-auto my-1.5"></div></div>,
            city: 'Osaka',
            salary: '¥180,000',
            status: 'Aktif',
            statusColor: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800',
            statusDot: 'bg-green-500'
        },
        {
            id: 2,
            title: 'Caregiver',
            category: 'Layanan Kesehatan',
            icon: 'medical_services',
            iconColor: 'bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400',
            country: 'Taiwan',
            flagColor: 'bg-red-600 border-red-700',
            flagContent: <div className="absolute top-0 left-0 w-3 h-2.5 bg-blue-800"></div>,
            city: 'Taipei',
            salary: 'NT$24,000',
            status: 'Aktif',
            statusColor: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800',
            statusDot: 'bg-green-500'
        },
        {
            id: 3,
            title: 'Welder',
            category: 'Konstruksi Kapal',
            icon: 'precision_manufacturing',
            iconColor: 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400',
            country: 'Korea Selatan',
            flagColor: 'bg-white border-gray-300',
            flagContent: (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full transform rotate-45" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', background: 'radial-gradient(circle, #cd2e3a 40%, #0047a0 40% 60%, #000 60%)' }}></div>
                    <div className="w-full h-full bg-white flex items-center justify-center absolute inset-0 opacity-0"></div>
                    {/* Simplified Korean Flag for CSS */}
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'linear-gradient(to bottom, #cd2e3a 50%, #0047a0 50%)' }}></div>
                </div>
            ),
            city: 'Incheon',
            salary: '₩2,200,000',
            status: 'Nonaktif',
            statusColor: 'bg-gray-100 text-gray-800 dark:bg-gray-700/50 dark:text-gray-300 border-gray-200 dark:border-gray-600',
            statusDot: 'bg-gray-500'
        },
        {
            id: 4,
            title: 'Pekerja Pertanian',
            category: 'Perkebunan Sayur',
            icon: 'agriculture',
            iconColor: 'bg-primary/10 text-primary dark:text-blue-300',
            country: 'Jepang',
            flagColor: 'bg-gray-200',
            flagContent: <div className="absolute inset-0 bg-white"><div className="w-2.5 h-2.5 bg-red-600 rounded-full mx-auto my-1.5"></div></div>,
            city: 'Hokkaido',
            salary: '¥165,000',
            status: 'Aktif',
            statusColor: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800',
            statusDot: 'bg-green-500'
        },
        {
            id: 5,
            title: 'Forklift Operator',
            category: 'Logistik',
            icon: 'forklift',
            iconColor: 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400',
            country: 'Korea Selatan',
            flagColor: 'bg-white border-gray-300',
            flagContent: <div className="w-full h-full bg-white flex items-center justify-center"><div className="w-2.5 h-2.5 rounded-full" style={{ background: 'linear-gradient(to bottom, #cd2e3a 50%, #0047a0 50%)' }}></div></div>,
            city: 'Busan',
            salary: '₩2,400,000',
            status: 'Nonaktif',
            statusColor: 'bg-gray-100 text-gray-800 dark:bg-gray-700/50 dark:text-gray-300 border-gray-200 dark:border-gray-600',
            statusDot: 'bg-gray-500'
        }
    ];

    return (
        <AdminLayout breadcrumbs={breadcrumbs} user={user}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Manajemen Lowongan Kerja</h2>
                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Kelola daftar pekerjaan, edit status, dan pantau rekrutmen.</p>
                    </div>
                    <Link to="/admin/jobs/new" className="inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200">
                        <span className="material-icons text-lg mr-2">add</span>
                        Tambah Lowongan
                    </Link>
                </div>

                {/* Filter & Search Card */}
                <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-4 mb-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Search */}
                        <div className="flex-1 relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="material-icons text-slate-400 text-xl">search</span>
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 dark:border-slate-700 rounded-lg leading-5 bg-white dark:bg-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition duration-150 ease-in-out"
                                placeholder="Cari judul pekerjaan, kota..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        {/* Filters */}
                        <div className="flex gap-4">
                            <div className="w-full md:w-48">
                                <div className="relative">
                                    <select
                                        className="appearance-none block w-full pl-3 pr-10 py-2.5 border border-slate-300 dark:border-slate-700 rounded-lg leading-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm cursor-pointer"
                                        value={filterCountry}
                                        onChange={(e) => setFilterCountry(e.target.value)}
                                    >
                                        <option value="all">Semua Negara</option>
                                        <option value="jp">Jepang</option>
                                        <option value="tw">Taiwan</option>
                                        <option value="kr">Korea Selatan</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500 dark:text-slate-400">
                                        <span className="material-icons text-xl">expand_more</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-40">
                                <div className="relative">
                                    <select
                                        className="appearance-none block w-full pl-3 pr-10 py-2.5 border border-slate-300 dark:border-slate-700 rounded-lg leading-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm cursor-pointer"
                                        value={filterStatus}
                                        onChange={(e) => setFilterStatus(e.target.value)}
                                    >
                                        <option value="all">Semua Status</option>
                                        <option value="active">Aktif</option>
                                        <option value="inactive">Nonaktif</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500 dark:text-slate-400">
                                        <span className="material-icons text-xl">expand_more</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Data Table Card */}
                <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
                            <thead className="bg-slate-50 dark:bg-slate-800/50">
                                <tr>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                        Judul Pekerjaan
                                    </th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                        Negara
                                    </th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                        Kota
                                    </th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                        Gaji
                                    </th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-4 text-right text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                        Aksi
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-slate-900 divide-y divide-slate-200 dark:divide-slate-800">
                                {jobs.map((job) => (
                                    <tr key={job.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-150">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className={`h-9 w-9 flex-shrink-0 rounded-lg flex items-center justify-center ${job.iconColor}`}>
                                                    <span className="material-icons text-xl">{job.icon}</span>
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-slate-900 dark:text-white">{job.title}</div>
                                                    <div className="text-xs text-slate-500 dark:text-slate-400">{job.category}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className={`h-5 w-7 rounded overflow-hidden relative shadow-sm mr-2 border ${job.flagColor}`}>
                                                    {job.flagContent}
                                                </div>
                                                <span className="text-sm text-slate-700 dark:text-slate-200">{job.country}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-sm text-slate-700 dark:text-slate-200">{job.city}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{job.salary}</span>
                                            <span className="text-xs text-slate-500 dark:text-slate-400 block">/bulan</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${job.statusColor}`}>
                                                <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${job.statusDot}`}></span>
                                                {job.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <div className="flex justify-end gap-2">
                                                <button className="p-1.5 text-slate-400 hover:text-primary dark:text-slate-400 dark:hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
                                                    <span className="material-icons text-lg">edit</span>
                                                </button>
                                                <button className="p-1.5 text-slate-400 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                                                    <span className="material-icons text-lg">delete</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="bg-white dark:bg-slate-900 px-4 py-3 flex items-center justify-between border-t border-slate-200 dark:border-slate-800 sm:px-6">
                        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    Menampilkan <span className="font-medium text-slate-900 dark:text-white">1</span> sampai <span className="font-medium text-slate-900 dark:text-white">5</span> dari <span className="font-medium text-slate-900 dark:text-white">45</span> data
                                </p>
                            </div>
                            <div>
                                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                    <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-medium text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800">
                                        <span className="sr-only">Previous</span>
                                        <span className="material-icons text-lg">chevron_left</span>
                                    </a>
                                    <a href="#" aria-current="page" className="z-10 bg-primary/10 dark:bg-primary/20 border-primary text-primary relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                                        1
                                    </a>
                                    <a href="#" className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                                        2
                                    </a>
                                    <a href="#" className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
                                        3
                                    </a>
                                    <span className="relative inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-medium text-slate-500">
                                        ...
                                    </span>
                                    <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-medium text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800">
                                        <span className="sr-only">Next</span>
                                        <span className="material-icons text-lg">chevron_right</span>
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
