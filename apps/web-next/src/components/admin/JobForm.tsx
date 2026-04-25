'use client';

import { useState, useTransition } from 'react';
import Link from 'next/link';
import { createJob, updateJob } from '@/app/admin/jobs/actions';

interface Job {
    id: string;
    title?: string;
    country?: string;
    city?: string;
    category?: string;
    description?: string;
    requirements?: string;
    contract_type?: string;
    quota?: string | number;
    salary?: string;
    benefits?: string | string[];
    is_active?: boolean;
}

export default function JobForm({ job }: { job?: Job | null }) {
    const isEdit = !!job;
    const [isPending, startTransition] = useTransition();

    // Parse benefits if JSON or array
    const initialBenefits = Array.isArray(job?.benefits) ? job.benefits : (typeof job?.benefits === 'string' ? JSON.parse(job.benefits) : []);

    const [formData, setFormData] = useState({
        judul: job?.title || '',
        negara: job?.country || '',
        kota: job?.city || '',
        sektor: job?.category || 'Manufaktur',
        deskripsi: job?.description || '',
        persyaratan: job?.requirements || '',
        tipe_kontrak: job?.contract_type || 'Kontrak 1 Tahun',
        kuota: job?.quota || '',
        gaji: job?.salary || '',
        benefit_asrama: initialBenefits.includes('Asrama'),
        benefit_asuransi: initialBenefits.includes('Asuransi') || !isEdit, // Default true for new
        benefit_makan: initialBenefits.includes('Makan'),
        benefit_transport: initialBenefits.includes('Transport'),
        status: job?.is_active === false ? 'nonaktif' : 'aktif'
    });

    const [state, setState] = useState<{ message?: string, error?: Record<string, string[]> }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const target = e.target as HTMLInputElement;
        const { name, value, type, checked } = target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formPayload = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            if (key.startsWith('benefit_')) {
                if (value) formPayload.append(key, 'on');
            } else {
                formPayload.append(key, String(value));
            }
        });

        startTransition(async () => {
            let result;
            if (isEdit) {
                result = await updateJob(job.id, null, formPayload);
            } else {
                result = await createJob(null, formPayload);
            }

            if (result?.error || result?.message) {
                setState(result);
            }
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            {state.message && (
                <div className={`mb-6 p-4 rounded-lg border ${state.error ? 'bg-red-50 border-red-100 text-red-700' : 'bg-green-50 border-green-100 text-green-700'}`}>
                    {state.message}
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Main Form */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Section 1: Informasi Dasar */}
                    <div className="bg-white dark:bg-slate-900 shadow-sm ring-1 ring-slate-900/5 dark:ring-white/10 rounded-xl overflow-hidden">
                        <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-white/5 flex items-center justify-between">
                            <h3 className="text-base font-semibold leading-6 text-slate-900 dark:text-white flex items-center gap-2">
                                <span className="material-icons text-primary text-sm">info</span> Informasi Dasar
                            </h3>
                        </div>
                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="col-span-1 md:col-span-2">
                                <label className="block text-sm font-medium leading-6 text-slate-900 dark:text-slate-200" htmlFor="judul">Judul Lowongan <span className="text-red-500">*</span></label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="judul"
                                        id="judul"
                                        value={formData.judul}
                                        onChange={handleChange}
                                        className="block w-full rounded-lg border-0 py-2.5 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-slate-800"
                                        placeholder="Contoh: Operator Produksi Kilang Minyak"
                                        required
                                    />
                                    {state.error?.title && <p className="mt-1 text-sm text-red-600">{state.error.title}</p>}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium leading-6 text-slate-900 dark:text-slate-200" htmlFor="negara">Negara Tujuan <span className="text-red-500">*</span></label>
                                <div className="mt-2 relative">
                                    <select
                                        id="negara"
                                        name="negara"
                                        value={formData.negara}
                                        onChange={handleChange}
                                        className="block w-full rounded-lg border-0 py-2.5 pl-3 pr-10 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-slate-800"
                                        required
                                    >
                                        <option value="" disabled>Pilih Negara</option>
                                        <option value="Jepang">Jepang</option>
                                        <option value="Korea Selatan">Korea Selatan</option>
                                        <option value="Taiwan">Taiwan</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="Hongkong">Hongkong</option>
                                        <option value="Malaysia">Malaysia</option>
                                        <option value="Arab Saudi">Arab Saudi</option>
                                        <option value="Polandia">Polandia</option>
                                        <option value="Turki">Turki</option>
                                    </select>
                                    {state.error?.country && <p className="mt-1 text-sm text-red-600">{state.error.country}</p>}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium leading-6 text-slate-900 dark:text-slate-200" htmlFor="kota">Kota / Wilayah</label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="kota"
                                        id="kota"
                                        value={formData.kota}
                                        onChange={handleChange}
                                        className="block w-full rounded-lg border-0 py-2.5 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-slate-800"
                                        placeholder="Contoh: Tokyo"
                                    />
                                    {state.error?.city && <p className="mt-1 text-sm text-red-600">{state.error.city}</p>}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium leading-6 text-slate-900 dark:text-slate-200" htmlFor="sektor">Sektor Pekerjaan</label>
                                <div className="mt-2">
                                    <select
                                        id="sektor"
                                        name="sektor"
                                        value={formData.sektor}
                                        onChange={handleChange}
                                        className="block w-full rounded-lg border-0 py-2.5 pl-3 pr-10 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-slate-800"
                                    >
                                        <option value="Manufaktur">Manufaktur</option>
                                        <option value="Konstruksi">Konstruksi</option>
                                        <option value="Kesehatan (Caregiver)">Kesehatan (Caregiver)</option>
                                        <option value="Pertanian">Pertanian</option>
                                        <option value="Hospitality">Hospitality</option>
                                        <option value="Lainnya">Lainnya</option>
                                    </select>
                                    {state.error?.category && <p className="mt-1 text-sm text-red-600">{state.error.category}</p>}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Detail & Persyaratan */}
                    <div className="bg-white dark:bg-slate-900 shadow-sm ring-1 ring-slate-900/5 dark:ring-white/10 rounded-xl overflow-hidden">
                        <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-white/5 flex items-center justify-between">
                            <h3 className="text-base font-semibold leading-6 text-slate-900 dark:text-white flex items-center gap-2">
                                <span className="material-icons text-primary text-sm">description</span> Deskripsi & Persyaratan
                            </h3>
                        </div>
                        <div className="p-6 space-y-6">
                            <div>
                                <label className="block text-sm font-medium leading-6 text-slate-900 dark:text-slate-200" htmlFor="deskripsi">Deskripsi Pekerjaan</label>
                                <div className="mt-2">
                                    <textarea
                                        id="deskripsi"
                                        name="deskripsi"
                                        rows={4}
                                        value={formData.deskripsi}
                                        onChange={handleChange}
                                        className="block w-full rounded-lg border-0 py-2.5 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-slate-800"
                                        placeholder="Jelaskan tanggung jawab utama pekerjaan ini..."
                                    />
                                    {state.error?.description && <p className="mt-1 text-sm text-red-600">{state.error.description}</p>}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium leading-6 text-slate-900 dark:text-slate-200">Persyaratan Kandidat</label>
                                <div className="mt-2">
                                    <textarea
                                        id="persyaratan"
                                        name="persyaratan"
                                        rows={6}
                                        value={formData.persyaratan}
                                        onChange={handleChange}
                                        className="block w-full rounded-lg border-0 py-2.5 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-slate-800"
                                        placeholder="• Usia minimal 18 tahun..."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Details & Actions */}
                <div className="space-y-6">
                    {/* Section 3: Detail Kontrak */}
                    <div className="bg-white dark:bg-slate-900 shadow-sm ring-1 ring-slate-900/5 dark:ring-white/10 rounded-xl overflow-hidden">
                        <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-white/5 flex items-center justify-between">
                            <h3 className="text-base font-semibold leading-6 text-slate-900 dark:text-white flex items-center gap-2">
                                <span className="material-icons text-primary text-sm">assignment</span> Detail Kontrak
                            </h3>
                        </div>
                        <div className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium leading-6 text-slate-900 dark:text-slate-200" htmlFor="tipe_kontrak">Tipe Kontrak</label>
                                <select
                                    id="tipe_kontrak"
                                    name="tipe_kontrak"
                                    value={formData.tipe_kontrak}
                                    onChange={handleChange}
                                    className="mt-2 block w-full rounded-lg border-0 py-2.5 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-slate-800"
                                >
                                    <option>Kontrak 1 Tahun</option>
                                    <option>Kontrak 2 Tahun</option>
                                    <option>Kontrak 3 Tahun</option>
                                    <option>Magang (Internship)</option>
                                    <option>Permanen</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium leading-6 text-slate-900 dark:text-slate-200" htmlFor="kuota">Kuota Penerimaan</label>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="number"
                                        name="kuota"
                                        id="kuota"
                                        value={formData.kuota}
                                        onChange={handleChange}
                                        className="block w-full rounded-lg border-0 py-2.5 pr-10 text-slate-900 dark:text-white ring-1 ring-inset ring-slate-300 dark:ring-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-slate-800"
                                        placeholder="0"
                                    />
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <span className="text-slate-500 sm:text-sm">Orang</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium leading-6 text-slate-900 dark:text-slate-200" htmlFor="gaji">Range Gaji</label>
                                <input
                                    type="text"
                                    name="gaji"
                                    id="gaji"
                                    value={formData.gaji}
                                    onChange={handleChange}
                                    className="mt-2 block w-full rounded-lg border-0 py-2.5 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-slate-800"
                                    placeholder="Contoh: 5 - 7 Juta IDR"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Section 4: Benefit */}
                    <div className="bg-white dark:bg-slate-900 shadow-sm ring-1 ring-slate-900/5 dark:ring-white/10 rounded-xl overflow-hidden">
                        <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-white/5 flex items-center justify-between">
                            <h3 className="text-base font-semibold leading-6 text-slate-900 dark:text-white flex items-center gap-2">
                                <span className="material-icons text-primary text-sm">stars</span> Fasilitas & Benefit
                            </h3>
                        </div>
                        <div className="p-6">
                            <fieldset>
                                <div className="grid grid-cols-2 gap-4">
                                    {['Asrama', 'Asuransi', 'Makan', 'Transport'].map((benefit) => {
                                        const key = `benefit_${benefit.toLowerCase()}` as keyof typeof formData;
                                        return (
                                            <div key={benefit} className="relative flex items-start">
                                                <div className="flex h-6 items-center">
                                                    <input
                                                        id={benefit.toLowerCase()}
                                                        name={key}
                                                        type="checkbox"
                                                        checked={formData[key] as boolean}
                                                        onChange={handleChange}
                                                        className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary dark:border-slate-600 dark:bg-slate-800"
                                                    />
                                                </div>
                                                <div className="ml-3 text-sm leading-6">
                                                    <label htmlFor={benefit.toLowerCase()} className="font-medium text-slate-900 dark:text-slate-200">{benefit}</label>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </fieldset>
                        </div>
                    </div>

                    {/* Section 5: Status & Publish */}
                    <div className="bg-white dark:bg-slate-900 shadow-sm ring-1 ring-slate-900/5 dark:ring-white/10 rounded-xl overflow-hidden sticky top-24">
                        <div className="p-6">
                            <div className="mb-6">
                                <label className="text-base font-semibold text-slate-900 dark:text-white">Status Publikasi</label>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Tentukan apakah lowongan ini langsung aktif.</p>
                                <div className="grid grid-cols-2 gap-3">
                                    <label className={`cursor-pointer relative flex items-center justify-center rounded-lg border p-3 shadow-sm focus:outline-none transition-all ${formData.status === 'aktif' ? 'ring-2 ring-primary border-primary bg-primary/5' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'}`}>
                                        <input
                                            type="radio"
                                            name="status"
                                            value="aktif"
                                            className="sr-only"
                                            checked={formData.status === 'aktif'}
                                            onChange={handleChange}
                                        />
                                        <span className="flex items-center gap-2">
                                            <span className="h-2 w-2 rounded-full bg-green-500"></span>
                                            <span className={`text-sm font-medium ${formData.status === 'aktif' ? 'text-primary' : 'text-slate-900 dark:text-white'}`}>Aktif</span>
                                        </span>
                                    </label>
                                    <label className={`cursor-pointer relative flex items-center justify-center rounded-lg border p-3 shadow-sm focus:outline-none transition-all ${formData.status === 'nonaktif' ? 'ring-2 ring-slate-500 border-slate-500 bg-slate-100 dark:bg-slate-800' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'}`}>
                                        <input
                                            type="radio"
                                            name="status"
                                            value="nonaktif"
                                            className="sr-only"
                                            checked={formData.status === 'nonaktif'}
                                            onChange={handleChange}
                                        />
                                        <span className="flex items-center gap-2">
                                            <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                                            <span className="text-sm font-medium text-slate-900 dark:text-white">Nonaktif</span>
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <button
                                    type="submit"
                                    disabled={isPending}
                                    className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isPending ? 'Menyimpan...' : (isEdit ? 'Simpan Perubahan' : 'Simpan & Publikasikan')}
                                </button>
                                <div className="grid grid-cols-2 gap-3">
                                    <Link
                                        href="/admin/jobs"
                                        className="rounded-lg bg-white dark:bg-slate-800 px-4 py-2.5 text-sm font-semibold text-red-600 shadow-sm ring-1 ring-inset ring-red-200 dark:ring-red-900/30 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all text-center flex items-center justify-center col-span-2"
                                    >
                                        Batal
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
