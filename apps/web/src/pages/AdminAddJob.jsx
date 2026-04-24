import { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../components/AdminLayout';

export default function AdminAddJob() {
    // Mock User for AdminLayout
    const user = { name: 'Admin', role: 'Super Administrator' };

    const breadcrumbs = [
        { label: 'Dashboard', href: '/admin/dashboard' },
        { label: 'Lowongan Kerja', href: '/admin/jobs' },
        { label: 'Tambah Baru' },
    ];

    const [formData, setFormData] = useState({
        judul: '',
        negara: '',
        kota: '',
        sektor: 'Manufaktur',
        deskripsi: '',
        persyaratan: '',
        tipe_kontrak: 'Kontrak 1 Tahun',
        kuota: '',
        gaji: '',
        benefit_asrama: false,
        benefit_asuransi: true,
        benefit_makan: false,
        benefit_transport: false,
        status: 'aktif'
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <AdminLayout breadcrumbs={breadcrumbs} user={user}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Tambah Lowongan Baru</h1>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Isi formulir di bawah ini untuk membuat lowongan pekerjaan baru yang akan ditampilkan kepada calon kandidat.</p>
                </div>

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
                                        />
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
                                        >
                                            <option value="" disabled>Pilih Negara</option>
                                            <option>Jepang</option>
                                            <option>Korea Selatan</option>
                                            <option>Taiwan</option>
                                            <option>Malaysia</option>
                                            <option>Arab Saudi</option>
                                        </select>
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
                                            <option>Manufaktur</option>
                                            <option>Konstruksi</option>
                                            <option>Kesehatan (Caregiver)</option>
                                            <option>Pertanian</option>
                                            <option>Hospitality</option>
                                        </select>
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
                                            rows="4"
                                            value={formData.deskripsi}
                                            onChange={handleChange}
                                            className="block w-full rounded-lg border-0 py-2.5 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-slate-800"
                                            placeholder="Jelaskan tanggung jawab utama pekerjaan ini..."
                                        />
                                    </div>
                                    <p className="mt-2 text-xs text-slate-500">Tuliskan deskripsi singkat mengenai apa yang akan dikerjakan kandidat sehari-hari.</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium leading-6 text-slate-900 dark:text-slate-200">Persyaratan Kandidat</label>
                                    <div className="mt-2 rounded-lg ring-1 ring-inset ring-slate-300 dark:ring-slate-700 overflow-hidden dark:bg-slate-800 focus-within:ring-2 focus-within:ring-primary">
                                        {/* Toolbar Simulation */}
                                        <div className="flex items-center gap-1 p-2 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 rich-text-toolbar">
                                            <button type="button" title="Bold" className="p-1.5 text-gray-500 hover:text-primary hover:bg-primary/10 rounded transition-colors"><span className="material-icons text-lg">format_bold</span></button>
                                            <button type="button" title="Italic" className="p-1.5 text-gray-500 hover:text-primary hover:bg-primary/10 rounded transition-colors"><span className="material-icons text-lg">format_italic</span></button>
                                            <button type="button" title="Underline" className="p-1.5 text-gray-500 hover:text-primary hover:bg-primary/10 rounded transition-colors"><span className="material-icons text-lg">format_underlined</span></button>
                                            <div className="w-px h-4 bg-slate-300 dark:bg-slate-600 mx-1"></div>
                                            <button type="button" title="Bullet List" className="p-1.5 text-gray-500 hover:text-primary hover:bg-primary/10 rounded transition-colors"><span className="material-icons text-lg">format_list_bulleted</span></button>
                                            <button type="button" title="Numbered List" className="p-1.5 text-gray-500 hover:text-primary hover:bg-primary/10 rounded transition-colors"><span className="material-icons text-lg">format_list_numbered</span></button>
                                        </div>
                                        <textarea
                                            id="persyaratan"
                                            name="persyaratan"
                                            rows="6"
                                            value={formData.persyaratan}
                                            onChange={handleChange}
                                            className="block w-full border-0 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6 dark:bg-slate-800 resize-none"
                                            placeholder="• Usia minimal 18 tahun
• Sehat jasmani dan rohani
• Pendidikan minimal SMA/SMK"
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
                                    <legend className="sr-only">Benefit</legend>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="relative flex items-start">
                                            <div className="flex h-6 items-center">
                                                <input
                                                    id="asrama"
                                                    name="benefit_asrama"
                                                    type="checkbox"
                                                    checked={formData.benefit_asrama}
                                                    onChange={handleChange}
                                                    className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary dark:border-slate-600 dark:bg-slate-800"
                                                />
                                            </div>
                                            <div className="ml-3 text-sm leading-6">
                                                <label htmlFor="asrama" className="font-medium text-slate-900 dark:text-slate-200">Asrama</label>
                                            </div>
                                        </div>
                                        <div className="relative flex items-start">
                                            <div className="flex h-6 items-center">
                                                <input
                                                    id="asuransi"
                                                    name="benefit_asuransi"
                                                    type="checkbox"
                                                    checked={formData.benefit_asuransi}
                                                    onChange={handleChange}
                                                    className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary dark:border-slate-600 dark:bg-slate-800"
                                                />
                                            </div>
                                            <div className="ml-3 text-sm leading-6">
                                                <label htmlFor="asuransi" className="font-medium text-slate-900 dark:text-slate-200">Asuransi</label>
                                            </div>
                                        </div>
                                        <div className="relative flex items-start">
                                            <div className="flex h-6 items-center">
                                                <input
                                                    id="makan"
                                                    name="benefit_makan"
                                                    type="checkbox"
                                                    checked={formData.benefit_makan}
                                                    onChange={handleChange}
                                                    className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary dark:border-slate-600 dark:bg-slate-800"
                                                />
                                            </div>
                                            <div className="ml-3 text-sm leading-6">
                                                <label htmlFor="makan" className="font-medium text-slate-900 dark:text-slate-200">Makan</label>
                                            </div>
                                        </div>
                                        <div className="relative flex items-start">
                                            <div className="flex h-6 items-center">
                                                <input
                                                    id="transport"
                                                    name="benefit_transport"
                                                    type="checkbox"
                                                    checked={formData.benefit_transport}
                                                    onChange={handleChange}
                                                    className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary dark:border-slate-600 dark:bg-slate-800"
                                                />
                                            </div>
                                            <div className="ml-3 text-sm leading-6">
                                                <label htmlFor="transport" className="font-medium text-slate-900 dark:text-slate-200">Transport</label>
                                            </div>
                                        </div>
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
                                    <fieldset className="grid grid-cols-2 gap-3">
                                        <legend className="sr-only">Status</legend>
                                        <label className={`cursor-pointer relative flex items-center justify-center rounded-lg border p-3 shadow-sm focus:outline-none ring-1 ring-transparent hover:border-primary/50 ${formData.status === 'aktif' ? 'ring-2 ring-primary border-primary' : 'bg-white dark:bg-slate-800'}`}>
                                            <input
                                                type="radio"
                                                name="status"
                                                value="aktif"
                                                className="sr-only peer"
                                                checked={formData.status === 'aktif'}
                                                onChange={handleChange}
                                            />
                                            <span className="flex items-center gap-2">
                                                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                                                <span className={`text-sm font-medium ${formData.status === 'aktif' ? 'text-primary' : 'text-slate-900 dark:text-white'}`}>Aktif</span>
                                            </span>
                                        </label>
                                        <label className={`cursor-pointer relative flex items-center justify-center rounded-lg border p-3 shadow-sm focus:outline-none ring-1 ring-transparent hover:border-slate-400 ${formData.status === 'nonaktif' ? 'ring-2 ring-slate-500 border-slate-500' : 'bg-white dark:bg-slate-800'}`}>
                                            <input
                                                type="radio"
                                                name="status"
                                                value="nonaktif"
                                                className="sr-only peer"
                                                checked={formData.status === 'nonaktif'}
                                                onChange={handleChange}
                                            />
                                            <span className="flex items-center gap-2">
                                                <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                                                <span className="text-sm font-medium text-slate-900 dark:text-white">Nonaktif</span>
                                            </span>
                                        </label>
                                    </fieldset>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <button
                                        type="button"
                                        className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all flex justify-center items-center gap-2"
                                    >
                                        <span className="material-icons text-lg">save</span> Simpan & Publikasikan
                                    </button>
                                    <div className="grid grid-cols-2 gap-3">
                                        <button
                                            type="button"
                                            className="rounded-lg bg-white dark:bg-slate-800 px-4 py-2.5 text-sm font-semibold text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
                                        >
                                            Simpan Draft
                                        </button>
                                        <Link
                                            to="/admin/jobs"
                                            className="rounded-lg bg-white dark:bg-slate-800 px-4 py-2.5 text-sm font-semibold text-red-600 shadow-sm ring-1 ring-inset ring-red-200 dark:ring-red-900/30 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all text-center flex items-center justify-center"
                                        >
                                            Batal
                                        </Link>
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
