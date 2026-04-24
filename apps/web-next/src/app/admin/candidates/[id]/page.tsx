import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CandidateStatusSelect from '@/components/admin/CandidateStatusSelect';
import DownloadCvButton from '@/components/admin/DownloadCvButton';

export const revalidate = 0;

export default async function CandidateDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const supabase = await createClient(true);

    const { data: candidate, error } = await supabase
        .from('applications')
        .select('*, candidates(*), jobs(title, country, city, salary)')
        .eq('id', id)
        .single();

    if (error || !candidate) {
        notFound();
    }



    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Breadcrumb & Header */}
            <div className="mb-8">
                <nav className="flex mb-4" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li className="inline-flex items-center">
                            <Link href="/admin/dashboard" className="inline-flex items-center text-sm font-medium text-slate-700 hover:text-primary dark:text-slate-400 dark:hover:text-white">
                                <span className="material-icons text-base mr-2">dashboard</span>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <span className="material-icons text-slate-400 text-base">chevron_right</span>
                                <Link href="/admin/candidates" className="ml-1 text-sm font-medium text-slate-700 hover:text-primary dark:text-slate-400 dark:hover:text-white md:ml-2">Kandidat</Link>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <span className="material-icons text-slate-400 text-base">chevron_right</span>
                                <span className="ml-1 text-sm font-medium text-slate-500 dark:text-slate-400 md:ml-2 truncate max-w-xs">{candidate.candidates?.name}</span>
                            </div>
                        </li>
                    </ol>
                </nav>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">{candidate.candidates?.name}</h1>
                    <div className="flex items-center gap-3">
                        <div className="w-48">
                            <CandidateStatusSelect id={candidate.id} currentStatus={candidate.status} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Candidate Info */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Main Info Card */}
                    <div className="bg-white dark:bg-slate-900 shadow-sm rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
                        <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-white/5">
                            <h3 className="text-base font-semibold leading-6 text-slate-900 dark:text-white flex items-center">
                                <span className="material-icons text-primary mr-2">person</span> Informasi Pribadi
                            </h3>
                        </div>
                        <div className="px-6 py-6">
                            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">NIK (Nomor Induk Kependudukan)</dt>
                                    <dd className="mt-1 text-sm text-slate-900 dark:text-white sm:col-span-2">{candidate.candidates?.nik || '-'}</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">Email Address</dt>
                                    <dd className="mt-1 text-sm text-slate-900 dark:text-white sm:col-span-2">{candidate.candidates?.email || '-'}</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">Nomor Telepon/WA</dt>
                                    <dd className="mt-1 text-sm text-slate-900 dark:text-white sm:col-span-2">{candidate.candidates?.phone || '-'}</dd>
                                </div>
                                <div className="sm:col-span-2">
                                    <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">Alamat Lengkap</dt>
                                    <dd className="mt-1 text-sm text-slate-900 dark:text-white sm:col-span-2">{candidate.candidates?.address || '-'}</dd>
                                </div>
                            </dl>
                        </div>
                    </div>

                    {/* Job Info Card */}
                    <div className="bg-white dark:bg-slate-900 shadow-sm rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
                        <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-white/5">
                            <h3 className="text-base font-semibold leading-6 text-slate-900 dark:text-white flex items-center">
                                <span className="material-icons text-primary mr-2">work</span> Posisi Dilamar
                            </h3>
                        </div>
                        <div className="px-6 py-6">
                            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">Judul Pekerjaan</dt>
                                    <dd className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">{candidate.jobs?.title}</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">Negara Tujuan</dt>
                                    <dd className="mt-1 text-sm text-slate-900 dark:text-white">{candidate.jobs?.country}</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">Kota</dt>
                                    <dd className="mt-1 text-sm text-slate-900 dark:text-white">{candidate.jobs?.city}</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">Gaji</dt>
                                    <dd className="mt-1 text-sm text-slate-900 dark:text-white">{candidate.jobs?.salary}</dd>
                                </div>
                                <div className="sm:col-span-2 pt-4">
                                    <Link href={`/jobs/${candidate.job_id}`} target="_blank" className="text-sm font-medium text-primary hover:text-blue-600 flex items-center">
                                        Lihat Lowongan Asli <span className="material-icons text-sm ml-1">open_in_new</span>
                                    </Link>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>

                {/* Right Column: Files & Actions */}
                <div className="space-y-6">
                    {/* Documents Card */}
                    <div className="bg-white dark:bg-slate-900 shadow-sm rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
                        <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-white/5">
                            <h3 className="text-base font-semibold leading-6 text-slate-900 dark:text-white flex items-center">
                                <span className="material-icons text-primary mr-2">description</span> Dokumen Pendukung
                            </h3>
                        </div>
                        <div className="px-6 py-6">
                            <ul className="divide-y divide-slate-100 dark:divide-slate-700 rounded-md border border-slate-200 dark:border-slate-700">
                                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                    <div className="flex w-0 flex-1 items-center">
                                        <span className="material-icons text-slate-400 flex-shrink-0">attach_file</span>
                                        <span className="ml-2 w-0 flex-1 truncate text-slate-600 dark:text-slate-300">
                                            {candidate.resume_url ? candidate.resume_url.split('/').pop().substring(14) : 'CV_Kandidat.pdf'}
                                        </span>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        {candidate.resume_url ? (
                                            <DownloadCvButton path={candidate.resume_url} filename={candidate.resume_url.split('/').pop()} />
                                        ) : (
                                            <span className="text-slate-400 text-sm italic">Tidak ada file</span>
                                        )}
                                    </div>
                                </li>
                            </ul>
                            {!candidate.resume_url && (
                                <p className="mt-2 text-sm text-yellow-600 dark:text-yellow-500">
                                    * File CV tidak ditemukan atau belum diupload.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
