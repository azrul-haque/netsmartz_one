# Database Connection Instructions (बाद में Connect करने के लिए)

## Current Status
✅ Database connections are COMMENTED OUT
✅ Application will deploy successfully on Vercel
✅ API routes return empty/mock data

## When Ready to Connect Database

### Step 1: Uncomment Database Code

**1. `/app/lib/prisma.ts`**
- Remove lines 1-3 (comment header)
- Uncomment lines 5-24 (entire Prisma setup)
- Remove line 27 (mock export)

**2. `/app/app/api/blogs/route.ts`**
- Remove lines 16-22 (temporary return statement)
- Uncomment lines 24-56 (database code block)

**3. `/app/app/api/case-studies/route.ts`**
- Remove lines 17-24 (temporary return statement)
- Uncomment lines 26-60 (database code block)

**4. `/app/app/api/contact/route.ts`**
- Remove lines 19-27 (temporary return statement)
- Uncomment lines 29-59 (database code block)

### Step 2: Update package.json Scripts

```json
"scripts": {
  "dev": "next dev",
  "build": "prisma generate && next build",
  "start": "next start",
  "lint": "eslint",
  "postinstall": "prisma generate"
}
```

### Step 3: Add DATABASE_URL in Vercel

1. Go to Vercel Project → Settings → Environment Variables
2. Add:
   - **Key**: `DATABASE_URL`
   - **Value**: Your PostgreSQL connection string
   - **Environments**: Production, Preview, Development

Example:
```
DATABASE_URL="postgresql://user:password@host:5432/database?schema=public"
```

### Step 4: Run Database Migrations

```bash
# Pull environment variables
vercel env pull

# Run migrations
npx prisma migrate deploy

# (Optional) Seed data
npx prisma db seed
```

### Step 5: Redeploy

```bash
git add .
git commit -m "Enable database connection"
git push
```

Or use Vercel CLI:
```bash
vercel --prod
```

## Database Options

### Option 1: Vercel Postgres (Easiest)
1. Go to Vercel Dashboard → Storage
2. Create Postgres Database
3. DATABASE_URL will be automatically added

### Option 2: Supabase
1. Create project on supabase.com
2. Get connection string from Settings → Database
3. Add to Vercel environment variables

### Option 3: Railway
1. Create project on railway.app
2. Add PostgreSQL service
3. Copy DATABASE_URL
4. Add to Vercel

### Option 4: Neon
1. Create project on neon.tech
2. Copy connection string
3. Add to Vercel

## Testing After Database Connection

```bash
# Test API endpoints
curl https://your-domain.vercel.app/api/blogs
curl https://your-domain.vercel.app/api/case-studies
```

## Files to Modify

When enabling database:
- ✏️ `/app/lib/prisma.ts`
- ✏️ `/app/app/api/blogs/route.ts`
- ✏️ `/app/app/api/case-studies/route.ts`
- ✏️ `/app/app/api/contact/route.ts`
- ✏️ `/app/package.json`

## Important Notes

⚠️ Current Setup:
- Contact form submissions are NOT saved (only logged)
- Blog API returns empty array
- Case studies API returns empty array

✅ After Database Connection:
- All data will be saved properly
- APIs will return real data
- Contact form will work completely

---

**अभी के लिए database की जरूरत नहीं है। Deployment होने के बाद connect करेंगे।**
