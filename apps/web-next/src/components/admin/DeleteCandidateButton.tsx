'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface DeleteCandidateButtonProps {
    id: string;
}

export default function DeleteCandidateButton({ id }: DeleteCandidateButtonProps) {
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    const handleDelete = async () => {
        if (!confirm('Apakah Anda yakin ingin menghapus kandidat ini? Data yang dihapus tidak dapat dikembalikan.')) {
            return;
        }

        setIsDeleting(true);

        try {
            const response = await fetch(`/api/admin/applications/${id}`, {
                method: 'DELETE',
                credentials: 'include',
            });

            let data;
            const text = await response.text();
            try {
                data = JSON.parse(text);
            } catch {
                // Not JSON, probably a raw error message
                data = { error: text || response.statusText };
            }

            if (!response.ok) {
                console.error('Delete failed:', response.status, data);
                throw new Error(data.error || `Error ${response.status}: ${response.statusText}`);
            }

            // Refresh the page
            router.refresh();
            alert('Kandidat berhasil dihapus.');
        } catch (error: unknown) {
            console.error('Error deleting candidate:', error);
            alert(`Gagal menghapus kandidat: ${error instanceof Error ? error.message : String(error)}`);
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 ml-4 font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {isDeleting ? 'Menghapus...' : 'Hapus'}
        </button>
    );
}
