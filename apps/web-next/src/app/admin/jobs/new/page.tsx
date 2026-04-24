import JobForm from '@/components/admin/JobForm';

export default function NewJobPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Tambah Lowongan Baru</h1>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Isi formulir di bawah ini untuk membuat lowongan pekerjaan baru yang akan ditampilkan kepada calon kandidat.</p>
            </div>
            <JobForm />
        </div>
    );
}
