import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Beranda', path: '/' },
        { name: 'Lowongan', path: '/jobs' },
        { name: 'Biaya', path: '/costs' },
        // { name: 'Tentang', path: '/#about' }, // Simplification for now
        // { name: 'Sektor', path: '/#industries' },
    ];

    const isActive = (path) => {
        if (path === '/' && location.pathname !== '/') return false;
        return location.pathname.startsWith(path);
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
                    <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
                        <span className="material-icons text-primary text-3xl group-hover:scale-110 transition-transform">public</span>
                        <span className="font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white">MARDEL</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={clsx(
                                    "font-medium transition-colors",
                                    isActive(link.path)
                                        ? "text-primary"
                                        : "text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <a
                            href="#contact"
                            className="px-5 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-blue-600 transition-colors shadow-lg shadow-primary/30"
                        >
                            Kontak
                        </a>
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
                                to={link.path}
                                className={clsx(
                                    "block px-3 py-2 rounded-md text-base font-medium",
                                    isActive(link.path)
                                        ? "text-primary bg-primary/5"
                                        : "text-slate-700 dark:text-slate-200 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800"
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <a
                            href="#contact"
                            className="block px-3 py-2 mt-4 text-center rounded-lg bg-primary text-white font-medium hover:bg-blue-600 shadow-lg shadow-primary/30"
                            onClick={() => setIsOpen(false)}
                        >
                            Kontak
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
