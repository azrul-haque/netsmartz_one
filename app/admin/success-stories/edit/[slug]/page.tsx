import StoryForm from '@/components/admin/StoryForm';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function EditStoryPage({ params }: PageProps) {
  const { slug } = await params;
  return <StoryForm slug={slug} />;
}
