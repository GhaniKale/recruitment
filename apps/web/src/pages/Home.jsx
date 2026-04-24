import Navbar from '../components/Navbar';
import HomeHero from '../components/HomeHero';
import Stats from '../components/Stats';
import About from '../components/About';
import Industries from '../components/Industries';
import HomeCTA from '../components/HomeCTA';
import Footer from '../components/Footer';
import AntiFraudModal from '../components/AntiFraudModal';

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <HomeHero />
                <Stats />
                <About />
                <Industries />
                <HomeCTA />
            </main>
            <Footer />
            <AntiFraudModal />
        </>
    );
}
