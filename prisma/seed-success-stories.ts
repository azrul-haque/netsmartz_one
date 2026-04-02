import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const successStories = [
  {
    title: "Strategic BOT Transformation for a Leading Australian Bank",
    category: "GCCs",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    excerpt: "Discover how we helped transform operations and deliver remarkable outcomes through cutting-edge AI solutions.",
    content: `<div class="prose">
      <h2>Challenge</h2>
      <p>A leading Australian bank needed to transform their legacy systems and processes to meet modern banking demands while maintaining security and compliance.</p>
      
      <h2>Solution</h2>
      <p>We implemented a comprehensive Build-Operate-Transfer (BOT) model that enabled seamless digital transformation across their operations. Our AI-powered solutions automated critical processes while maintaining the highest security standards.</p>
      
      <h2>Results</h2>
      <ul>
        <li>40% reduction in operational costs</li>
        <li>60% improvement in processing time</li>
        <li>98% customer satisfaction rate</li>
        <li>Zero security incidents post-implementation</li>
      </ul>
      
      <h2>Technologies Used</h2>
      <p>AI/ML, Cloud Infrastructure, DevOps, Cybersecurity, Data Analytics</p>
    </div>`
  },
  {
    title: "Pioneering New Capabilities in a $6Bn PEO Firm's Operations",
    category: "GCCs",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    excerpt: "Revolutionizing HR operations through AI-powered automation and intelligent workforce management systems.",
    content: `<div class="prose">
      <h2>Challenge</h2>
      <p>A $6 billion Professional Employer Organization (PEO) needed to scale operations while managing complex payroll, benefits, and compliance requirements for thousands of clients.</p>
      
      <h2>Solution</h2>
      <p>We developed an AI-powered platform that automated payroll processing, benefits administration, and compliance monitoring. The system integrated seamlessly with existing infrastructure.</p>
      
      <h2>Results</h2>
      <ul>
        <li>50% reduction in processing time</li>
        <li>35% cost savings in operations</li>
        <li>99.9% payroll accuracy</li>
        <li>Scaled to support 500+ new clients annually</li>
      </ul>
    </div>`
  },
  {
    title: "AI-Driven Healthcare Transformation for Major Hospital Network",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    excerpt: "Implementing intelligent patient care systems that improve outcomes and reduce operational complexity.",
    content: `<div class="prose">
      <h2>Challenge</h2>
      <p>A major hospital network struggled with fragmented patient data, inefficient scheduling, and rising operational costs.</p>
      
      <h2>Solution</h2>
      <p>We implemented an AI-powered healthcare management platform that unified patient records, optimized scheduling, and provided predictive analytics for better patient outcomes.</p>
      
      <h2>Results</h2>
      <ul>
        <li>30% improvement in patient wait times</li>
        <li>45% reduction in administrative overhead</li>
        <li>25% increase in patient satisfaction scores</li>
        <li>Improved diagnostic accuracy by 35%</li>
      </ul>
    </div>`
  },
  {
    title: "Cloud Migration Success for Global Manufacturing Leader",
    category: "Manufacturing",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    excerpt: "Seamless migration to cloud infrastructure enabling real-time operations and global collaboration.",
    content: `<div class="prose">
      <h2>Challenge</h2>
      <p>A global manufacturing company needed to modernize their infrastructure to support real-time operations across 50+ facilities worldwide.</p>
      
      <h2>Solution</h2>
      <p>We executed a comprehensive cloud migration strategy, moving critical systems to AWS while implementing DevOps practices and real-time monitoring.</p>
      
      <h2>Results</h2>
      <ul>
        <li>99.99% uptime achieved</li>
        <li>50% reduction in infrastructure costs</li>
        <li>Real-time visibility across all facilities</li>
        <li>30% improvement in production efficiency</li>
      </ul>
    </div>`
  },
  {
    title: "Digital Commerce Revolution for Leading Retail Chain",
    category: "Retail",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    excerpt: "Building an omnichannel retail experience that drives engagement and boosts revenue.",
    content: `<div class="prose">
      <h2>Challenge</h2>
      <p>A major retail chain needed to compete in the digital age by creating seamless online and in-store experiences.</p>
      
      <h2>Solution</h2>
      <p>We developed a comprehensive e-commerce platform with AI-powered recommendations, inventory management, and personalized customer experiences.</p>
      
      <h2>Results</h2>
      <ul>
        <li>200% increase in online sales</li>
        <li>40% improvement in customer retention</li>
        <li>Unified inventory across all channels</li>
        <li>Enhanced mobile shopping experience</li>
      </ul>
    </div>`
  },
  {
    title: "Cybersecurity Excellence for Financial Services Provider",
    category: "Financial Services",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
    excerpt: "Implementing enterprise-grade security solutions that protect against evolving cyber threats.",
    content: `<div class="prose">
      <h2>Challenge</h2>
      <p>A financial services provider faced increasing cyber threats and needed to strengthen their security posture while maintaining compliance.</p>
      
      <h2>Solution</h2>
      <p>We implemented a comprehensive cybersecurity framework including SOC-as-a-Service, penetration testing, and AI-powered threat detection.</p>
      
      <h2>Results</h2>
      <ul>
        <li>Zero security breaches post-implementation</li>
        <li>95% reduction in false positive alerts</li>
        <li>24/7 threat monitoring and response</li>
        <li>Full regulatory compliance achieved</li>
      </ul>
    </div>`
  }
];

async function main() {
  console.log('🌱 Seeding success stories...');

  for (const story of successStories) {
    const slug = story.title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');

    await prisma.successStory.upsert({
      where: { slug },
      update: story,
      create: {
        ...story,
        slug,
      },
    });
    console.log(`✓ Created/Updated: ${story.title}`);
  }

  console.log('✅ Seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
