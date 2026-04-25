import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "LPK Akuur Sauyunan - Pelatihan & Bekerja Sama Dengan Penyalur Tenaga Kerja Luar Negeri Resmi",
  description: "LPK Akuur Sauyunan - Lembaga pelatihan & kerja sama dengan penyalur tenaga kerja luar negeri terpercaya dengan proses aman dan legal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Round" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} antialiased font-sans`}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
