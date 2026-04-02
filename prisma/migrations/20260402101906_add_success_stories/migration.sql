-- CreateTable
CREATE TABLE "SuccessStory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "category" TEXT,
    "image" TEXT NOT NULL,
    "excerpt" TEXT,
    "content" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "SuccessStory_slug_key" ON "SuccessStory"("slug");

-- CreateIndex
CREATE INDEX "SuccessStory_slug_idx" ON "SuccessStory"("slug");

-- CreateIndex
CREATE INDEX "SuccessStory_published_createdAt_idx" ON "SuccessStory"("published", "createdAt");
