'use client';

import { updateApplicationStatus } from '@/app/admin/candidates/actions';
import { useTransition } from 'react';

export default function CandidateStatusSelect({ id, currentStatus, badgeRef }: { id: string, currentStatus: string, badgeRef?: boolean }) {
    const [isPending, startTransition] = useTransition();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newStatus = e.target.value;
        startTransition(async () => {
            await updateApplicationStatus(id, newStatus);
        });
    };

    const getBadgeColor = (status: string) => {
        switch (status) {
            case 'baru': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
            case 'interview': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
            case 'review': return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
            case 'terpilih': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
            case 'ditolak': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    if (badgeRef) {
        // Render as a select but styled like a badge if possible, or just a compact select
        // For table view, a small select is practical.
        return (
            <select
                value={currentStatus}
                onChange={handleChange}
                disabled={isPending}
                className={`block w-full pl-2 pr-8 py-1 text-xs font-medium rounded-full border-transparent focus:border-primary focus:ring-0 sm:text-xs ${getBadgeColor(currentStatus)}`}
            >
                <option value="baru">Baru</option>
                <option value="review">Review</option>
                <option value="interview">Interview</option>
                <option value="terpilih">Terpilih</option>
                <option value="ditolak">Ditolak</option>
            </select>
        );
    }

    return (
        <select
            value={currentStatus}
            onChange={handleChange}
            disabled={isPending}
            className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
        >
            <option value="baru">Baru</option>
            <option value="review">Review</option>
            <option value="interview">Interview</option>
            <option value="terpilih">Terpilih</option>
            <option value="ditolak">Ditolak</option>
        </select>
    );
}
