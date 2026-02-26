-- CreateEnum
CREATE TYPE "VaccineCategory" AS ENUM ('GOVERNMENT', 'PRIVATE');

-- CreateTable
CREATE TABLE "vaccinations" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "dose_label" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "age_weeks" INTEGER,
    "age_months" INTEGER NOT NULL,
    "age_label" TEXT NOT NULL,
    "category" "VaccineCategory" NOT NULL,
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "vaccinations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "child_vaccinations" (
    "id" TEXT NOT NULL,
    "child_id" TEXT NOT NULL,
    "vaccination_id" TEXT NOT NULL,
    "is_administered" BOOLEAN NOT NULL DEFAULT false,
    "administered_date" TIMESTAMP(3),
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "child_vaccinations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "vaccinations_category_idx" ON "vaccinations"("category");

-- CreateIndex
CREATE INDEX "vaccinations_age_months_idx" ON "vaccinations"("age_months");

-- CreateIndex
CREATE INDEX "vaccinations_sort_order_idx" ON "vaccinations"("sort_order");

-- CreateIndex
CREATE INDEX "child_vaccinations_child_id_idx" ON "child_vaccinations"("child_id");

-- CreateIndex
CREATE INDEX "child_vaccinations_vaccination_id_idx" ON "child_vaccinations"("vaccination_id");

-- CreateIndex
CREATE UNIQUE INDEX "child_vaccinations_child_id_vaccination_id_key" ON "child_vaccinations"("child_id", "vaccination_id");

-- AddForeignKey
ALTER TABLE "child_vaccinations" ADD CONSTRAINT "child_vaccinations_child_id_fkey" FOREIGN KEY ("child_id") REFERENCES "children"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "child_vaccinations" ADD CONSTRAINT "child_vaccinations_vaccination_id_fkey" FOREIGN KEY ("vaccination_id") REFERENCES "vaccinations"("id") ON DELETE CASCADE ON UPDATE CASCADE;
