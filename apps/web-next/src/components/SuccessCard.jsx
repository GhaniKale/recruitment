'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function SuccessCard() {
    const [refId, setRefId] = useState('');

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setRefId('#APP-' + Math.floor(100000 + Math.random() * 900000));
    }, []);

    return (
        <div className="max-w-md w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 text-center shadow-xl shadow-slate-200/50 dark:shadow-none mx-4">
            <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-slow">
                <span className="material-icons text-5xl text-green-600 dark:text-green-500">check_circle</span>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Lamaran Terkirim!</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Terima kasih telah melamar. Tim HR kami akan meninjau kualifikasi Anda. Jika sesuai, kami akan menghubungi Anda melalui WhatsApp atau Email.
            </p>

            <div className="space-y-3">
                <Link
                    href="/jobs"
                    className="block w-full py-3.5 px-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5"
                >
                    LIHAT LOWONGAN LAIN
                </Link>
                <Link
                    href="/"
                    className="block w-full py-3.5 px-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                >
                    KEMBALI KE BERANDA
                </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                <p className="text-xs text-slate-400">
                    ID Referensi: <span className="font-mono text-slate-500 dark:text-slate-300">{refId}</span>
                </p>
            </div>
        </div>
    );
}
