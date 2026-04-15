import HeroSection from '../components/home/HeroSection';
import HowItWorks from '../components/home/HowItWorks';
import FeaturedInstruments from '../components/home/FeaturedInstruments';
import WhyLearnMusic from '../components/home/WhyLearnMusic';
import Testimonials from '../components/home/Testimonials';

export default function HomePage({ instruments, stats }) {
  return (
    <>
      <HeroSection stats={stats} />
      <HowItWorks />
      <FeaturedInstruments instruments={instruments} />
      <WhyLearnMusic />
      <Testimonials />
    </>
  );
}
