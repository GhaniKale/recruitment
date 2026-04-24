import Navbar from '../components/Navbar';
import SuccessCard from '../components/SuccessCard';
import Footer from '../components/Footer';

export default function Success() {
    return (
        <>
            <Navbar />
            <main className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center py-20">
                <SuccessCard />
            </main>
            <Footer />
        </>
    );
}
