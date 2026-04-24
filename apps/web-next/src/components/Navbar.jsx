'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Beranda', href: '/' },
        { name: 'Tentang Kami', href: '/#about' },
        { name: 'Recruitment', href: '/costs' },
        { name: 'Lowongan', href: '/jobs' },
    ];

    const isActive = (path) => {
        if (path === '/' && pathname !== '/') return false;
        if (path.startsWith('/#')) return pathname === '/';
        return pathname.startsWith(path);
    };

    return (
        <nav className={clsx(
            "sticky top-0 z-50 transition-all duration-300",
            scrolled
                ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm"
                : "bg-white dark:bg-slate-900 border-b border-transparent"
        )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
                        <span className="material-icons text-accent text-3xl group-hover:scale-110 transition-transform">verified_user</span>
                        <div className="flex flex-col leading-tight">
                            <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white">LPK AKUR</span>
                            <span className="text-[10px] font-semibold text-primary tracking-widest uppercase">Sauyunan</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={clsx(
                                    "font-medium transition-colors",
                                    isActive(link.href)
                                        ? "text-primary"
                                        : "text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <Link
                            href="/kontak"
                            className="px-5 py-2.5 rounded-lg bg-accent text-white font-medium hover:bg-accent-hover transition-colors shadow-lg shadow-accent/30"
                        >
                            Kontak
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 dark:text-slate-300 hover:text-primary"
                        >
                            <span className="material-icons text-3xl">{isOpen ? 'close' : 'menu'}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-lg absolute w-full left-0">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={clsx(
                                    "block px-3 py-2 rounded-md text-base font-medium",
                                    isActive(link.href)
                                        ? "text-primary bg-primary/5"
                                        : "text-slate-700 dark:text-slate-200 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800"
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <Link
                            href="/kontak"
                            className="block px-3 py-2 mt-4 text-center rounded-lg bg-accent text-white font-medium hover:bg-accent-hover shadow-lg shadow-accent/30"
                            onClick={() => setIsOpen(false)}
                        >
                            Kontak
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
