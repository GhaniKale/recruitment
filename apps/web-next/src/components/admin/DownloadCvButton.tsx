'use client';

import { useState } from 'react';

interface DownloadCvButtonProps {
    path: string;
    filename?: string;
}

export default function DownloadCvButton({ path, filename }: DownloadCvButtonProps) {
    const [isLoading, setIsLoading] = useState(false);

    const handleDownload = async (e: React.MouseEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('/api/admin/storage/signed-url', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ path }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to get signed URL');
            }

            if (data.url) {
                // Open in new tab
                window.open(data.url, '_blank');
            }
        } catch (error) {
            console.error('Error downloading CV:', error);
            alert('Gagal mengunduh CV. Silakan coba lagi.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <button
            onClick={handleDownload}
            disabled={isLoading}
            className="font-medium text-primary hover:text-blue-600 dark:hover:text-blue-400 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {isLoading ? 'Loading...' : 'Download'}
        </button>
    );
}
