import HeroSlider from '@/components/sections/HeroSlider';
import AIStorySection from '@/components/sections/AIStorySection';
import StatsSection from '@/components/sections/StatsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import ContactSection from '@/components/sections/ContactSection';
import SuccessStoriesSection from '@/components/sections/SuccessStoriesSection';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AIStorySection />
      <ServicesSection />
      <StatsSection />
      <SuccessStoriesSection />
      <WhyUsSection />
      <ContactSection />
    </>
  );
}