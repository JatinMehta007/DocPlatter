import { useState } from "react"

export const Meal=()=>{
    return(
        <div>
        
          <div className="text-white m-10  rounded-lg bg-black h-auto ">
            <p className="font-bold text-4xl text-center pt-10">
              Create an Patient meal
            </p>
            <div className="m-10 ml-20 text-base font-medium h-full">
              <p className="mt-2">Morning Meal</p>
              <input
                type="text"
                placeholder="add meal"
                className="bg-zinc-800 text-sm w-full h-9 items-center mt-2 rounded-md pl-5"
              />

              <p className="mt-5">Evening Meal</p>
              <input
                type="text"
                placeholder="add meal"
                className="bg-zinc-800 text-sm w-full h-9 items-center mt-2 rounded-md pl-5"
              />

              <p className="mt-5">Night Meal</p>
              <input
                type="text"
                placeholder="add meal"
                className="bg-zinc-800 text-sm w-full h-9 items-center mt-2 rounded-md pl-5"
              />

              <p className="mt-5">Specify Ingredients</p>
              <input
                type="text"
                placeholder="add details"
                className="bg-zinc-800 text-sm w-full h-9 items-center mt-2 rounded-md pl-5"
              />

              <p className="mt-5">Specific Instructions</p>
              <input
                type="text"
                placeholder="add description"
                className="bg-zinc-800 text-sm w-full h-9 items-center mt-2 rounded-md pl-5"
              />


            </div>

            <div className="text-center mx-auto h-10 w-28  bg-white text-black rounded-md">
              <button className="mt-2   font-semibold">Add Record</button>
            </div>
            <div className="h-10"></div>
          </div>
        </div>
      

    )
}