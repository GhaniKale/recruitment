'use client';

import { updateJobStatus } from '@/app/admin/jobs/actions';
import { useTransition } from 'react';

export default function JobStatusToggle({ id, isActive }: { id: string, isActive: boolean }) {
    const [isPending, startTransition] = useTransition();

    const handleToggle = () => {
        startTransition(async () => {
            await updateJobStatus(id, !isActive);
        });
    };

    return (
        <button
            onClick={handleToggle}
            disabled={isPending}
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border transition-colors ${isActive
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800 hover:bg-green-200'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-700/50 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:bg-gray-200'
                }`}
        >
            <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${isActive ? 'bg-green-500' : 'bg-gray-500'}`}></span>
            {isActive ? 'Aktif' : 'Nonaktif'}
        </button>
    );
}
