import axios from "axios";
import { useState } from "react"
import { BACKEND_URL } from "../../config";

export const Meal=({patientName})=>{
  const [morningMeal , setMorningMeal] = useState("");
  const [eveningMeal , setEveningMeal] = useState("");
  const [nightMeal , setNightMeal] = useState("");
  const [ingredients , setIngredients] = useState("");
  const [instruction , setInstruction] = useState("");

  const AddRecord = async ()=>{
    const mealData = {
      patientName,
      morningMeal,
      eveningMeal,
      nightMeal,
      ingredients,
      instruction
    }
    try{
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/meals`,mealData);
        console.log("Meal data added", response.data);
        alert(`Meal record added for ${patientName}`);
    } catch (error){
      console.log("Error adding meal data", error);
      alert("Failed to add the meal")
    }
  }
  return(
        <div>
        
          <div className="text-white m-10  rounded-lg bg-black h-auto ">
            <p className="font-bold text-4xl text-center pt-10">
              Create an Meal for {patientName}
            </p>
            <div className="m-10 ml-20 text-base font-medium h-full">
              <p className="mt-2">Morning Meal</p>
              <input
                type="text"
                placeholder="add meal"
                className="bg-zinc-800 text-sm w-full h-9 items-center mt-2 rounded-md pl-5"
                value={morningMeal}
                onChange={(e)=>setMorningMeal(e.target.value)}
              />

              <p className="mt-5">Evening Meal</p>
              <input
                type="text"
                placeholder="add meal"
                className="bg-zinc-800 text-sm w-full h-9 items-center mt-2 rounded-md pl-5"
                value={eveningMeal}
                onChange={(e)=>setEveningMeal(e.target.value)}
              />

              <p className="mt-5">Night Meal</p>
              <input
                type="text"
                placeholder="add meal"
                className="bg-zinc-800 text-sm w-full h-9 items-center mt-2 rounded-md pl-5"
                value={nightMeal}
                onChange={(e)=>setNightMeal(e.target.value)}
              />

              <p className="mt-5">Specify Ingredients</p>
              <input
                type="text"
                placeholder="add details"
                className="bg-zinc-800 text-sm w-full h-9 items-center mt-2 rounded-md pl-5"
                value={ingredients}
                onChange={(e)=>setIngredients(e.target.value)}
              />

              <p className="mt-5">Specific Instructions</p>
              <input
                type="text"
                placeholder="add description"
                className="bg-zinc-800 text-sm w-full h-9 items-center mt-2 rounded-md pl-5"
                value={instruction}
                onChange={(e)=>setInstruction(e.target.value)}
              />


            </div>

            <div className="text-center mx-auto h-10 w-28  bg-white text-black rounded-md">
              <button onClick={AddRecord} className="mt-2   font-semibold">Add Record</button>
            </div>
            <div className="h-10"></div>
          </div>
        </div>
      

    )
}