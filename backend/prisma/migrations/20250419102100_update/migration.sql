/*
  Warnings:

  - You are about to drop the column `userId` on the `Patients` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Patients" DROP CONSTRAINT "Patients_userId_fkey";

-- AlterTable
ALTER TABLE "Patients" DROP COLUMN "userId";
