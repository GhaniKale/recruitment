import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Breadcrumbs from '../components/Breadcrumbs';
import FormHeader from '../components/FormHeader';
import ApplicationForm from '../components/ApplicationForm';
import Footer from '../components/Footer';

export default function ApplyForm() {
    const { id } = useParams();

    // Mock Job Title fetch
    const jobTitle = "Senior Welder (MIG/TIG) for Offshore Project";

    const breadcrumbs = [
        { label: 'Lowongan', href: '/jobs' },
        { label: jobTitle, href: `/jobs/${id}` },
        { label: 'Formulir Lamaran', href: null }
    ];

    return (
        <>
            <Navbar />
            <main className="bg-background-light dark:bg-background-dark min-h-screen pb-20">
                <FormHeader
                    title="Formulir Lamaran Kerja"
                    subtitle="Lengkapi data diri Anda dengan benar untuk melanjutkan proses seleksi."
                />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
                    <div className="mb-6">
                        <Breadcrumbs items={breadcrumbs} />
                    </div>
                    <ApplicationForm jobTitle={jobTitle} />
                </div>
            </main>
            <Footer />
        </>
    );
}
