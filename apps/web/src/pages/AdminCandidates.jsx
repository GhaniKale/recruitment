import { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../components/AdminLayout';

export default function AdminCandidates() {
    // Mock Data
    const [candidates, setCandidates] = useState([
        { id: 1, date: '24 Okt 2023', name: 'Andi Putra', nik: '320120...', position: 'Staff Gudang', phone: '0812-9876-5432', status: 'Interview', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuj4Gh9nNElq1CD0NLYAjO5uaJoRPPdhjnkActXPxZVXiTrrmCLofaA0-eGdEPIHMG9OaqpK4OdL1jCFYeG1CRaD9YBzLKhWXrvxXvwnFFmWzZhyi6DPku4DI4fOpJ-XDtznbQSGf7ZnBWM1IQPSu0IuimwIXHccZqaTd_RLHDD9q40Df_Eyv9nFaSFiIKgQQ49Cc6-JVW0meWPQUr1Tf01JtnMPulgAgJ_iIXoy1c-2Ea6lkBuYmFm1FexrYQkaZFIhoy05H4IQ' },
        { id: 2, date: '23 Okt 2023', name: 'Siti Aulia', nik: '317405...', position: 'Admin Sales', phone: '0857-1234-5678', status: 'Baru', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLr9w2MF-6tCs26nbjp7ZcQ8laSvc5rRwTGWExZhH4ZF2kLVOiRfCMn_jk9y1pwuDhv-t31za0AUXXW6zZ3IFCE7Wm6tr-NoFR99S7KIrM6PgKDY-GyEKUh1TQcR39X4wYeJmVpgOw7tZOgpMHCtxo4X-RHM88JEuhsaInop9MQTSUpirdB7CPMtU2GMiWNYb_bQorF3UgEUimVdNQLBv03qlBNS65JKUnc5XU2LZjsbxkbudG4r_EvyPHUFX_k-waho-r05U-og' },
        { id: 3, date: '22 Okt 2023', name: 'Budi Santoso', nik: '367102...', position: 'Supir Logistik', phone: '0813-5555-9999', status: 'Ditolak', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDw_wzcAln8-sQnCp-6llqfdZMA_epmupHUtHHrQQpJKtksFwCc5EFUWzs9JpG-26sC6mNxabW89ABdp26mqLMljq2mLcZJpGebL3ic3cpqPV9mqnTo0D3itcgUPAhmIjWnTuURc1O_kNBMSEgoarGwF_eHAA1t2PgoOG45H3EqI-0_Hl4PIzZ-NoGdAOygczg-D5bOg-preaBeEN7oiQLnViqcxaPsb5UGXrazhvJb6sOzruBnmzb8dEKKYdJbG2zDnln1qdv5Vg' },
        { id: 4, date: '21 Okt 2023', name: 'Rina Wati', nik: '330209...', position: 'Admin Sales', phone: '0896-7777-2222', status: 'Diterima', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-yMjRFbvIGQ7G23gpCda8piNkyqSL2yapYq2qs4kUrKI1ItUp07hF6MyjV7QGH4PNc843ir4KBOYSmlQdSrywGxBNOFh91XV7EAKTUTAcPiXSLpU6wQv8SQRrwEAxwob14Y9k5QGdY5hz5ls_hrf_TqR9K819l9BMj23MsT2R5YJ-DHucz0qfcpShUEzsx62dN-dH80IjUwuH_oZXMZAbpNDG19gpWFYrG4nW3EQ3lPQb5YHNqR7-kUSyfX49B70KCjSg8_I24g' },
        { id: 5, date: '20 Okt 2023', name: 'Doni Pratama', nik: '351511...', position: 'Security', phone: '0821-4444-6666', status: 'Screening', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVemyFh-XT8FcpYbGd3q2iMzH4tOaIXuBS4JPfhyVzydXt6oENjiXAmgPcx_bVtr-xZFGc-wZgLTT7F9TqK7FXaSdypPA7_JBFjK_GP_mquIOuEncIREJ1-GzjRaP9197tlH8UyrLJQZ8XmjiCFzkFpUB5MSTXb30fmvj8oIBQLuCki9CbLe6o8PDM2ad3ei-bi9Xi_a8HJiybzeVj5vOu71fNTV1wNk2BcYyNohZzmDR0jgzlvkQtzRFC94gJb2gpjORlHTy_nw' },
    ]);

    const [selectedCandidates, setSelectedCandidates] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

    // Toggle single candidate selection
    const toggleCandidate = (id) => {
        if (selectedCandidates.includes(id)) {
            setSelectedCandidates(selectedCandidates.filter(cId => cId !== id));
            setSelectAll(false);
        } else {
            setSelectedCandidates([...selectedCandidates, id]);
        }
    };

    // Toggle Select All
    const toggleSelectAll = () => {
        if (selectAll) {
            setSelectedCandidates([]);
        } else {
            setSelectedCandidates(candidates.map(c => c.id));
        }
        setSelectAll(!selectAll);
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Baru': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800';
            case 'Screening': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800';
            case 'Interview': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800';
            case 'Offering': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-800';
            case 'Diterima': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800';
            case 'Ditolak': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 border-red-200 dark:border-red-800';
            default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700';
        }
    };

    // Mock User for Layout
    const user = { name: 'Admin HR', role: 'Human Resources' };

    return (
        <AdminLayout title="Daftar Kandidat" user={user}>
            <div className="space-y-6 relative pb-20"> {/* pb-20 for sticky footer space */}

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <nav aria-label="Breadcrumb" className="flex text-sm text-neutral-500 dark:text-neutral-400 mb-1">
                            <ol className="flex items-center space-x-2">
                                <li><Link to="/admin/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
                                <li><span className="material-icons-round text-xs">chevron_right</span></li>
                                <li className="font-medium text-neutral-800 dark:text-neutral-200">Daftar Kandidat</li>
                            </ol>
                        </nav>
                        <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">Daftar Kandidat</h1>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">Kelola data pelamar dan status rekrutmen.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 shadow-sm">
                            <span className="text-xs text-neutral-500 dark:text-neutral-400 uppercase font-semibold">Total Kandidat</span>
                            <div className="text-lg font-bold text-primary">1,240</div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 shadow-sm hidden sm:block">
                            <span className="text-xs text-neutral-500 dark:text-neutral-400 uppercase font-semibold">Bulan Ini</span>
                            <div className="text-lg font-bold text-green-600">+85</div>
                        </div>
                    </div>
                </div>

                {/* Filters & Controls Card */}
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-4 md:p-5">
                    {/* Filters Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
                        {/* Search */}
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="material-icons-round text-neutral-400 group-focus-within:text-primary transition-colors">search</span>
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg leading-5 bg-white dark:bg-slate-900 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-shadow"
                                placeholder="Cari Nama / NIK / HP"
                            />
                        </div>
                        {/* Job Filter */}
                        <div className="relative">
                            <select className="block w-full pl-3 pr-10 py-2.5 text-base border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm rounded-lg bg-white dark:bg-slate-900 text-neutral-700 dark:text-neutral-200 cursor-pointer appearance-none">
                                <option value="">Semua Lowongan</option>
                                <option value="gudang">Staff Gudang</option>
                                <option value="admin">Admin Sales</option>
                                <option value="supir">Supir Logistik</option>
                                <option value="security">Security</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-neutral-500">
                                <span className="material-icons-round">expand_more</span>
                            </div>
                        </div>
                        {/* Status Filter */}
                        <div className="relative">
                            <select className="block w-full pl-3 pr-10 py-2.5 text-base border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm rounded-lg bg-white dark:bg-slate-900 text-neutral-700 dark:text-neutral-200 cursor-pointer appearance-none">
                                <option value="">Semua Status</option>
                                <option value="baru">Baru</option>
                                <option value="screening">Screening</option>
                                <option value="interview">Interview</option>
                                <option value="offering">Offering</option>
                                <option value="diterima">Diterima</option>
                                <option value="ditolak">Ditolak</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-neutral-500">
                                <span className="material-icons-round">expand_more</span>
                            </div>
                        </div>
                        {/* Date Range */}
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="material-icons-round text-neutral-400 group-focus-within:text-primary transition-colors">date_range</span>
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 dark:border-slate-600 rounded-lg leading-5 bg-white dark:bg-slate-900 text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-shadow"
                                placeholder="Filter Tanggal"
                            />
                        </div>
                    </div>
                    {/* Action Row */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-neutral-500 dark:text-neutral-400">Menampilkan 1-10 dari 1,240 data</span>
                        </div>
                        <div className="flex items-center gap-3 w-full sm:w-auto">
                            <button type="button" className="flex-1 sm:flex-none justify-center inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-600 shadow-sm text-sm font-medium rounded-lg text-neutral-700 dark:text-neutral-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
                                <span className="material-icons-round text-green-600 text-lg mr-2">description</span>
                                Export Excel
                            </button>
                            <button type="button" className="flex-1 sm:flex-none justify-center inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-600 shadow-sm text-sm font-medium rounded-lg text-neutral-700 dark:text-neutral-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
                                <span className="material-icons-round text-blue-600 text-lg mr-2">code</span>
                                Export CSV
                            </button>
                        </div>
                    </div>
                </div>

                {/* Data Table Section */}
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col">
                    <div className="overflow-x-auto custom-scrollbar">
                        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
                            <thead className="bg-neutral-50 dark:bg-slate-800/50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left w-10">
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="h-4 w-4 text-primary focus:ring-primary border-neutral-300 rounded dark:bg-neutral-700 dark:border-neutral-600"
                                                onChange={toggleSelectAll}
                                                checked={selectAll}
                                            />
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider cursor-pointer hover:text-primary group">
                                        <div className="flex items-center gap-1">
                                            Tanggal
                                            <span className="material-icons-round text-sm opacity-0 group-hover:opacity-100 transition-opacity">arrow_downward</span>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider cursor-pointer hover:text-primary group">
                                        <div className="flex items-center gap-1">
                                            Nama Kandidat
                                            <span className="material-icons-round text-sm text-primary">arrow_downward</span>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                                        Posisi / Job
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                                        Kontak (HP/WA)
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Aksi</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
                                {candidates.map((candidate) => (
                                    <tr key={candidate.id} className={`hover:bg-neutral-50 dark:hover:bg-slate-800/50 transition-colors ${selectedCandidates.includes(candidate.id) ? 'bg-blue-50/50 dark:bg-blue-900/10' : ''}`}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <input
                                                type="checkbox"
                                                className="h-4 w-4 text-primary focus:ring-primary border-neutral-300 rounded dark:bg-neutral-700 dark:border-neutral-600"
                                                checked={selectedCandidates.includes(candidate.id)}
                                                onChange={() => toggleCandidate(candidate.id)}
                                            />
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400">
                                            {candidate.date}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-9 w-9">
                                                    <img className="h-9 w-9 rounded-full object-cover border border-neutral-200 dark:border-neutral-700" src={candidate.avatar} alt={`Avatar of ${candidate.name}`} />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-neutral-900 dark:text-white">{candidate.name}</div>
                                                    <div className="text-xs text-neutral-500 dark:text-neutral-400">NIK: {candidate.nik}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700 dark:text-neutral-300">
                                            {candidate.position}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400">
                                            <div className="flex items-center gap-2">
                                                <span className="material-icons-round text-green-500 text-sm">whatsapp</span>
                                                {candidate.phone}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-md border ${getStatusColor(candidate.status)}`}>
                                                {candidate.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <Link to={`/admin/candidates/${candidate.id}`} className="text-primary hover:text-primary-hover font-semibold">Detail</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* Pagination */}
                    <div className="bg-white dark:bg-slate-800 px-4 py-3 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between sm:px-6">
                        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                                    Showing <span className="font-medium">1</span> to <span className="font-medium">{candidates.length}</span> of <span className="font-medium">1,240</span> results
                                </p>
                            </div>
                            <div>
                                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                    <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm font-medium text-neutral-500 hover:bg-neutral-50 dark:hover:bg-slate-700">
                                        <span className="sr-only">Previous</span>
                                        <span className="material-icons-round text-sm">chevron_left</span>
                                    </a>
                                    <a href="#" aria-current="page" className="z-10 bg-primary/10 border-primary text-primary relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                                        1
                                    </a>
                                    <a href="#" className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-neutral-500 hover:bg-neutral-50 dark:hover:bg-slate-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                                        2
                                    </a>
                                    <a href="#" className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-neutral-500 hover:bg-neutral-50 dark:hover:bg-slate-700 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
                                        3
                                    </a>
                                    <span className="relative inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm font-medium text-neutral-700">
                                        ...
                                    </span>
                                    <a href="#" className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-neutral-500 hover:bg-neutral-50 dark:hover:bg-slate-700 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
                                        8
                                    </a>
                                    <a href="#" className="bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-neutral-500 hover:bg-neutral-50 dark:hover:bg-slate-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                                        9
                                    </a>
                                    <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm font-medium text-neutral-500 hover:bg-neutral-50 dark:hover:bg-slate-700">
                                        <span className="sr-only">Next</span>
                                        <span className="material-icons-round text-sm">chevron_right</span>
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sticky Bulk Action Footer */}
                <div className={`fixed bottom-0 right-0 left-0 md:left-64 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-4 transform transition-transform duration-300 z-20 ${selectedCandidates.length > 0 ? 'translate-y-0' : 'translate-y-full'}`}>
                    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs font-bold">{selectedCandidates.length}</span>
                            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Kandidat Terpilih</span>
                        </div>
                        <div className="flex items-center gap-3 w-full sm:w-auto">
                            <div className="relative flex-1 sm:flex-none sm:w-64">
                                <select className="block w-full pl-3 pr-10 py-2 text-sm border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary rounded-lg bg-neutral-50 dark:bg-slate-900 text-neutral-700 dark:text-neutral-200 cursor-pointer appearance-none">
                                    <option disabled selected value="">Ubah Status Kandidat...</option>
                                    <option value="interview">Panggil Interview</option>
                                    <option value="offering">Kirim Offering</option>
                                    <option value="diterima">Tandai Diterima</option>
                                    <option value="ditolak">Tandai Ditolak</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-neutral-500">
                                    <span className="material-icons-round text-sm">expand_more</span>
                                </div>
                            </div>
                            <button className="px-5 py-2 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                                Terapkan
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </AdminLayout>
    );
}
