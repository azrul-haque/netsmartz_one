export interface CaseStudy {
  id: string;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  industry: string;
  location: string;
  featured?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'netsmartz-ai-pods-case-study-advisory',
    category: 'AI Pod - Advisory',
    title: 'How a Fractional CTO Scaled AI Execution in Manufacturing Without Hiring',
    excerpt: 'Learn how a fractional CTO partnered with Netsmartz to move a manufacturing client from hiring paralysis to production-ready AI—using the AI Pod model to protect his reputation and unlock recurring revenue.',
    thumbnail: '/images/case-studies/advisory-thumb.jpg',
    industry: 'Manufacturing',
    location: 'USA',
    featured: true
  },
  {
    id: '2',
    slug: 'netsmartz-ai-pods-case-study-staffing',
    category: 'AI Pod - Staffing',
    title: 'How an IT Staffing Firm Closed 3 AI Pods in 60 Days with Netsmartz',
    excerpt: 'Discover how a Denver IT staffing firm partnered with Netsmartz to deliver AI for their SaaS client—using a new model that turned a stalled project into a $18k/month savings and three new revenue streams.',
    thumbnail: '/images/case-studies/staffing-thumb.jpg',
    industry: 'IT Staffing / SaaS',
    location: 'Denver, North America',
    featured: true
  }
];