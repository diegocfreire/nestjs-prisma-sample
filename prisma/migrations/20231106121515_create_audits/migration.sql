-- CreateEnum
CREATE TYPE "Operation" AS ENUM ('INSERT', 'UPDATE', 'DELETE');

-- CreateTable
CREATE TABLE "audits" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "table" VARCHAR NOT NULL,
    "operation" "Operation" NOT NULL,
    "description" VARCHAR,
    "data_before" JSONB,
    "data_after" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "audits_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "audits" ADD CONSTRAINT "audits_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
