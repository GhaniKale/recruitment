import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import JobDeleteButton from '@/components/admin/JobDeleteButton';
import JobStatusToggle from '@/components/admin/JobStatusToggle';

export const revalidate = 0;

export default async function AdminJobsPage({ searchParams }: { searchParams: { q?: string; country?: string; status?: string; page?: string } }) {
    const supabase = await createClient();

    let query = supabase
        .from('jobs')
        .select('*', { count: 'exact' })
        .order('created_at', { ascending: false });

    if (searchParams.q) {
        query = query.ilike('title', `%${searchParams.q}%`);
    }
    if (searchParams.country && searchParams.country !== 'all') {
        query = query.eq('country', searchParams.country);
    }
    if (searchParams.status && searchParams.status !== 'all') {
        if (searchParams.status === 'active') query = query.eq('is_active', true);
        if (searchParams.status === 'inactive') query = query.eq('is_active', false);
    }

    // Pagination
    const page = parseInt(searchParams.page || '1');
    const limit = 10;
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    const { data: jobs, count, error } = await query.range(from, to);

    // Country flag mapping helper (simplified)
    const getFlagElement = (country: string) => {
        // ... (implementation or just distinct styling)
        return <span className="text-xs bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">{country}</span>;
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header */}
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Manajemen Lowongan Kerja</h2>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Kelola daftar pekerjaan, edit status, dan pantau rekrutmen.</p>
                </div>
                <Link href="/admin/jobs/new" className="inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200">
                    <span className="material-icons text-lg mr-2">add</span>
                    Tambah Lowongan
                </Link>
            </div>

            {/* Filter & Search Card */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-4 mb-6">
                <form className="flex flex-col md:flex-row gap-4">
                    {/* Search */}
                    <div className="flex-1 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="material-icons text-slate-400 text-xl">search</span>
                        </div>
                        <input
                            type="text"
                            name="q"
                            defaultValue={searchParams.q}
                            className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 dark:border-slate-700 rounded-lg leading-5 bg-white dark:bg-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition duration-150 ease-in-out"
                            placeholder="Cari judul pekerjaan..."
                        />
                    </div>
                    {/* Filters */}
                    <div className="flex gap-4">
                        <div className="w-full md:w-48">
                            <div className="relative">
                                <select
                                    name="country"
                                    defaultValue={searchParams.country}
                                    className="appearance-none block w-full pl-3 pr-10 py-2.5 border border-slate-300 dark:border-slate-700 rounded-lg leading-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm cursor-pointer"
                                >
                                    <option value="all">Semua Negara</option>
                                    <option value="Jepang">Jepang</option>
                                    <option value="Taiwan">Taiwan</option>
                                    <option value="Korea Selatan">Korea Selatan</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-full md:w-40">
                            <div className="relative">
                                <select
                                    name="status"
                                    defaultValue={searchParams.status}
                                    className="appearance-none block w-full pl-3 pr-10 py-2.5 border border-slate-300 dark:border-slate-700 rounded-lg leading-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm cursor-pointer"
                                >
                                    <option value="all">Semua Status</option>
                                    <option value="active">Aktif</option>
                                    <option value="inactive">Nonaktif</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                            Terapkan
                        </button>
                    </div>
                </form>
            </div>

            {/* Data Table */}
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
                            {jobs?.map((job) => (
                                <tr key={job.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-150">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="ml-0">
                                                <div className="text-sm font-medium text-slate-900 dark:text-white">{job.title}</div>
                                                <div className="text-xs text-slate-500 dark:text-slate-400">{job.category}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            {getFlagElement(job.country)}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="text-sm text-slate-700 dark:text-slate-200">{job.city}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{job.salary}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <JobStatusToggle id={job.id} isActive={job.is_active} />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <div className="flex justify-end gap-2">
                                            <Link href={`/admin/jobs/${job.id}/edit`} className="p-1.5 text-slate-400 hover:text-primary dark:text-slate-400 dark:hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
                                                <span className="material-icons text-lg">edit</span>
                                            </Link>
                                            <JobDeleteButton id={job.id} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {(!jobs || jobs.length === 0) && (
                                <tr>
                                    <td colSpan={6} className="px-6 py-10 text-center text-slate-500 dark:text-slate-400">
                                        Tidak ada lowongan yang ditemukan.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                {/* Pagination (Simplified) */}
                <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-sm text-slate-500">
                        Halaman {page}
                    </span>
                    <div className="flex gap-2">
                        {page > 1 && (
                            <Link href={`/admin/jobs?page=${page - 1}`} className="px-3 py-1 border rounded text-sm hover:bg-slate-50">Prev</Link>
                        )}
                        {jobs && jobs.length === limit && (
                            <Link href={`/admin/jobs?page=${page + 1}`} className="px-3 py-1 border rounded text-sm hover:bg-slate-50">Next</Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
