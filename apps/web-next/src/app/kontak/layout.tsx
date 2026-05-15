import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontak | LPK Akuur Sauyunan',
  description: 'Hubungi LPK Akuur Sauyunan untuk informasi pendaftaran, pelatihan, dan penempatan tenaga kerja ke luar negeri.',
  alternates: {
    canonical: '/kontak',
  },
};

export default function KontakLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
