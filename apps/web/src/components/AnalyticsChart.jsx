import React from 'react';

export default function AnalyticsChart() {
    return (
        <section className="lg:col-span-2 bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-neutral-200 dark:border-gray-800 shadow-sm">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-lg font-bold text-neutral-900 dark:text-white">Lamaran per Lowongan</h2>
                    <p className="text-sm text-neutral-500 dark:text-gray-400">Distribusi kandidat berdasarkan posisi pekerjaan aktif</p>
                </div>
                <button className="text-primary hover:text-primary-dark text-sm font-medium">Lihat Detail</button>
            </div>
            <div className="space-y-6">
                {/* Chart Item 1 */}
                <div className="group">
                    <div className="flex justify-between items-end mb-1">
                        <span className="text-sm font-medium text-neutral-700 dark:text-gray-200">Operator Jepang</span>
                        <span className="text-sm font-bold text-neutral-900 dark:text-white">450 <span className="text-xs font-normal text-neutral-500">Lamaran</span></span>
                    </div>
                    <div className="w-full bg-neutral-100 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div className="bg-primary h-3 rounded-full relative group-hover:opacity-90 transition-all duration-500" style={{ width: '85%' }}></div>
                    </div>
                </div>
                {/* Chart Item 2 */}
                <div className="group">
                    <div className="flex justify-between items-end mb-1">
                        <span className="text-sm font-medium text-neutral-700 dark:text-gray-200">Caregiver Taiwan</span>
                        <span className="text-sm font-bold text-neutral-900 dark:text-white">320 <span className="text-xs font-normal text-neutral-500">Lamaran</span></span>
                    </div>
                    <div className="w-full bg-neutral-100 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div className="bg-primary/80 h-3 rounded-full relative group-hover:opacity-90 transition-all duration-500" style={{ width: '60%' }}></div>
                    </div>
                </div>
                {/* Chart Item 3 */}
                <div className="group">
                    <div className="flex justify-between items-end mb-1">
                        <span className="text-sm font-medium text-neutral-700 dark:text-gray-200">Welder Korea Selatan</span>
                        <span className="text-sm font-bold text-neutral-900 dark:text-white">210 <span className="text-xs font-normal text-neutral-500">Lamaran</span></span>
                    </div>
                    <div className="w-full bg-neutral-100 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div className="bg-primary/60 h-3 rounded-full relative group-hover:opacity-90 transition-all duration-500" style={{ width: '40%' }}></div>
                    </div>
                </div>
                {/* Chart Item 4 */}
                <div className="group">
                    <div className="flex justify-between items-end mb-1">
                        <span className="text-sm font-medium text-neutral-700 dark:text-gray-200">Construction Worker Poland</span>
                        <span className="text-sm font-bold text-neutral-900 dark:text-white">156 <span className="text-xs font-normal text-neutral-500">Lamaran</span></span>
                    </div>
                    <div className="w-full bg-neutral-100 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div className="bg-primary/40 h-3 rounded-full relative group-hover:opacity-90 transition-all duration-500" style={{ width: '30%' }}></div>
                    </div>
                </div>
                {/* Chart Item 5 */}
                <div className="group">
                    <div className="flex justify-between items-end mb-1">
                        <span className="text-sm font-medium text-neutral-700 dark:text-gray-200">Food Processing Jepang</span>
                        <span className="text-sm font-bold text-neutral-900 dark:text-white">112 <span className="text-xs font-normal text-neutral-500">Lamaran</span></span>
                    </div>
                    <div className="w-full bg-neutral-100 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div className="bg-primary/30 h-3 rounded-full relative group-hover:opacity-90 transition-all duration-500" style={{ width: '20%' }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
