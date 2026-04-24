import Navbar from '../components/Navbar';
import JobsHero from '../components/JobsHero';
import JobFilter from '../components/JobFilter';
import JobCard from '../components/JobCard';
import Pagination from '../components/Pagination';
import Footer from '../components/Footer';

export default function JobsIndex() {
    // Mock Data
    const jobs = [
        { id: 1, title: 'Senior Welder (MIG/TIG)', category: 'Construction', type: 'Full Time', location: 'Dubai, UAE', salary: 'AED 3,500 - 5,000', description: 'Dicari Welder berpengalaman minimal 5 tahun dengan sertifikasi MIG/TIG untuk proyek konstruksi lepas pantai.' },
        { id: 2, title: 'Nurse / Caregiver', category: 'Healthcare', type: 'Contract', location: 'Tokyo, Japan', salary: '¥ 180,000 - 250,000', description: 'Peluang karir bagi perawat lulusan D3/S1 Keperawatan untuk bekerja di fasilitas kesehatan lansia di Jepang. Pelatihan bahasa disediakan.' },
        { id: 3, title: 'Excavator Operator', category: 'Construction', type: 'Full Time', location: 'Riyadh, Saudi Arabia', salary: 'SAR 2,500 - 3,500', description: 'Operator alat berat berpengalaman untuk proyek pembangunan infrastruktur kota baru di Riyadh.' },
        { id: 4, title: 'Restaurant Manager', category: 'Hospitality', type: 'Full Time', location: 'Doha, Qatar', salary: 'QAR 4,000 - 6,000', description: 'Memimpin operasional restoran bintang 5 di Doha. Wajib fasih berbahasa Inggris dan memiliki pengalaman manajerial.' },
        { id: 5, title: 'Factory Worker (Electronics)', category: 'Manufaktur', type: 'Contract', location: 'Incheon, South Korea', salary: '₩ 2,100,000', description: 'Pekerja pabrik perakitan elektronik. Tidak butuh pengalaman khusus, fisik sehat dan siap bekerja shift.' },
        { id: 6, title: 'Electrical Technician', category: 'Technical', type: 'Full Time', location: 'Abu Dhabi, UAE', salary: 'AED 2,500 - 3,500', description: 'Teknisi listrik untuk maintenance gedung komersial. Memahami diagram kelistrikan dan troubleshooting.' },
    ];

    return (
        <>
            <Navbar />
            <main className="bg-background-light dark:bg-background-dark min-h-screen pb-20">
                <JobsHero />
                <JobFilter />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Lowongan Terbaru</h2>
                        <span className="text-sm text-slate-500 dark:text-slate-400">Menampilkan {jobs.length} lowongan</span>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {jobs.map(job => (
                            <JobCard key={job.id} job={job} />
                        ))}
                    </div>

                    <Pagination />
                </div>
            </main>
            <Footer />
        </>
    );
}
