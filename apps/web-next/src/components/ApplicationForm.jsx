'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { submitApplication } from '@/app/jobs/[id]/apply/actions';

export default function ApplicationForm({ jobTitle, jobId }) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [globalError, setGlobalError] = useState('');
    const [fieldErrors, setFieldErrors] = useState({});
    const [uploadStatus, setUploadStatus] = useState(''); // '' | 'uploading' | 'success' | 'error'
    const [fileName, setFileName] = useState('');

    const [captcha, setCaptcha] = useState({
        num1: Math.floor(Math.random() * 10),
        num2: Math.floor(Math.random() * 10),
        answer: ''
    });

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
            setUploadStatus('uploading');
            // Simulate a brief validation delay
            setTimeout(() => {
                if (file.size > 5 * 1024 * 1024) {
                    setUploadStatus('error');
                } else {
                    setUploadStatus('success');
                }
            }, 800);
        } else {
            setFileName('');
            setUploadStatus('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setGlobalError('');
        setFieldErrors({});

        if (parseInt(captcha.answer) !== captcha.num1 + captcha.num2) {
            alert('Hitungan keamanan salah, silakan coba lagi.');
            return;
        }

        setIsLoading(true);
        const formData = new FormData(e.currentTarget);

        try {
            const result = await submitApplication(null, formData);

            if (result?.success) {
                router.push(`/jobs/${jobId}/apply/success`);
            } else if (result?.error) {
                setFieldErrors(result.error);
                setGlobalError('Mohon periksa input Anda.');
            } else if (result?.message) {
                setGlobalError(result.message);
            }
        } catch (error) {
            console.error(error);
            setGlobalError('Terjadi kesalahan sistem. Silakan coba lagi nanti.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 shadow-xl shadow-slate-200/50 dark:shadow-none rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
            <input type="hidden" name="job_id" value={jobId} />

            {/* Job Info Summary */}
            <div className="bg-slate-50 dark:bg-slate-800/50 px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Melamar untuk Posisi</p>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{jobTitle}</h3>
                </div>
                <div className="hidden sm:block">
                    <span className="material-icons text-primary text-3xl opacity-50">work</span>
                </div>
            </div>

            <div className="p-6 md:p-8 space-y-8">
                {globalError && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-lg border border-red-200 mb-4 flex items-center gap-2">
                        <span className="material-icons text-lg">error</span>
                        {globalError}
                    </div>
                )}

                {/* Personal Details */}
                <section>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">1</span>
                        Data Pribadi
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col-span-2 md:col-span-1">
                            <label htmlFor="full_name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Nama Lengkap</label>
                            <input type="text" id="full_name" name="full_name" required autoComplete="name" className="block w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" placeholder="Sesuai KTP" />
                            {fieldErrors.full_name && <p className="text-red-500 text-xs mt-1">{fieldErrors.full_name[0]}</p>}
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <label htmlFor="nik" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">NIK (KTP)</label>
                            <input type="text" id="nik" name="nik" required maxLength="16" autoComplete="off" className="block w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" placeholder="16 digit angka" />
                            {fieldErrors.nik && <p className="text-red-500 text-xs mt-1">{fieldErrors.nik[0]}</p>}
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                            <input type="email" id="email" name="email" required autoComplete="email" className="block w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" placeholder="nama@email.com" />
                            {fieldErrors.email && <p className="text-red-500 text-xs mt-1">{fieldErrors.email[0]}</p>}
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Nomor WhatsApp</label>
                            <input type="tel" id="phone" name="phone" required autoComplete="tel" className="block w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" placeholder="0812..." />
                            {fieldErrors.phone && <p className="text-red-500 text-xs mt-1">{fieldErrors.phone[0]}</p>}
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="address" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Alamat Domisili</label>
                            <textarea id="address" name="address" rows="3" required autoComplete="street-address" className="block w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" placeholder="Alamat lengkap saat ini"></textarea>
                            {fieldErrors.address && <p className="text-red-500 text-xs mt-1">{fieldErrors.address[0]}</p>}
                        </div>
                    </div>
                </section>

                <hr className="border-slate-200 dark:border-slate-700" />

                {/* Documents */}
                <section>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">2</span>
                        Upload Dokumen
                    </h4>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="cv_file" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Upload CV / Resume (PDF/DOC)</label>
                            <div className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-lg transition-colors cursor-pointer group relative ${
                                uploadStatus === 'success' ? 'border-accent bg-accent/5' :
                                uploadStatus === 'error' ? 'border-red-400 bg-red-50 dark:bg-red-950/20' :
                                uploadStatus === 'uploading' ? 'border-primary bg-primary/5' :
                                'border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
                            }`}>
                                <div className="space-y-1 text-center pointer-events-none">
                                    {uploadStatus === 'uploading' ? (
                                        <>
                                            <div className="flex justify-center">
                                                <div className="w-8 h-8 border-3 border-primary border-t-transparent rounded-full animate-spin"></div>
                                            </div>
                                            <p className="text-sm text-primary font-medium">Mengupload...</p>
                                            {/* Progress bar */}
                                            <div className="w-48 mx-auto bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 overflow-hidden">
                                                <div className="bg-primary h-full rounded-full animate-pulse" style={{width: '70%'}}></div>
                                            </div>
                                        </>
                                    ) : uploadStatus === 'success' ? (
                                        <>
                                            <span className="material-icons text-accent text-3xl">check_circle</span>
                                            <p className="text-sm text-accent font-semibold">Dokumen berhasil diupload.</p>
                                            <p className="text-xs text-slate-500">{fileName}</p>
                                        </>
                                    ) : uploadStatus === 'error' ? (
                                        <>
                                            <span className="material-icons text-red-500 text-3xl">error</span>
                                            <p className="text-sm text-red-600 font-semibold">Upload gagal, silakan coba lagi.</p>
                                            <p className="text-xs text-slate-500">File terlalu besar (maks 5MB)</p>
                                        </>
                                    ) : (
                                        <>
                                            <span className="material-icons text-slate-400 text-3xl group-hover:text-primary transition-colors">cloud_upload</span>
                                            <div className="flex text-sm text-slate-600 dark:text-slate-400 justify-center">
                                                <p className="font-medium text-primary hover:text-blue-500">Upload file</p>
                                            </div>
                                            <p className="text-xs text-slate-500 dark:text-slate-500">Max 5MB (PDF, DOCX)</p>
                                        </>
                                    )}
                                </div>
                                <input
                                    id="cv_file"
                                    name="cv_file"
                                    type="file"
                                    required
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleFileChange}
                                />
                            </div>
                            {fieldErrors.cv_file && <p className="text-red-500 text-xs mt-1">{fieldErrors.cv_file[0]}</p>}
                        </div>
                    </div>
                </section>

                <hr className="border-slate-200 dark:border-slate-700" />

                {/* Security */}
                <section>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">3</span>
                        Verifikasi Keamanan
                    </h4>
                    <div>
                        <label htmlFor="captcha" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                            Berapa hasil dari <span className="font-bold text-slate-900 dark:text-white">{captcha.num1} + {captcha.num2}</span> ?
                        </label>
                        <input
                            type="number"
                            id="captcha"
                            required
                            className="block w-32 rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                            value={captcha.answer}
                            onChange={(e) => setCaptcha({ ...captcha, answer: e.target.value })}
                        />
                    </div>
                </section>

                {/* Action */}
                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={isLoading || uploadStatus === 'uploading'}
                        className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-lg shadow-primary/30 text-base font-bold text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isLoading ? 'MENGIRIM...' : 'KIRIM LAMARAN'}
                    </button>
                    <p className="mt-4 text-center text-xs text-slate-500 dark:text-slate-400">
                        Dengan mengirim lamaran ini, Anda menyetujui kebijakan privasi kami.
                    </p>
                </div>
            </div>
        </form>
    );
}
