import { useState } from "react"
import { Admin } from "../components/Admin"
import  axios  from "axios"
import { BACKEND_URL } from "../../config";
import { Spinner } from "../components/skeleton/spinner";
import { toast }  from "react-hot-toast";

export const Record=()=>{

  const [patientName, setPatientName] = useState("");
  const [diseases, setDiseases] = useState("");
  const [allergies, setAllergies] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [bedNumber, setBedNumber] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");
  const [loading, setIsLoading] = useState(false);

  const Submit = async (e)=>{
    const newRecord = {
      username : patientName,
      diseases: diseases,
      allergies:allergies,
      room_number:roomNumber,
      bed_number:bedNumber,
      age:age,
      gender:gender,
      contact_information:contact,
    };

      const token  = localStorage.getItem("token");

    try{
      setIsLoading(true);
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/insert`,newRecord,{
        headers:{
          "Content-Type":"application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      
      toast.success("Record added successfully");

      setTimeout(()=>{
       window.location.reload();
      },2000);

    } catch(error){
      console.error("Error" , error);
      toast.error("username already exist! ");
    } finally{
      setIsLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/20">
        <Spinner/>
      </div>
    );
  }

    return(
        <div>
        
          <div className="text-white md:m-10  rounded-lg bg-black h-full md:h-auto ">
            <p className="font-bold  md:text-4xl text-xl text-center pt-10 uppercase">
              Create an Record
            </p>
            
            <div className="md:m-10 md:ml-20 m-4 text-sm md:text-lg lg:text-xl font-medium h-full">
              <p className="mt-2">Patient</p>
              <input
                type="text"
                placeholder="patient name"
                className="bg-zinc-800 md:text-sm lg:text-base text-xs w-full md:h-9 h-6 items-center mt-2 rounded-md pl-5"
                value={patientName}
                onChange={(e)=>setPatientName(e.target.value)}
              />

              <p className="mt-5">Diseases</p>
              <input
                type="text"
                placeholder="disease name"
                className="bg-zinc-800 md:text-sm lg:text-base text-xs w-full md:h-9 h-6 items-center mt-2 rounded-md pl-5"
                value={diseases}
                onChange={(e)=>setDiseases(e.target.value)}
              />

              <p className="mt-5">Allergies</p>
              <input
                type="text"
                placeholder="Allergy name"
                className="bg-zinc-800 md:text-sm lg:text-base text-xs w-full md:h-9 h-6 items-center mt-2 rounded-md pl-5"
                value={allergies}
                onChange={(e)=>setAllergies(e.target.value)}
              />

              <p className="mt-5">Room Number</p>
              <input
                type="text"
                placeholder="Room number"
                className="bg-zinc-800 md:text-sm lg:text-base text-xs w-full md:h-9 h-6 items-center mt-2 rounded-md pl-5"
                value={roomNumber}
                onChange={(e)=>setRoomNumber(e.target.value)}
              />

              <p className="mt-5">Bed Number</p>
              <input
                type="text"
                placeholder="Bed name"
                className="bg-zinc-800 md:text-sm lg:text-base text-xs w-full md:h-9 h-6 items-center mt-2 rounded-md pl-5"
                value={bedNumber}
                onChange={(e)=>setBedNumber(e.target.value)}
              />

              <p className="mt-5">Age</p>
              <input
                type="age"
                placeholder="DOB"
                className="bg-zinc-800 md:text-sm lg:text-base text-xs w-full md:h-9 h-6 items-center mt-2 rounded-md pl-5"
                value={age}
                onChange={(e)=>setAge(e.target.value)}
              />

              <p className="mt-5">Gender</p>
              <input
                type="text"
                placeholder="gender"
                className="bg-zinc-800 md:text-sm lg:text-base text-xs w-full md:h-9 h-6 items-center mt-2 rounded-md pl-5"
                value={gender}
                onChange={(e)=>setGender(e.target.value)}
              />

              <p className="mt-5">Contact</p>
              <input
                type="text"
                placeholder="Contact number"
                className="bg-zinc-800 md:text-sm lg:text-base text-xs w-full md:h-9 h-6 items-center mt-2 rounded-md pl-5"
                value={contact}
                onChange={(e)=>setContact(e.target.value)}
              />
            </div>

            <div className="text-center mx-auto mt-10 md:mt-0 h-10 w-28  bg-white text-black rounded-md">
              <button onClick={Submit} className="mt-2   font-semibold"  >Add Record</button>
            </div>
            <div className="h-10"></div>
          </div>
        </div>
      

    )
}