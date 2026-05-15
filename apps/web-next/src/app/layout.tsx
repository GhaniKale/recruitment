import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://akuursauyunan.web.id'),
  title: {
    default: "LPK Akuur Sauyunan - Pelatihan & Penyalur Tenaga Kerja Luar Negeri",
    template: "%s | LPK Akuur Sauyunan",
  },
  description: "LPK Akuur Sauyunan - Lembaga pelatihan & kerja sama dengan penyalur tenaga kerja luar negeri terpercaya dengan proses aman, legal, dan transparan.",
  verification: {
    google: "YSqKbu5Qhyu0gChogfF-aIvy4bDre8KXWXw1k8smMAk",
  },
  openGraph: {
    title: "LPK Akuur Sauyunan - Pelatihan & Penyalur Tenaga Kerja Luar Negeri",
    description: "Lembaga pelatihan & kerja sama penyalur tenaga kerja luar negeri terpercaya (Jepang, Korea, Taiwan, dll). Proses aman, legal, dan transparan.",
    url: 'https://akuursauyunan.web.id',
    siteName: 'LPK Akuur Sauyunan',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "LPK Akuur Sauyunan - Pelatihan & Penyalur Tenaga Kerja Luar Negeri",
    description: "Lembaga pelatihan & kerja sama penyalur tenaga kerja luar negeri terpercaya.",
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAdminPage = typeof window !== "undefined" && window.location.pathname.startsWith("/admin");

  return (
    <html lang="id">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Round" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'LPK Akuur Sauyunan',
              url: 'https://akuursauyunan.web.id',
              logo: 'https://akuursauyunan.web.id/favicon.ico',
              description: 'Lembaga pelatihan & kerja sama dengan penyalur tenaga kerja luar negeri terpercaya dengan proses aman, legal, dan transparan.',
            })
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased font-sans`}>
        {children}
        {!isAdminPage && <FloatingWhatsApp />}
      </body>
    </html>
  );
}
