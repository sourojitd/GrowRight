-- Make passwordHash nullable (OAuth users have no password)
ALTER TABLE "users" ALTER COLUMN "password_hash" DROP NOT NULL;

-- Add Google and GitHub OAuth ID columns
ALTER TABLE "users" ADD COLUMN "google_id" TEXT;
ALTER TABLE "users" ADD COLUMN "github_id" TEXT;

-- Add unique constraints
CREATE UNIQUE INDEX "users_google_id_key" ON "users"("google_id");
CREATE UNIQUE INDEX "users_github_id_key" ON "users"("github_id");
