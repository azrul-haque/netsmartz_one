# Netsmartz Website

Modern, scalable enterprise website built with Next.js 15, TypeScript, Tailwind CSS, and Prisma ORM.

## 🚀 Features

- ✅ **Next.js 15** with App Router
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS** for modern styling
- ✅ **Prisma ORM** for database management
- ✅ **Multilingual Support** (English & Arabic with RTL)
- ✅ **SMTP Email Integration** (Office 365 ready)
- ✅ **Responsive Design** (Mobile-first approach)
- ✅ **SEO Optimized** with meta tags
- ✅ **Performance Optimized** (Target: PageSpeed Grade A)
- ✅ **Contact Form** with database storage & email notifications
- ✅ **CRM Integration Ready** (HubSpot & Dynamics CRM placeholders)

## 📁 Project Structure

```
/app
├── app/                      # Next.js App Router
│   ├── [locale]/            # Locale-based routing
│   │   ├── layout.tsx       # Root layout with i18n
│   │   ├── page.tsx         # Homepage
│   │   └── globals.css      # Global styles
│   └── api/                 # API routes
│       ├── contact/         # Contact form endpoint
│       ├── blogs/           # Blog posts endpoint
│       └── case-studies/    # Case studies endpoint
├── components/              # React components
│   ├── layout/             # Layout components (Header, Footer, MegaMenu)
│   ├── sections/           # Page sections (Hero, Stats, Services, etc.)
│   └── ui/                 # Reusable UI components
├── i18n/                   # Internationalization
│   ├── routing.ts          # Routing config
│   └── request.ts          # Request config
├── lib/                    # Utilities
│   ├── prisma.ts           # Prisma client
│   ├── email.ts            # Email service (SMTP)
│   └── utils.ts            # Helper functions
├── messages/               # Translation files
│   ├── en.json             # English translations
│   └── ar.json             # Arabic translations
├── prisma/                 # Database
│   └── schema.prisma       # Database schema
└── public/                 # Static assets

```

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
yarn install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
# Database (Currently using SQLite for development)
# For production, replace with PostgreSQL:
# DATABASE_URL="postgresql://user:password@localhost:5432/netsmartz_db?schema=public"
DATABASE_URL="file:./dev.db"

# SMTP Configuration (Microsoft Office 365)
SMTP_HOST="smtp.office365.com"
SMTP_PORT="587"
SMTP_SECURE="false"
SMTP_USER="your-email@yourdomain.com"          # ⚠️ ADD YOUR EMAIL
SMTP_PASSWORD="your-app-password"              # ⚠️ ADD YOUR APP PASSWORD
SMTP_FROM_NAME="Netsmartz"
SMTP_FROM_EMAIL="your-email@yourdomain.com"   # ⚠️ ADD YOUR EMAIL

# CRM Integrations (Future Use - Keep Disabled)
HUBSPOT_ENABLED="false"
HUBSPOT_API_KEY=""
HUBSPOT_PORTAL_ID=""

DYNAMICS_ENABLED="false"
DYNAMICS_API_URL=""
DYNAMICS_CLIENT_ID=""
DYNAMICS_CLIENT_SECRET=""

# App Configuration
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 3. Setup Database

```bash
# Generate Prisma client
npx prisma generate

# Run migrations (creates database tables)
npx prisma migrate dev --name init

# Open Prisma Studio to view/manage database (optional)
npx prisma studio
```

### 4. Run Development Server

```bash
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 🔐 SMTP Configuration (Microsoft Office 365)

### How to get Office 365 App Password:

1. Go to [Microsoft Account Security](https://account.microsoft.com/security)
2. Sign in with your Office 365 account
3. Navigate to "Advanced security options"
4. Under "App passwords", click "Create a new app password"
5. Copy the generated password
6. Add it to your `.env` file as `SMTP_PASSWORD`

**Note:** Email functionality requires valid SMTP credentials. The contact form will save submissions to the database even if email sending fails.

## 🗄️ Database Schema

### Blog Posts
- title, slug, content, excerpt, image, author, date, tags, published

### Case Studies
- title, slug, description, industry, image, content, metrics, published

### Form Submissions
- name, email, phone, company, message, service, createdAt

## 🌍 Internationalization (i18n)

Supported Languages:
- **English (en)** - Default
- **Arabic (ar)** - with RTL support

Access different languages:
- English: http://localhost:3000/en
- Arabic: http://localhost:3000/ar

Add new translations in `/messages/{locale}.json`

## 🎨 Design System

### Colors
- **Primary:** Purple gradient (#667eea → #764ba2)
- **Background:** White
- **Text:** Gray scale

### Typography
- Font Family: Inter (system fallback)
- Smooth animations and transitions
- Enterprise-grade professional feel

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🚀 Deployment

### Production Checklist

1. ✅ Replace SQLite with PostgreSQL
2. ✅ Add SMTP credentials
3. ✅ Update `NEXT_PUBLIC_APP_URL` in `.env`
4. ✅ Add real images to `/public/assets/`
5. ✅ Test contact form email delivery
6. ✅ Run SEO audit
7. ✅ Run performance audit (target: PageSpeed Grade A)

### Build for Production

```bash
yarn build
yarn start
```

## 📊 Performance Optimization

- ✅ Next/Image for optimized images
- ✅ Lazy loading for sections
- ✅ Minimized bundle size
- ✅ WebP image format support
- ✅ Font optimization

## 🔒 Security

- Environment variables for sensitive data
- CSRF protection (built-in Next.js)
- SQL injection prevention (Prisma ORM)
- Input validation on forms

## 📄 License

© 2025 Netsmartz. All rights reserved.

## 🤝 Support

For questions or issues, please contact: info@netsmartz.com

---

**Built with ❤️ using Next.js 15, TypeScript, and Tailwind CSS**
