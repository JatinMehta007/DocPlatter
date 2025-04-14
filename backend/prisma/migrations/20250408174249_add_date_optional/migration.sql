-- AlterTable
ALTER TABLE "Patient_Diet" ADD COLUMN     "date" TIMESTAMP(3),
ALTER COLUMN "ingredients" DROP NOT NULL;
