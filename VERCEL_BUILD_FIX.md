# CRITICAL: Fix for Vercel "Failed to collect page data for /api/blogs" Error

## The Problem
Vercel build fails with:
```
Error: Failed to collect page data for /api/blogs
```

## The Solution

### Step 1: Add Build-Time Environment Variable in Vercel

**THIS IS CRITICAL** - You need to add a DATABASE_URL specifically for the build environment:

1. Go to your Vercel project → Settings → Environment Variables
2. Add a new variable:
   - **Key**: `DATABASE_URL`
   - **Value**: `postgresql://dummy:dummy@localhost:5432/dummy?schema=public`
   - **Environments**: Check ONLY **Preview** and **Development** (NOT Production)

3. Add another DATABASE_URL for production:
   - **Key**: `DATABASE_URL`  
   - **Value**: Your actual production database URL
   - **Environments**: Check ONLY **Production**

### Why This Works
- API routes are being checked during build time
- They need a valid DATABASE_URL format to pass validation
- The dummy URL satisfies the format requirement
- At runtime, the real production DATABASE_URL is used

### Step 2: Verify vercel.json Configuration

Ensure your `/app/vercel.json` has:
```json
{
  "build": {
    "env": {
      "DATABASE_URL": "postgresql://dummy:dummy@localhost:5432/dummy?schema=public"
    }
  }
}
```

### Step 3: Redeploy

After adding the environment variables:
1. Trigger a new deployment (push to GitHub or use `vercel --prod`)
2. The build should now succeed

## Alternative Solution (If Above Doesn't Work)

If the error persists, temporarily remove the API routes:

1. Create `/app/app/api/.gitkeep` file
2. Move API route files outside the app directory temporarily:
   ```bash
   mkdir /tmp/api-backup
   mv app/api/* /tmp/api-backup/
   ```
3. Deploy successfully
4. Move files back and redeploy
5. This time build should work because Prisma is already generated

## Verification

After successful deployment, test:
```bash
curl https://your-domain.vercel.app/api/blogs
```

Should return:
```json
{
  "blogs": [],
  "total": 0,
  "limit": 10,
  "offset": 0
}
```

## Root Cause Explained

The issue occurs because:
1. Next.js 16 tries to validate all routes during build
2. API routes use Prisma
3. Prisma needs DATABASE_URL even just to load
4. Without DATABASE_URL, the import fails
5. Our fix: Routes now check for DATABASE_URL and return empty data if missing
6. This allows build to complete, while runtime works with real database

## Files Modified to Fix This

1. `/app/app/api/blogs/route.ts` - Checks DATABASE_URL before using Prisma
2. `/app/app/api/case-studies/route.ts` - Same check
3. `/app/app/api/contact/route.ts` - Same check
4. `/app/lib/prisma.ts` - Returns null during build phase
5. `/app/vercel.json` - Provides dummy DATABASE_URL for build

## Important Notes

- The dummy DATABASE_URL is ONLY for build time
- Production runtime uses your real database
- No data is ever sent to the dummy database
- This is a workaround for Next.js build validation
