import axios from "axios";
import React from "react";
import { BACKEND_URL } from "../../../config";

export const DeletePatient = ({ id }: { id: Number }) => {
  const handleDelete = async () => {
    try {
      if (!id) {
        console.error("Patient ID is undefined");
        return;
      }

      await axios.delete(`${BACKEND_URL}/api/v1/user/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token") || "",
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
    }
  };


  return (
    <div className="ml-auto hover:text-gray-500">
      <button onClick={handleDelete}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 256 256"
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
        </svg>
      </button>
    </div>
  );
};