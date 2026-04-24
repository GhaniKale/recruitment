import Link from 'next/link';

export default function ApplicantsTable({ applicants: data }) {
    const applicants = data || [
        { id: 1, date: '24 Okt 2023', name: 'Budi Santoso', email: 'budi.s@example.com', position: 'Welder', location: 'Tokyo, Japan', status: 'Baru', badgeColor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' },
        { id: 2, date: '24 Okt 2023', name: 'Siti Aminah', email: 'siti.aminah99@example.com', position: 'Caregiver', location: 'Osaka, Japan', status: 'Baru', badgeColor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' },
        // ... (Fallbacks if no data)
    ];

    // If data is passed, we might need to map it to badge colors
    const getBadgeColor = (status) => {
        switch (status) {
            case 'Baru': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
            case 'Interview': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
            case 'Review': return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
            case 'Terpilih': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
            case 'Ditolak': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const displayApplicants = data ? data.map(app => ({
        ...app,
        badgeColor: getBadgeColor(app.status),
        // Ensure formatting matches table expectations
        location: app.jobs ? `${app.jobs.city}, ${app.jobs.country}` : 'Unknown',
        position: app.jobs ? app.jobs.title : 'Unknown',
        date: new Date(app.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
    })) : applicants;

    return (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Daftar Pelamar Terbaru</h2>

                {/* Search & Filter */}
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="material-icons text-slate-400 text-lg">search</span>
                        </span>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-3 py-2 border border-slate-300 dark:border-slate-700 rounded-lg leading-5 bg-white dark:bg-slate-800 placeholder-slate-500 focus:outline-none focus:placeholder-slate-400 focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-colors dark:text-white"
                            placeholder="Cari pelamar..."
                        />
                    </div>
                    <button className="inline-flex items-center px-3 py-2 border border-slate-300 dark:border-slate-700 shadow-sm text-sm leading-4 font-medium rounded-lg text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
                        <span className="material-icons text-lg mr-2">filter_list</span>
                        Filter
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
                    <thead className="bg-slate-50 dark:bg-slate-800/50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider w-16">No</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider w-32">Tanggal</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Nama Pelamar</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Posisi &amp; Lokasi</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider w-32">Status</th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider w-24">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-slate-900 divide-y divide-slate-200 dark:divide-slate-800">
                        {applicants.map((applicant, index) => (
                            <tr key={applicant.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">{index + 1}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900 dark:text-white">{applicant.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex flex-col">
                                        <Link href={`/admin/candidates/${applicant.id}`} className="text-sm font-medium text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors">
                                            {applicant.name}
                                        </Link>
                                        <span className="text-xs text-slate-500">{applicant.email}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-slate-900 dark:text-white">{applicant.position}</span>
                                        <div className="flex items-center text-xs text-slate-500 mt-0.5">
                                            <span className="mr-2">{applicant.location}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${applicant.badgeColor}`}>
                                        {applicant.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <div className="flex justify-end gap-2 items-center">
                                        <Link
                                            href={`/admin/candidates/${applicant.id}`}
                                            className="text-primary hover:text-primary-hover font-semibold text-sm"
                                        >
                                            Detail
                                        </Link>
                                        <button className="text-slate-400 hover:text-primary p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" title="Download CV">
                                            <span className="material-icons text-xl">file_download</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination (Simplified reused) */}
            <div className="bg-white dark:bg-slate-900 px-6 py-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-slate-700 dark:text-slate-400">
                            Menampilkan <span className="font-medium">1</span> sampai <span className="font-medium">5</span> dari <span className="font-medium">128</span> hasil
                        </p>
                    </div>
                    <div>
                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                            <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-medium text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700">
                                <span className="material-icons text-sm">chevron_left</span>
                            </a>
                            <a href="#" className="z-10 bg-primary/10 border-primary text-primary relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                                1
                            </a>
                            <a href="#" className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                                2
                            </a>
                            <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-medium text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700">
                                <span className="material-icons-round text-sm">chevron_right</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}
