-- DropForeignKey
ALTER TABLE "Patient_Diet" DROP CONSTRAINT "Patient_Diet_patientId_fkey";

-- AddForeignKey
ALTER TABLE "Patient_Diet" ADD CONSTRAINT "Patient_Diet_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patients"("id") ON DELETE CASCADE ON UPDATE CASCADE;
