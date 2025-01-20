-- CreateTable
CREATE TABLE "Patients" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "diseases" TEXT NOT NULL,
    "allergies" TEXT NOT NULL,
    "room_number" TEXT NOT NULL,
    "bed_number" TEXT NOT NULL,
    "floor_number" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "contact_information" TEXT NOT NULL,

    CONSTRAINT "Patients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Patient_Diet" (
    "id" SERIAL NOT NULL,
    "morning_meal" TEXT NOT NULL,
    "evening_meal" TEXT NOT NULL,
    "night_meal" TEXT NOT NULL,
    "specify" TEXT NOT NULL,
    "specific" TEXT NOT NULL,
    "patientId" INTEGER NOT NULL,

    CONSTRAINT "Patient_Diet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Patients_username_key" ON "Patients"("username");

-- AddForeignKey
ALTER TABLE "Patient_Diet" ADD CONSTRAINT "Patient_Diet_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
