import Navbar from '@/components/Navbar';
import SuccessCard from '@/components/SuccessCard';
import Footer from '@/components/Footer';

export default function SuccessPage() {
    return (
        <>
            <Navbar />
            <main className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center pb-20 pt-20">
                <SuccessCard />
            </main>
            <Footer />
        </>
    );
}
