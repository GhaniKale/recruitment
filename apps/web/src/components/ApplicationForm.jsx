import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ApplicationForm({ jobTitle }) {
    const navigate = useNavigate();
    const [captcha, setCaptcha] = useState({
        num1: Math.floor(Math.random() * 10),
        num2: Math.floor(Math.random() * 10),
        answer: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (parseInt(captcha.answer) !== captcha.num1 + captcha.num2) {
            alert('Hitungan keamanan salah, silakan coba lagi.');
            return;
        }
        // Mock submission
        navigate('success');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 shadow-xl shadow-slate-200/50 dark:shadow-none rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
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
                {/* Personal Details */}
                <section>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">1</span>
                        Data Pribadi
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col-span-2 md:col-span-1">
                            <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Nama Lengkap</label>
                            <input type="text" id="fullName" required className="block w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" placeholder="Sesuai KTP" />
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <label htmlFor="nik" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">NIK (KTP)</label>
                            <input type="text" id="nik" required maxLength="16" className="block w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" placeholder="16 digit angka" />
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                            <input type="email" id="email" required className="block w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" placeholder="nama@email.com" />
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Nomor WhatsApp</label>
                            <input type="tel" id="phone" required className="block w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" placeholder="0812..." />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="address" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Alamat Domisili</label>
                            <textarea id="address" rows="3" required className="block w-full rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" placeholder="Alamat lengkap saat ini"></textarea>
                        </div>
                    </div>
                </section>

                <hr className="border-slate-200 dark:border-slate-700" />

                {/* Documents */}
                <section>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">2</span>
                        Dokumen
                    </h4>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Upload CV / Resume (PDF)</label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 dark:border-slate-700 border-dashed rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group">
                                <div className="space-y-1 text-center">
                                    <span className="material-icons text-slate-400 text-3xl group-hover:text-primary transition-colors">cloud_upload</span>
                                    <div className="flex text-sm text-slate-600 dark:text-slate-400">
                                        <label htmlFor="file-upload" className="relative cursor-pointer bg-transparent rounded-md font-medium text-primary hover:text-blue-500 focus-within:outline-none">
                                            <span>Upload file</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" accept=".pdf" />
                                        </label>
                                        <p className="pl-1">atau drag and drop</p>
                                    </div>
                                    <p className="text-xs text-slate-500 dark:text-slate-500">PDF hingga 5MB</p>
                                </div>
                            </div>
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
                        className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-lg shadow-primary/30 text-base font-bold text-white bg-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all hover:-translate-y-1"
                    >
                        KIRIM LAMARAN
                    </button>
                    <p className="mt-4 text-center text-xs text-slate-500 dark:text-slate-400">
                        Dengan mengirim lamaran ini, Anda menyetujui kebijakan privasi kami.
                    </p>
                </div>
            </div>
        </form>
    );
}
