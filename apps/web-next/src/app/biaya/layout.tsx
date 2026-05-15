import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Biaya Program | LPK Akuur Sauyunan',
  description: 'Informasi lengkap biaya program kerja ke luar negeri (Jepang, Korea, Taiwan, Malaysia, dll). Transparan tanpa biaya tersembunyi.',
  alternates: {
    canonical: '/biaya',
  },
};

export default function BiayaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
