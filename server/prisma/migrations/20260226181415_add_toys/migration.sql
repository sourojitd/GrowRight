-- CreateTable
CREATE TABLE "toys" (
    "id" TEXT NOT NULL,
    "category" "MilestoneCategory" NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "min_age_months" INTEGER NOT NULL,
    "max_age_months" INTEGER NOT NULL,
    "suggested_activities" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "materials" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "image_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "toys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "child_toys" (
    "id" TEXT NOT NULL,
    "child_id" TEXT NOT NULL,
    "toy_id" TEXT NOT NULL,
    "saved_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notes" TEXT,

    CONSTRAINT "child_toys_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "toys_category_idx" ON "toys"("category");

-- CreateIndex
CREATE INDEX "toys_min_age_months_max_age_months_idx" ON "toys"("min_age_months", "max_age_months");

-- CreateIndex
CREATE INDEX "child_toys_child_id_idx" ON "child_toys"("child_id");

-- CreateIndex
CREATE INDEX "child_toys_toy_id_idx" ON "child_toys"("toy_id");

-- CreateIndex
CREATE UNIQUE INDEX "child_toys_child_id_toy_id_key" ON "child_toys"("child_id", "toy_id");

-- AddForeignKey
ALTER TABLE "child_toys" ADD CONSTRAINT "child_toys_child_id_fkey" FOREIGN KEY ("child_id") REFERENCES "children"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "child_toys" ADD CONSTRAINT "child_toys_toy_id_fkey" FOREIGN KEY ("toy_id") REFERENCES "toys"("id") ON DELETE CASCADE ON UPDATE CASCADE;
