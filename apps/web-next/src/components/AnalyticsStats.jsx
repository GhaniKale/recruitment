import React from 'react';

export default function AnalyticsStats() {
    return (
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {/* Total */}
            <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-xl border border-neutral-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-icons text-primary text-4xl">folder_shared</span>
                </div>
                <p className="text-sm font-medium text-neutral-500 dark:text-gray-400 mb-1">Total Lamaran</p>
                <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">1,248</h3>
                <div className="flex items-center gap-1 text-xs text-success bg-success/10 w-fit px-2 py-0.5 rounded-full">
                    <span className="material-icons text-[14px]">trending_up</span>
                    <span>+12.5%</span>
                </div>
            </div>
            {/* Baru */}
            <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-xl border border-neutral-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-icons text-primary text-4xl">new_releases</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-primary mb-2"></div>
                <p className="text-sm font-medium text-neutral-500 dark:text-gray-400 mb-1">Baru</p>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">156</h3>
            </div>
            {/* Screening */}
            <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-xl border border-neutral-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-icons text-primary text-4xl">filter_alt</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-indigo-500 mb-2"></div>
                <p className="text-sm font-medium text-neutral-500 dark:text-gray-400 mb-1">Screening</p>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">342</h3>
            </div>
            {/* Interview */}
            <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-xl border border-neutral-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-icons text-primary text-4xl">groups</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-purple-500 mb-2"></div>
                <p className="text-sm font-medium text-neutral-500 dark:text-gray-400 mb-1">Interview</p>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">89</h3>
            </div>
            {/* Lulus */}
            <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-xl border border-neutral-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-icons text-success text-4xl">check_circle</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-success mb-2"></div>
                <p className="text-sm font-medium text-neutral-500 dark:text-gray-400 mb-1">Lulus</p>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">64</h3>
            </div>
            {/* Gagal */}
            <div className="bg-surface-light dark:bg-surface-dark p-5 rounded-xl border border-neutral-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-icons-round text-danger text-4xl">cancel</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-danger mb-2"></div>
                <p className="text-sm font-medium text-neutral-500 dark:text-gray-400 mb-1">Gagal</p>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">597</h3>
            </div>
        </section>
    );
}
