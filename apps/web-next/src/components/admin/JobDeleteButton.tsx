'use client';

import { deleteJob } from '@/app/admin/jobs/actions';
import { useTransition } from 'react';

export default function JobDeleteButton({ id }: { id: string }) {
    const [isPending, startTransition] = useTransition();

    const handleDelete = () => {
        if (confirm('Apakah Anda yakin ingin menghapus lowongan ini?')) {
            startTransition(async () => {
                await deleteJob(id);
            });
        }
    };

    return (
        <button
            onClick={handleDelete}
            disabled={isPending}
            className="p-1.5 text-slate-400 hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors disabled:opacity-50"
        >
            <span className="material-icons text-lg">delete</span>
        </button>
    );
}
