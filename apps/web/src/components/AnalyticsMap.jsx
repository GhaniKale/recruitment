import React from 'react';

export default function AnalyticsMap() {
    return (
        <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-neutral-200 dark:border-gray-800 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-neutral-100 dark:border-gray-700">
                <h3 className="font-bold text-neutral-900 dark:text-white">Negara Paling Diminati</h3>
            </div>
            <div className="relative h-48 w-full bg-neutral-50 dark:bg-gray-800">
                {/* Abstract Map Representation */}
                <div className="absolute inset-0 flex items-center justify-center text-neutral-300 dark:text-gray-600">
                    <img
                        alt="World map focused on Asia region with highlighted countries"
                        className="w-full h-full object-cover opacity-80 mix-blend-multiply dark:mix-blend-overlay"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlrqf71uZ6-O4OTyOEQP7a91K6eF0bTDUCrdSQdTFjVRFRImUpFVR_zIULCI30FXnq_OuLmejSNnWPOFrWp5BYgIkh00X31cvfRXzxWheBriK6iND1QFvAsrUQjKo-8zyhqBNipZh3EOvdSqRKgrtR3E7TBWVOGJ74GMjswTMwhvEtn_0J1mYBoBkcoWaUVeMOjntyVRszh8SnCqJw7Pq7Xbv8KuXkQbsL8BdvSUXKQjgC9rJIJB_FscAW9-Ec54VsYxspp2ekDw"
                    />
                </div>
                {/* Overlay Legend */}
                <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm p-3 rounded-lg shadow-sm text-xs">
                    <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="font-medium text-neutral-700 dark:text-white">Jepang (45%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary/60"></div>
                        <span className="font-medium text-neutral-700 dark:text-white">Taiwan (30%)</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
