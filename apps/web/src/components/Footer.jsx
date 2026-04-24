import clsx from 'clsx';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="material-icons text-primary text-3xl">public</span>
                            <span className="font-extrabold text-2xl tracking-tight">MARDEL</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            PT Mardel adalah perusahaan rekrutmen terpercaya yang menghubungkan tenaga kerja profesional Indonesia dengan peluang global.
                        </p>
                        <div className="flex space-x-4">
                            {['facebook', 'linkedin', 'instagram'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-slate-300 hover:text-white"
                                >
                                    {/* Placeholder icons using text/material icons loosely */}
                                    <span className="text-sm font-bold uppercase">{social.substring(0, 2)}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Navigasi</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li><a href="#" className="hover:text-primary transition-colors">Beranda</a></li>
                            <li><a href="#about" className="hover:text-primary transition-colors">Tentang Kami</a></li>
                            <li><a href="#industries" className="hover:text-primary transition-colors">Sektor Industri</a></li>
                            <li><a href="/jobs" className="hover:text-primary transition-colors">Karir</a></li>
                            <li><a href="#contact" className="hover:text-primary transition-colors">Kontak</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Hubungi Kami</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li className="flex items-start gap-3">
                                <span className="material-icons text-primary text-sm mt-1">location_on</span>
                                <span>Jl. Jendral Sudirman Kav. 52-53, Jakarta Selatan, 12190</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-icons text-primary text-sm">email</span>
                                <span>info@ptmardel.co.id</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-icons text-primary text-sm">phone</span>
                                <span>+62 21 555 0199</span>
                            </li>
                        </ul>
                    </div>

                    {/* Map (Placeholder) */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Lokasi</h4>
                        <div className="w-full h-40 rounded-xl overflow-hidden bg-slate-800 relative group cursor-pointer">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVeB-BKVibtXEjWwRsFmXoKUYWrPrirZ2XUQL-4c0cS2TGbJOhQXfN-z18XXOlpFG1h4z_09qAWyelN84LTQp8wukcN0QGtZB0U0wpklwhLEJcTlB5E1NT5RW2XQDwV18YPCKPlxFCg6cpIo4nZyXyK754ue7p3F61ZP9Ez-QsU95tJ5WrAcN0NukU-KSh8GoqJU9bn4XZZvQZuEAqRXUV7wfVrD5Lc7y-J9uNaP2E2FcYsAf8j1dfLUyzXHxjRtAfts4RgME9-A"
                                alt="Map location of Jakarta, Indonesia"
                                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                            />
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <span className="material-icons text-primary text-4xl drop-shadow-lg">place</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
                    <p>© 2023 PT Mardel. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
