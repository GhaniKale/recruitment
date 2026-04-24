import React from 'react';

export default function AnalyticsConversion() {
    return (
        <div className="bg-primary text-white p-6 rounded-xl shadow-lg shadow-primary/20 relative overflow-hidden">
            <div className="relative z-10">
                <p className="text-primary-light font-medium mb-1">Conversion Rate</p>
                <h3 className="text-3xl font-bold mb-4">5.12%</h3>
                <p className="text-sm text-white/80 leading-relaxed">
                    Rata-rata tingkat kelulusan kandidat dari tahap Screening hingga Lulus bulan ini.
                </p>
            </div>
            {/* Decorative Background Circle */}
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute -left-6 -top-6 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
        </div>
    );
}
