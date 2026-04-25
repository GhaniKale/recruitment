'use client';

import { useState, useEffect } from 'react';

export default function AntiFraudModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show modal on first visit
        const hasSeenModal = localStorage.getItem('seenAntiFraudModal');
        if (!hasSeenModal) {
            // Small delay for effect
            const timer = setTimeout(() => setIsOpen(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        localStorage.setItem('seenAntiFraudModal', 'true');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={handleClose}></div>

            {/* Modal Content */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-lg w-full relative z-10 overflow-hidden transform scale-100 transition-transform border border-slate-200 dark:border-slate-700">
                <div className="bg-red-500 p-4 text-white flex items-center gap-3">
                    <span className="material-icons text-3xl">warning_amber</span>
                    <h3 className="text-lg font-bold">PENTING: Hati-hati Penipuan!</h3>
                </div>

                <div className="p-6 md:p-8">
                    <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                        LPK Akuur Sauyunan <strong>TIDAK PERNAH</strong> memungut biaya apapun dari kandidat selama proses rekrutmen (tiket pesawat, akomodasi, biaya admin, dll).
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                        Mohon abaikan jika ada pihak yang mengatasnamakan LPK Akuur Sauyunan dan meminta sejumlah uang. Segera laporkan ke kontak resmi kami.
                    </p>

                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-700 mb-6">
                        <p className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Kontak Resmi Pengaduan:</p>
                        <div className="flex items-center gap-2 text-primary font-bold">
                            <span className="material-icons text-sm">phone</span>
                            085972842784 (WhatsApp Admin)
                        </div>
                    </div>

                    <button
                        onClick={handleClose}
                        className="w-full py-3 bg-slate-900 dark:bg-slate-700 text-white font-bold rounded-xl hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors"
                    >
                        SAYA MENGERTI
                    </button>
                </div>
            </div>
        </div>
    );
}
