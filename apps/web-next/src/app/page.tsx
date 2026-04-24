import Navbar from '@/components/Navbar';
import HomeHero from '@/components/HomeHero';
import Stats from '@/components/Stats';
// import About from '@/components/About'; // Was in original but I should check if it exists or if I need to migrate it
// import Industries from '@/components/Industries';
import HomeCTA from '@/components/HomeCTA';
import Footer from '@/components/Footer';
import AntiFraudModal from '@/components/AntiFraudModal';
// Checking original imports:
// import Navbar from '../components/Navbar';
// import HomeHero from '../components/HomeHero';
// import Stats from '../components/Stats';
// import About from '../components/About';
// import Industries from '../components/Industries';
// import HomeCTA from '../components/HomeCTA';
// import Footer from '../components/Footer';
// import AntiFraudModal from '../components/AntiFraudModal';
import About from '@/components/About'; /* verify these exist */
import Industries from '@/components/Industries';

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
