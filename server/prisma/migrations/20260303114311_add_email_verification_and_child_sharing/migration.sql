-- CreateEnum
CREATE TYPE "TokenType" AS ENUM ('EMAIL_VERIFY', 'PASSWORD_RESET');

-- CreateEnum
CREATE TYPE "ChildAccessRole" AS ENUM ('VIEWER', 'CONTRIBUTOR');

-- CreateEnum
CREATE TYPE "InviteStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REVOKED');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "verified_at" TIMESTAMP(3);

-- Backfill: mark all pre-existing users as verified so they aren't locked out
-- (new users registered after this migration will need to verify via email)
UPDATE "users" SET "email_verified" = true, "verified_at" = NOW() WHERE "email_verified" = false;

-- CreateTable
CREATE TABLE "verification_tokens" (
    "id" TEXT NOT NULL,
    "token_hash" TEXT NOT NULL,
    "type" "TokenType" NOT NULL,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "used_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "verification_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "child_accesses" (
    "id" TEXT NOT NULL,
    "role" "ChildAccessRole" NOT NULL DEFAULT 'VIEWER',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,
    "child_id" TEXT NOT NULL,

    CONSTRAINT "child_accesses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "child_invites" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "ChildAccessRole" NOT NULL DEFAULT 'VIEWER',
    "status" "InviteStatus" NOT NULL DEFAULT 'PENDING',
    "token" TEXT NOT NULL,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "accepted_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "child_id" TEXT NOT NULL,
    "invited_by_id" TEXT NOT NULL,

    CONSTRAINT "child_invites_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "verification_tokens_token_hash_idx" ON "verification_tokens"("token_hash");

-- CreateIndex
CREATE INDEX "verification_tokens_user_id_type_idx" ON "verification_tokens"("user_id", "type");

-- CreateIndex
CREATE INDEX "child_accesses_user_id_idx" ON "child_accesses"("user_id");

-- CreateIndex
CREATE INDEX "child_accesses_child_id_idx" ON "child_accesses"("child_id");

-- CreateIndex
CREATE UNIQUE INDEX "child_accesses_user_id_child_id_key" ON "child_accesses"("user_id", "child_id");

-- CreateIndex
CREATE UNIQUE INDEX "child_invites_token_key" ON "child_invites"("token");

-- CreateIndex
CREATE INDEX "child_invites_token_idx" ON "child_invites"("token");

-- CreateIndex
CREATE INDEX "child_invites_email_idx" ON "child_invites"("email");

-- CreateIndex
CREATE UNIQUE INDEX "child_invites_email_child_id_key" ON "child_invites"("email", "child_id");

-- AddForeignKey
ALTER TABLE "verification_tokens" ADD CONSTRAINT "verification_tokens_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "child_accesses" ADD CONSTRAINT "child_accesses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "child_accesses" ADD CONSTRAINT "child_accesses_child_id_fkey" FOREIGN KEY ("child_id") REFERENCES "children"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "child_invites" ADD CONSTRAINT "child_invites_child_id_fkey" FOREIGN KEY ("child_id") REFERENCES "children"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "child_invites" ADD CONSTRAINT "child_invites_invited_by_id_fkey" FOREIGN KEY ("invited_by_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
