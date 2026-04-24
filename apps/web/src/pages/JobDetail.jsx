import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Breadcrumbs from '../components/Breadcrumbs';
import JobDetailHeader from '../components/JobDetailHeader';
import JobContent from '../components/JobContent';
import JobBenefits from '../components/JobBenefits';
import JobSidebar from '../components/JobSidebar';
import MapPreview from '../components/MapPreview';
import Footer from '../components/Footer';

export default function JobDetail() {
    const { id } = useParams();

    // Mock Data (In a real app, fetch based on ID)
    const job = {
        id: id || 'JOB-2023-001',
        title: 'Senior Welder (MIG/TIG) for Offshore Project',
        category: 'Construction',
        type: 'Full Time',
        location: 'Dubai, UAE',
        salary: 'AED 3,500 - 5,000 (Tax Free)',
        postedAt: '2 hari yang lalu',
        description: `Kami mencari Welder berpengalaman untuk bergabung dengan tim proyek konstruksi lepas pantai di Dubai. Kandidat yang ideal harus memiliki sertifikasi internasional yang valid dan pengalaman minimal 5 tahun di bidang pengelasan struktur baja berat.

    Tanggung Jawab Utama:
    - Melakukan pengelasan MIG/TIG sesuai spesifikasi teknis.
    - Membaca dan menerjemahkan gambar teknik (blueprint).
    - Memastikan kualitas hasil lasan memenuhi standar inspeksi (NDT).
    - Mematuhi prosedur keselamatan kerja (HSE) yang ketat.
    - Melakukan perawatan rutin pada peralatan las.`,
        requirements: [
            'Pria, usia maksimal 45 tahun.',
            'Pendidikan minimal SMK Teknik Las / Mesin.',
            'Pengalaman kerja minimal 5 tahun sebagai Welder (dibuktikan dengan Paklaring).',
            'Memiliki sertifikat 6G (MIG/TIG) yang masih berlaku.',
            'Mampu berkomunikasi dalam Bahasa Inggris dasar (pasif/aktif).',
            'Sehat jasmani dan rohani (tahan bekerja di cuaca panas).',
            'Siap ditempatkan di Dubai dengan kontrak 2 tahun.'
        ],
        benefits: [
            { icon: 'flight', text: 'Tiket Pesawat PP (Awal & Akhir Kontrak)' },
            { icon: 'apartment', text: 'Akomodasi Tempat Tinggal' },
            { icon: 'restaurant', text: 'Makan 3x Sehari / Tunjangan Makan' },
            { icon: 'medical_services', text: 'Asuransi Kesehatan & Jiwa' },
            { icon: 'event', text: 'Cuti Tahunan 30 Hari (Berbayar)' },
            { icon: 'workspace_premium', text: 'Bonus Kinerja & Lembur' }
        ]
    };

    const breadcrumbs = [
        { label: 'Lowongan', href: '/jobs' },
        { label: job.title, href: null }
    ];

    return (
        <>
            <Navbar />
            <main className="bg-background-light dark:bg-background-dark min-h-screen pb-20 pt-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-6">
                        <Breadcrumbs items={breadcrumbs} />
                    </div>

                    <JobDetailHeader job={job} />

                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                            <JobContent description={job.description} requirements={job.requirements} />
                            <div className="h-px bg-slate-200 dark:bg-slate-800 my-8"></div>
                            <JobBenefits benefits={job.benefits} />
                            <div className="h-px bg-slate-200 dark:bg-slate-800 my-8"></div>
                            {/* Location / Map Section */}
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                    <span className="material-icons text-primary">place</span>
                                    Lokasi Penempatan
                                </h3>
                                <MapPreview location={job.location} />
                            </div>
                        </div>

                        <aside className="lg:col-span-1">
                            <JobSidebar jobId={job.id} />
                        </aside>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
