import HeroSlider from '@/components/sections/HeroSlider';
import AIStorySection from '@/components/sections/AIStorySection';
import StatsSection from '@/components/sections/StatsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import ContactSection from '@/components/sections/ContactSection';
import SuccessStoriesSection from '@/components/sections/SuccessStoriesSection';
import { prisma } from '@/lib/prisma';

export default async function Home() {
  // Fetch latest 6 published success stories
  const successStories = await prisma.successStory.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
    take: 6,
    select: {
      id: true,
      title: true,
      slug: true,
      category: true,
      image: true,
      excerpt: true,
    },
  });

  return (
    <>
      <HeroSlider />
      <AIStorySection />
      <ServicesSection />
      <StatsSection />
      <SuccessStoriesSection stories={successStories} />
      <WhyUsSection />
      <ContactSection />
    </>
  );
}