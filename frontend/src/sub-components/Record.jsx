import { Admin } from "../components/Admin"

export const Record=()=>{
    return(
        <div>
        
          <div className="text-white m-10  rounded-lg bg-black h-auto ">
            <p className="font-bold text-4xl text-center pt-10">
              Create an Record
            </p>
            <div className="m-10 ml-20 text-base font-medium h-full">
              <p className="mt-2">Patient</p>
              <input
                type="text"
                placeholder="patient name"
                className="bg-zinc-800 text-sm w-full h-9 items-center mt-2 rounded-md pl-5"
              />

              <p className="mt-5">Diseases</p>
              <input
                type="text"
                placeholder="disease name"
                className="bg-zinc-800 text-sm w-full h-9 items-center mt-2 rounded-md pl-5"
              />

              <p className="mt-5">Allergies</p>
              <input
                type="text"
                placeholder="Allergy name"
                className="bg-zinc-800 text-sm w-full h-9 items-center mt-2 rounded-md pl-5"
              />

              <p className="mt-5">Room Number</p>
              <input
                type="text"
                placeholder="patient name"
                className="bg-zinc-800 text-sm w-full h-9 items-center mt-2 rounded-md pl-5"
              />

              <p className="mt-5">Bed Number</p>
              <input
                type="text"
                placeholder="patient name"
                className="bg-zinc-800 text-sm w-full h-9 items-center mt-2 rounded-md pl-5"
              />

              <p className="mt-5">Age</p>
              <input
                type="age"
                placeholder="DOB"
                className="bg-zinc-800 text-sm w-full h-9 items-center mt-2 rounded-md pl-5"
              />

              <p className="mt-5">Gender</p>
              <input
                type="text"
                placeholder="gender"
                className="bg-zinc-800 text-sm w-full h-9 items-center mt-2 rounded-md pl-5"
              />

              <p className="mt-5">Contact</p>
              <input
                type="text"
                placeholder="Contact number"
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