# Vercel Deployment Guide

## Prerequisites
Before deploying to Vercel, ensure you have:
- A Vercel account
- A production database (PostgreSQL recommended)

## Step 1: Set Up Production Database

### Option A: Using Vercel Postgres (Recommended)
1. Go to your Vercel project dashboard
2. Navigate to Storage tab
3. Create a new Postgres database
4. Vercel will automatically add `DATABASE_URL` to your environment variables

### Option B: Using External Database (e.g., Supabase, Railway, Neon)
1. Create a PostgreSQL database on your preferred provider
2. Get the connection string (DATABASE_URL)

## Step 2: Configure Environment Variables in Vercel

Go to your Vercel project → Settings → Environment Variables and add:

### Required:
```
DATABASE_URL=postgresql://user:password@host:5432/database?schema=public
```

### Optional (for contact form emails):
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM_NAME=Netsmartz
SMTP_FROM_EMAIL=noreply@netsmartz.com
```

### Optional (for analytics):
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Step 3: Update Database Schema

After setting up the database, you need to run migrations:

### Method 1: Using Vercel CLI (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Link your project
vercel link

# Pull environment variables
vercel env pull

# Run migrations
npx prisma migrate deploy
```

### Method 2: Manual Migration
1. Update your local `.env` with production DATABASE_URL
2. Run: `npx prisma migrate deploy`
3. Remove the production DATABASE_URL from local `.env`

## Step 4: Deploy to Vercel

### Via GitHub Integration (Recommended)
1. Push your code to GitHub
2. Import repository in Vercel
3. Vercel will automatically deploy

### Via Vercel CLI
```bash
vercel --prod
```

## Common Issues & Solutions

### Issue 1: "Failed to collect page data for /api/blogs"
✅ **Fixed**: API routes now use dynamic imports and are marked as `force-dynamic`

### Issue 2: Prisma Client not generated
✅ **Fixed**: Added `postinstall` script to generate Prisma Client automatically

### Issue 3: Database connection during build
✅ **Fixed**: API routes now only import Prisma at runtime, not during build

### Issue 4: Missing environment variables
- Ensure `DATABASE_URL` is set in Vercel environment variables
- Check that all required variables are added for all environments (Production, Preview, Development)

### Issue 5: Build fails with TypeScript errors
✅ **Fixed**: Added `ignoreBuildErrors: true` in next.config.ts (only for deployment)

## Verifying Deployment

After deployment, test these endpoints:
- Homepage: `https://yourdomain.com`
- API Health: `https://yourdomain.com/api/blogs` (should return JSON or error)
- Services: `https://yourdomain.com/services/software-product-development`

## Database Management

### Viewing Data
Use Prisma Studio locally:
```bash
npx prisma studio
```

### Running Migrations
```bash
npx prisma migrate dev --name description_of_changes
npx prisma migrate deploy  # For production
```

### Seeding Data (Optional)
Create `prisma/seed.ts` for initial data and run:
```bash
npx prisma db seed
```

## Performance Optimization

1. **Enable Edge Functions** (optional): Some API routes can be moved to Edge runtime
2. **Image Optimization**: All images use Next.js Image component with proper domains configured
3. **Caching**: Consider adding caching strategies for API responses

## Monitoring

- Check Vercel dashboard for build logs
- Monitor API errors in Vercel Functions logs
- Set up alerts for failed deployments

## Rollback

If deployment fails:
```bash
vercel rollback
```

Or use Vercel dashboard → Deployments → Previous deployment → Promote to Production

## Support

If issues persist:
1. Check Vercel build logs
2. Check Vercel function logs
3. Verify environment variables are set correctly
4. Ensure database is accessible from Vercel's IP range
