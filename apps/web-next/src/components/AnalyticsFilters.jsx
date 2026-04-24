import React from 'react';

export default function AnalyticsFilters() {
    return (
        <section className="mb-8 bg-surface-light dark:bg-surface-dark p-5 rounded-xl border border-neutral-200 dark:border-gray-800 shadow-sm">
            <div className="flex flex-col md:flex-row gap-4 items-end">
                <div className="flex-1 w-full">
                    <label className="block text-xs font-semibold text-neutral-500 dark:text-gray-400 uppercase tracking-wider mb-2">Periode</label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="material-icons-round text-neutral-400 text-[20px]">calendar_today</span>
                        </span>
                        <select className="pl-10 block w-full bg-neutral-50 dark:bg-gray-800 border-neutral-200 dark:border-gray-700 rounded-lg text-sm focus:border-primary focus:ring-primary dark:text-white py-2.5">
                            <option>30 Hari Terakhir</option>
                            <option>Bulan Ini</option>
                            <option>Kuartal Ini</option>
                            <option>Tahun Ini</option>
                        </select>
                    </div>
                </div>
                <div className="flex-1 w-full">
                    <label className="block text-xs font-semibold text-neutral-500 dark:text-gray-400 uppercase tracking-wider mb-2">Job / Posisi</label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="material-icons-outlined text-neutral-400 text-[20px]">work</span>
                        </span>
                        <select className="pl-10 block w-full bg-neutral-50 dark:bg-gray-800 border-neutral-200 dark:border-gray-700 rounded-lg text-sm focus:border-primary focus:ring-primary dark:text-white py-2.5">
                            <option>Semua Pekerjaan</option>
                            <option>Operator Jepang</option>
                            <option>Caregiver Taiwan</option>
                            <option>Welder Korea Selatan</option>
                            <option>Construction Worker</option>
                        </select>
                    </div>
                </div>
                <div className="flex-1 w-full">
                    <label className="block text-xs font-semibold text-neutral-500 dark:text-gray-400 uppercase tracking-wider mb-2">Negara Tujuan</label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="material-icons text-neutral-400 text-[20px]">public</span>
                        </span>
                        <select className="pl-10 block w-full bg-neutral-50 dark:bg-gray-800 border-neutral-200 dark:border-gray-700 rounded-lg text-sm focus:border-primary focus:ring-primary dark:text-white py-2.5">
                            <option>Semua Negara</option>
                            <option>Jepang</option>
                            <option>Taiwan</option>
                            <option>Korea Selatan</option>
                            <option>Polandia</option>
                        </select>
                    </div>
                </div>
                <div className="w-full md:w-auto">
                    <button className="w-full md:w-auto px-6 py-2.5 bg-primary/10 text-primary dark:bg-primary dark:text-white font-medium rounded-lg hover:bg-primary hover:text-white dark:hover:bg-primary-dark transition-all">
                        Terapkan
                    </button>
                </div>
            </div>
        </section>
    );
}
