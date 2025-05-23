import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../../config";
import { AuroraBackground } from "../ui/aurora_background";
import { motion } from "framer-motion";
import { DeleteMeals } from "../components/skeleton/deleteMutipleMeal";

export const ShowMealDetails = ({ patientName }) => {
  const [patientMeals, setPatientMeals] = useState([]);

  useEffect(() => {
    const fetchMealData = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/v1/user/mealdetails`,{
          headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          }
        });
        const allMeals = res.data.mealDetails;

        const matchedPatient = allMeals.find(
          (item) => item.patientName === patientName
        );

        if (matchedPatient) {
          setPatientMeals(matchedPatient.mealDetails);
        } else {
          setPatientMeals([]);
        }
      } catch (error) {
        console.error("Error fetching meal data:", error);
      }
    };

    fetchMealData();
  }, [patientName]);

  return (
    <div>
    <AuroraBackground>
       <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=""
        >
    <div className="text-white m-10 rounded-lg  p-6 w-[500px]">
      <p className="font-bold text-4xl text-center pt-4 mb-8">
        Meal for <span className="text-amber-400 uppercase">{patientName}</span>
      </p>
       
      {patientMeals.length > 0 ? (
        patientMeals.map((meal, index) => {
          return (
            <div
            key={meal.id || index}
            className="bg-gray-800 rounded-lg p-4 mb-4 border border-gray-600 "
            >
              <div className="ml-[400px]  absolute ">
            <DeleteMeals id={meal.id}/>
          </div>
            <p className="text-base font-medium  tracking-wider text-amber-600 uppercase"><strong className="text-amber-400 text-lg tracking-normal ">Morning : </strong> {meal.morning_meal || "null"}</p>
            <p className="text-base  tracking-wider  text-amber-600 uppercase"><strong className="text-amber-400 text-lg tracking-normal ">Date : </strong> {meal.date || "null"}</p>
            <p className="text-base  tracking-wider  text-amber-600 uppercase"><strong className="text-amber-400 text-lg tracking-normal ">Evening : </strong> {meal.evening_meal || "null"}</p>
            <p className="text-base  tracking-wider  text-amber-600 uppercase"><strong className="text-amber-400 text-lg tracking-normal ">Night : </strong> {meal.night_meal || "null"}</p>
            <p className="text-base  tracking-wider  text-amber-600 uppercase"><strong className="text-amber-400 text-lg tracking-normal ">Ingredients : </strong> {meal.ingredients || "null"}</p>
            <p className="text-base  tracking-wider  text-amber-600 uppercase"><strong className="text-amber-400 text-lg tracking-normal ">Instruction : </strong> {meal.instruction || "null"}</p>
          </div>
          )
        })
      ) : (
        <p className="text-center text-gray-400">
          No meal data found for <strong>{patientName}</strong>
        </p>
        )}
        </div>
    </motion.div>
    </AuroraBackground>
      </div>
  );
};