import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="material-icons text-accent text-3xl">verified_user</span>
                            <div className="flex flex-col leading-tight">
                                <span className="font-extrabold text-xl tracking-tight">LPK AKUR</span>
                                <span className="text-[10px] font-semibold text-primary tracking-widest uppercase text-slate-400">Sauyunan</span>
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            LPK Akur Sauyunan adalah lembaga penyalur tenaga kerja luar negeri terpercaya yang menghubungkan tenaga kerja profesional Indonesia dengan peluang global secara aman dan legal.
                        </p>
                        <div className="flex space-x-4">
                            {['facebook', 'instagram'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent transition-colors text-slate-300 hover:text-white"
                                >
                                    <span className="text-sm font-bold uppercase">{social.substring(0, 2)}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Navigasi</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li><a href="/" className="hover:text-accent transition-colors">Beranda</a></li>
                            <li><a href="/#about" className="hover:text-accent transition-colors">Tentang Kami</a></li>
                            <li><Link href="/costs" className="hover:text-accent transition-colors">Recruitment</Link></li>
                            <li><Link href="/jobs" className="hover:text-accent transition-colors">Lowongan</Link></li>
                            <li><Link href="/kontak" className="hover:text-accent transition-colors">Kontak</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Hubungi Kami</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li className="flex items-start gap-3">
                                <span className="material-icons text-accent text-sm mt-1">location_on</span>
                                <span>Jl. Jendral Sudirman Kav. 52-53, Jakarta Selatan, 12190</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-icons text-accent text-sm">phone</span>
                                <a href="https://wa.me/6285972842784" className="hover:text-accent transition-colors">085972842784 (WhatsApp)</a>
                            </li>
                        </ul>
                    </div>

                    {/* WhatsApp CTA */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Chat Langsung</h4>
                        <a
                            href="https://wa.me/6285972842784"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-accent/20 hover:bg-accent/30 border border-accent/30 rounded-xl p-4 transition-colors group"
                        >
                            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                            </div>
                            <div>
                                <p className="text-white font-bold text-sm">Chat WhatsApp</p>
                                <p className="text-slate-400 text-xs">085972842784</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} LPK Akur Sauyunan. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
