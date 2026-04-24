export default function About() {
    const visionMission = [
        {
            title: 'Visi',
            icon: 'visibility',
            color: 'bg-primary/10 text-primary',
            borderColor: 'border-primary',
            description: 'Menjadi perusahaan penempatan tenaga kerja Indonesia yang terpercaya secara global dengan mengedepankan kualitas dan integritas.',
        },
        {
            title: 'Misi',
            icon: 'rocket_launch',
            color: 'bg-blue-400/10 text-blue-400',
            borderColor: 'border-blue-400',
            description: 'Memberikan solusi tenaga kerja berkualitas, meningkatkan kesejahteraan pekerja migran, dan menjaga hubungan harmonis dengan mitra kerja.',
        },
    ];

    const features = [
        'Proses seleksi ketat dan transparan.',
        'Pelatihan pra-pemberangkatan yang komprehensif.',
        'Jaringan global di Asia, Timur Tengah, dan Eropa.',
    ];

    return (
        <section id="about" className="py-24 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">Tentang PT Mardel</h2>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Text & Content */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Mitra Strategis Karir Internasional Anda</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                Didirikan pada tahun 2006, PT Mardel telah tumbuh menjadi salah satu agensi rekrutmen terdepan di Indonesia. Kami berkomitmen untuk menyediakan layanan penempatan tenaga kerja yang etis, transparan, dan profesional. Fokus kami adalah memastikan setiap kandidat mendapatkan perlindungan maksimal dan setiap klien mendapatkan talenta yang sesuai dengan kebutuhan operasional mereka.
                            </p>
                            <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="material-icons text-primary text-xl mt-0.5">check_circle</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Vision & Mission Cards */}
                        <div className="grid sm:grid-cols-2 gap-6 mt-8">
                            {visionMission.map((item, index) => (
                                <div key={index} className={`bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border-l-4 ${item.borderColor}`}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className={`p-2 rounded-lg ${item.color}`}>
                                            <span className="material-icons">{item.icon}</span>
                                        </div>
                                        <h4 className="font-bold text-lg text-slate-900 dark:text-white">{item.title}</h4>
                                    </div>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Image Grid */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdWOsaD_fOI9pNYDh9nrN68kJ9AM5jz9SNxMiNHiWxOSQdBxUIetpbz1MPDymZTz-YJFXRvcUNs0g6HqYxYnen3HI5V08GCDZa0g7_q6K2UBR_2hhj2ZSP4nGzMVaNv8oXxj-JStK3LzX2mbo488kKJeD-v2kTZwL120QXI2VFViyI0T10XO0VjUs3V_p2NCE0xPfbY-lKIApW4o35bW2FEkC3t_YDSYESfH-41Lsgt2vGM0ZE3Kcz3hD35VpLkLHX24_6W1aJbA"
                                alt="Modern corporate office meeting room"
                                className="rounded-2xl shadow-lg w-full h-64 object-cover"
                            />
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOA1GVwDxhOna3HiahUGQhrl7fqs8ziu-vB-xAR2WsH_EmpGSnzmkFTK2PldCY89So2gccWIT74ALzt5HMnALcSXGgTEkDXiBw4KilB2TrFhJTZgjTP26Mj53-cCj5IYyWO3DMvw-6Aj4usn_C0uFT8KCMz8-tmbTQ6CahCtCouF2sOjfpWogTdU71QtndikMYp2j9Iv8tHSrrRQtltIPIvn1PZCcXgUql4vA4jKiKX9Kh6ZTrlQx_JtJ3m8beCJoJapneSYGzzA"
                                alt="Two professionals shaking hands in agreement"
                                className="rounded-2xl shadow-lg w-full h-64 object-cover mt-12"
                            />
                        </div>
                        {/* Decorative BG Blob */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl opacity-70"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
