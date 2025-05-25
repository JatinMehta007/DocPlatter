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
    <div className="h-screen overflow-hidden">
      {!addMeal ? (
        <div>
          <p className="md:text-4xl text-xl md:m-8 m-2  text-gray-300 font-semibold">
            Patient meal Details
          </p>
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
            <p className="text-center text-gray-400 mt-10">
              No patients with meals found.
            </p>
          ) : (
            patientsWithMeals.map((patient, index) => {
              console.log(
                "Rendering patient:",
                patient.patientName,
                "with ID:",
                patient.id
              );

              return (
                <div key={patient.id || index} className="">
                  <div
                    className="grid grid-flow-col mt-9 group cursor-pointer"
                    style={{ gridTemplateColumns: "1% 98%" }}
                  >
                    <div className="xl:group-hover:bg-yellow-600 bg-yellow-600 lg:bg-zinc-800 w-[10px] h-14 pl-0" />
                    <div className="w-full flex flex-row">
                      <div className="md:pl-10 ml-1 xl:ml-0 pl-1 h-14 w-full mr-4 uppercase font-bold bg-zinc-800 text-zinc-200 text-sm">
                        <p className="normal-case font-light pb-1 mt-1">
                          Patient Details
                        </p>
                        {patient.patientName}
                      </div>
                      <div
                        onClick={() => handlePatientClick(patient.patientName)}
                      >
                        <p className="xl:ml-10 ml-1 h-14 text-zinc-400 md:p-2 p-1  font-semibold md:text-sm text-xs bg-zinc-800 cursor-pointer hover:text-white">
                          Click here to see the meal
                        </p>
                      </div>
                      <div className="md:h-14  md:w-14 h-18 w-18 md:ml-5">
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
            className="mb-4 px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-500 flex justify-center items-center"
          >
             <span className="text-lg">←</span><span className="md:block md:invisible hidden">d</span><span className="hidden md:flex">Back to Patient List</span>
          </button>
          <ShowMealDetails patientName={selectedPatientName} />
        </div>
      )}
    </div>
  );
};
