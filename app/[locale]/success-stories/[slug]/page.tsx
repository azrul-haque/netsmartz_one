import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowLeft, FiCalendar, FiTag } from 'react-icons/fi';
import { prisma } from '@/lib/prisma';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const stories = await prisma.successStory.findMany({
    where: { published: true },
    select: { slug: true },
  });

  return stories.map((story) => ({
    slug: story.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const story = await prisma.successStory.findUnique({
    where: { slug },
  });

  if (!story) {
    return {
      title: 'Success Story Not Found',
    };
  }

  return {
    title: `${story.title} | Success Stories - Netsmartz`,
    description: story.excerpt || `Read about ${story.title}`,
  };
}

export default async function SuccessStoryPage({ params }: PageProps) {
  const { slug } = await params;
  
  const story = await prisma.successStory.findUnique({
    where: { slug },
  });

  if (!story || !story.published) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-gradient-to-br from-gray-900 to-gray-800">
        <Image
          src={story.image}
          alt={story.title}
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl h-full flex flex-col justify-end pb-16">
          {/* Breadcrumb */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 font-medium transition-colors"
          >
            <FiArrowLeft /> Back to Home
          </Link>

          {/* Category Badge */}
          {story.category && (
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#fe7725] text-white rounded-full text-sm font-semibold">
                <FiTag className="text-xs" />
                {story.category}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            {story.title}
          </h1>

          {/* Metadata */}
          <div className="flex items-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <FiCalendar className="text-sm" />
              <span className="text-sm">
                {new Date(story.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-16">
        {/* Excerpt */}
        {story.excerpt && (
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-l-4 border-[#fe7725] p-8 rounded-r-lg mb-12">
            <p className="text-xl text-gray-700 leading-relaxed italic">
              {story.excerpt}
            </p>
          </div>
        )}

        {/* Main Content */}
        <div 
          className="prose prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-gray-900
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
            prose-ul:my-6 prose-li:text-gray-700 prose-li:my-2
            prose-strong:text-gray-900 prose-strong:font-semibold
            prose-a:text-[#fe7725] prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: story.content }}
        />

        {/* CTA Section */}
        <div className="mt-16 p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve remarkable outcomes with cutting-edge technology solutions.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#fe7725] to-[#ff9555] text-white rounded-lg font-semibold text-lg hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
}
