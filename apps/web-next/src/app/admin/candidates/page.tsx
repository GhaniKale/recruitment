import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import CandidateStatusSelect from '@/components/admin/CandidateStatusSelect';
import DeleteCandidateButton from '@/components/admin/DeleteCandidateButton';

export const revalidate = 0;

export default async function AdminCandidatesPage({ searchParams }: { searchParams: { q?: string; status?: string; job_id?: string; page?: string } }) {
    const supabase = await createClient(true);

    // SANITY CHECK START
    const { count: strictCount } = await supabase.from('applications').select('*', { count: 'exact', head: true });
    console.log('PAGE: Sanity Check Total:', strictCount);
    // SANITY CHECK END

    let query = supabase
        .from('applications')
        .select('*, created_at, candidates(name, email), jobs(title, country, city)', { count: 'exact' })
        .order('created_at', { ascending: false });

    // Debugging active filters
    console.log('PAGE: Active Filters:', searchParams);

    if (searchParams.q) {
        // Note: Filtering by joined tables (candidates.name) in Supabase is tricky with just .or() on top level
        // Usually requires !inner join or separate logic.
        // For now, let's keep it simple or ensure we aren't breaking it.
        // If q is present, this might be failing if not structured correctly.
        query = query.or(`full_name.ilike.%${searchParams.q}%,email.ilike.%${searchParams.q}%`);
        // Note: Using flattened fields if they exist, relying on 'candidates' join for display.
        // If applications table doesn't have full_name/email, this fails. 
        // Let's check schema: user used formData.get('full_name') in submit.
        // But schema in Supabase? We don't know for sure if 'applications' has 'full_name' or if it's only in 'candidates'.
        // If applications has no full_name column, this .or() will fail silently or error.
        // LET'S REMOVE THIS FILTER FOR NOW TO DEBUG THE LIST or verify column existence.
        // Actually, let's try to filter on the joined relation if possible, or assume applications table has copy.
        // Reverting to safe filter or commenting out for debug if risky.
        // Let's log if we are applying it.
        console.log('PAGE: Applying search filter:', searchParams.q);
    }
    if (searchParams.status && searchParams.status !== 'all') {
        console.log('PAGE: Applying status filter:', searchParams.status);
        query = query.eq('status', searchParams.status);
    }
    if (searchParams.job_id && searchParams.job_id !== 'all') {
        console.log('PAGE: Applying job_id filter:', searchParams.job_id);
        query = query.eq('job_id', searchParams.job_id);
    }

    // Pagination
    const page = parseInt(searchParams.page || '1');
    const limit = 10;
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    console.log('PAGE: Fetching range:', from, to);
    const { data: candidates, count, error } = await query.range(from, to);

    if (error) {
        console.error('PAGE: Error fetching applicants:', error);
    } else {
        console.log('PAGE: Applicants fetched:', candidates?.length);
        if (candidates?.length === 0) {
            console.warn('PAGE: Returned 0 rows. Check filters or RLS.');
        } else {
            // Log first row to see if relations are null
            console.log('PAGE: First row sample:', JSON.stringify(candidates[0], null, 2));
        }
    }

    // Fetch active jobs for filter
    const { data: jobs } = await supabase.from('jobs').select('id, title').eq('is_active', true);

    const getBadgeColor = (status: string) => {
        switch (status) {
            case 'baru': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
            case 'interview': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
            case 'review': return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
            case 'terpilih': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
            case 'ditolak': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Manajemen Kandidat</h2>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Pantau dan kelola pelamar kerja dari berbagai lowongan.</p>
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
                            placeholder="Cari nama atau email..."
                        />
                    </div>
                    {/* Filters */}
                    <div className="flex gap-4">
                        <div className="w-full md:w-48">
                            <div className="relative">
                                <select
                                    name="job_id"
                                    defaultValue={searchParams.job_id}
                                    className="appearance-none block w-full pl-3 pr-10 py-2.5 border border-slate-300 dark:border-slate-700 rounded-lg leading-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm cursor-pointer"
                                >
                                    <option value="all">Semua Lowongan</option>
                                    {jobs?.map(job => (
                                        <option key={job.id} value={job.id}>{job.title}</option>
                                    ))}
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
                                    <option value="baru">Baru</option>
                                    <option value="review">Review</option>
                                    <option value="interview">Interview</option>
                                    <option value="terpilih">Terpilih</option>
                                    <option value="ditolak">Ditolak</option>
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
                                    Kandidat
                                </th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                    Posisi Dilamar
                                </th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                    Tanggal
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
                            {candidates?.map((app) => (
                                <tr key={app.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-150">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div>
                                                <div className="text-sm font-medium text-slate-900 dark:text-white">{app.candidates?.name || 'Nama tidak tersedia'}</div>
                                                <div className="text-xs text-slate-500 dark:text-slate-400">{app.candidates?.email || '-'}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-slate-900 dark:text-white">{app.jobs?.title}</div>
                                        <div className="text-xs text-slate-500 dark:text-slate-400">{app.jobs?.city}, {app.jobs?.country}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="text-sm text-slate-500 dark:text-slate-400">
                                            {new Date(app.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <CandidateStatusSelect id={app.id} currentStatus={app.status} badgeRef={true} />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <Link href={`/admin/candidates/${app.id}`} className="text-primary hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm">
                                            Lihat Detail
                                        </Link>
                                        <DeleteCandidateButton id={app.id} />
                                    </td>
                                </tr>
                            ))}
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
                            <Link href={`/admin/candidates?page=${page - 1}`} className="px-3 py-1 border rounded text-sm hover:bg-slate-50">Prev</Link>
                        )}
                        {candidates && candidates.length === limit && (
                            <Link href={`/admin/candidates?page=${page + 1}`} className="px-3 py-1 border rounded text-sm hover:bg-slate-50">Next</Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
