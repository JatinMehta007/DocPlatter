/*
  Warnings:

  - You are about to drop the column `specific` on the `Patient_Diet` table. All the data in the column will be lost.
  - You are about to drop the column `specify` on the `Patient_Diet` table. All the data in the column will be lost.
  - Added the required column `ingredients` to the `Patient_Diet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `instruction` to the `Patient_Diet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Patient_Diet" DROP COLUMN "specific",
DROP COLUMN "specify",
ADD COLUMN     "ingredients" TEXT NOT NULL,
ADD COLUMN     "instruction" TEXT NOT NULL;
