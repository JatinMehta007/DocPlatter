import { useState } from "react";
import { Skeleton } from "../components/skeleton/skeleton"; 
import { ShowMealDetails } from "./showMeal"; 
import { useFetchPatientWithMeal } from "../hooks/useFetchPatientWithMeal";
import { DeletePatient } from "../components/skeleton/delete";

export const MealDetails = () => {
  const [addMeal, setAddMeal] = useState(false);
  const [selectedPatientName, setSelectedPatientName] = useState("");
  const { patientsWithMeals, loading } = useFetchPatientWithMeal();

  const handlePatientClick = (patientName) => {
    setSelectedPatientName(patientName);
    setAddMeal(true);
  };

  const handleBack = () => {
    setAddMeal(false);
    setSelectedPatientName("");
  };

  return (
    <div>
      {!addMeal ? (
        <div>
          <p className="text-4xl m-8 text-gray-300 font-semibold">Patient meal Details</p>
          <hr className="border-gray-600" />

          {loading ? (
            <>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </>
          ) : patientsWithMeals.length === 0 ? (
            <p className="text-center text-gray-400 mt-10">No patients with meals found.</p>
          ) : (
            patientsWithMeals.map((patient, index) => {
              console.log("Rendering patient:", patient.patientName, "with ID:", patient.id);

              return (
                <div key={patient.id || index} className="">
                  <div
                    className="grid grid-flow-col mt-9 group cursor-pointer"
                    style={{ gridTemplateColumns: "1% 98%" }}
                  >
                    <div className="group-hover:bg-yellow-600 bg-zinc-800 w-[10px] h-14 pl-0" />
                    <div className="w-full flex flex-row">
                      <div className="pl-10 h-14 w-full uppercase font-bold bg-zinc-800 text-zinc-200 text-sm">
                        <p className="normal-case font-light pb-1 mt-1">Patient Details</p>
                        {patient.patientName}
                      </div>
                      <div onClick={() => handlePatientClick(patient.patientName)}>
                        <p className="ml-10 text-zinc-400 p-2 font-semibold text-sm bg-zinc-800 cursor-pointer hover:text-white">
                          Click here to see the meal
                        </p>
                      </div>
                      <div className="h-14 w-14 ml-5">
                        <DeletePatient id={patient.id} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      ) : (
        <div className="p-4">
          <button
            onClick={handleBack}
            className="mb-4 px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-500"
          >
            ← Back to Patient List
          </button>
          <ShowMealDetails patientName={selectedPatientName} />
        </div>
      )}
    </div>
  );
};