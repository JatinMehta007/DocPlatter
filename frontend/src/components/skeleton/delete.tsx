import axios from "axios";
import { useState } from "react";
import { BACKEND_URL } from "../../../config";
import { AnimatedTooltip } from "../../ui/popup";
import { Spinner } from "./spinner";


export const DeletePatient = ({ id }: { id: Number }) => {
  const [loading, setIsLoading] = useState(false);

    const handleDelete = async () => {
    try {
      setIsLoading(true);
      if (!id) {
        console.error("Patient ID is undefined");
        return;
      }

      await axios.delete(`${BACKEND_URL}/api/v1/user/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}` || "",
        },
      });

      alert("Patient deleted successfully");
      window.location.reload();
    } catch (error: any) {
      console.error("Error deleting the patient:", error);
      alert(
        error?.response?.data?.message ||
        "Failed to delete patient. Please try again."
      );
    } finally{
      setIsLoading(false);
    }
  };

  const people = [
    {
      id: 1,
      name: "delete patient"
    },
  ];
  
  return (
    <div className="md:ml-auto h-14   p-1 sm:p-0   relative  ">
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/20" ><Spinner/></div>
      )}
      <button onClick={handleDelete} >
        
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0,0,256,256"
  className="hover:bg-yellow-200 md:w-[50px] md:h-[50px] h-[40px] w-[40px]  rounded-sm absolute"
>
  <g
            fill="none"
            fillRule="nonzero"
            stroke="none"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
  >
    <g transform="scale(5.33333,5.33333)">
      <path
        d="M34,12l-6,-6h-8l-6,6h-3v28c0,2.2 1.8,4 4,4h18c2.2,0 4,-1.8 4,-4v-28z"
        fill="#e7b217"
      ></path>
      <path
        d="M24.5,39h-1c-0.8,0 -1.5,-0.7 -1.5,-1.5v-19c0,-0.8 0.7,-1.5 1.5,-1.5h1c0.8,0 1.5,0.7 1.5,1.5v19c0,0.8 -0.7,1.5 -1.5,1.5zM31.5,39v0c-0.8,0 -1.5,-0.7 -1.5,-1.5v-19c0,-0.8 0.7,-1.5 1.5,-1.5v0c0.8,0 1.5,0.7 1.5,1.5v19c0,0.8 -0.7,1.5 -1.5,1.5zM16.5,39v0c-0.8,0 -1.5,-0.7 -1.5,-1.5v-19c0,-0.8 0.7,-1.5 1.5,-1.5v0c0.8,0 1.5,0.7 1.5,1.5v19c0,0.8 -0.7,1.5 -1.5,1.5z"
        fill="#04010b"
      ></path>
      <path
        d="M11,8h26c1.1,0 2,0.9 2,2v2h-30v-2c0,-1.1 0.9,-2 2,-2z"
        fill="#090116"
      ></path>
    </g>
  </g>
</svg>;

        <div className="md:mt-[-20px] invisible lg:visible">
        <AnimatedTooltip items={people} />
        </div>
      </button>
    </div>
  );
};



