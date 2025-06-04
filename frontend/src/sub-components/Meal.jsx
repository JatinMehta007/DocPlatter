import axios from "axios";
import { useState } from "react"
import { BACKEND_URL } from "../../config";
import { Spinner } from "../components/skeleton/spinner";
import { toast } from "react-hot-toast";

export const Meal=({patientName})=>{
  const [morningMeal , setMorningMeal] = useState("");
  const [eveningMeal , setEveningMeal] = useState("");
  const [nightMeal , setNightMeal] = useState("");
  const [ingredients , setIngredients] = useState("");
  const [instruction , setInstruction] = useState("");
  const [date , setDate] = useState("");
  const [loading , setIsLoading] = useState(false);

  const AddRecord = async ()=>{
    const mealData = {
      patientName,
      morningMeal,
      eveningMeal,
      nightMeal,
      ingredients,
      instruction,
      date
    }

      const token  = localStorage.getItem("token");
    try{
      setIsLoading(true)
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/meals`,mealData,{
        headers:{
          Authorization : `Bearer ${token}`,
        }
      });
        console.log("Meal data added", response.data);

        toast.success(`Meal record added for ${patientName}`);

        setTimeout(()=>{
          window.location.reload();
        },2000);

    } catch (error){
      console.log("Error adding meal data", error);
      toast.error("Failed to add the meal");
    } finally{
      setIsLoading(false);
    }
  }

  if(loading){
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/20">
        <Spinner/>
      </div>
    )
  }
  return(
        <div>
        
          <div className="text-white lg:m-10   rounded-md bg-black h-auto ">
            <p className="font-bold lg:text-4xl md:text-2xl text-lg text-center pt-10 uppercase">
              Create an Meal for <span className=" text-yellow-600 ">{patientName}</span>
            </p>
            <div className="lg:m-10 lg:ml-20 ml-5 text-base font-medium h-full">
            

            <p className="mt-2">Date</p>
              <input
                type="text"
                placeholder="16 march 2025"
                className="bg-zinc-800 text-sm w-full h-9 items-center mt-2 rounded-md pl-5"
                value={date}
                onChange={(e)=>setDate(e.target.value)}
              />

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

            <div className="text-center mx-auto h-10 w-28 mt-6 lg:mt-0  bg-white text-black rounded-md">
              <button onClick={AddRecord} className="mt-2   font-semibold">Add Record</button>
            </div>
            <div className="h-10"></div>
          </div>
        </div>
      

    )
}