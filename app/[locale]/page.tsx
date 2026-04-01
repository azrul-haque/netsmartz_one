import HeroSlider from '@/components/sections/HeroSlider';
import AIStorySection from '@/components/sections/AIStorySection';
import StatsSection from '@/components/sections/StatsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AIStorySection />
      <StatsSection />
      <ServicesSection />
      <WhyUsSection />
      <ContactSection />
    </>
  );
}