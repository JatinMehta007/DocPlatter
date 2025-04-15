import React, { useState } from "react";
import { BACKEND_URL } from "../../../config";
import axios from "axios";
import { Spinner } from "./spinner";

export const DeleteMeals=({id}: {id :String})=>{

    const [loading, setIsLoading] = useState(false);

    const handleDelete = async () => {
        try {
            setIsLoading(true);
            // console.log("the d:",id);
          if (!id) {
            console.error("Patient ID is undefined");
            return;
          }
    
          await axios.delete(`${BACKEND_URL}/api/v1/user/meal/${id}`, {
            headers: {
              Authorization: localStorage.getItem("token") || "",
            },
          });
    
          alert("Patient Meal deleted successfully");
          window.location.reload();
        } catch (error: any) {
          console.error("Error deleting the patientmeal:", error);
          alert(
            error?.response?.data?.message ||
            "Failed to delete patient meal. Please try again."
          );
        } finally{
            setIsLoading(false);
        }
      };

    

    return(
        <div>
        {loading && (
  <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/20">
    <Spinner />
  </div>
)}
            <button onClick={handleDelete} disabled={loading}  >
              
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
<g fill="none" fill-rule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(2.56,2.56)"><path d="M68.77,50c5.01,-5.33 9.92,-10.79 14.74,-16.45c2,-2.36 1.98,-5.82 -0.01,-8.19c-2.69,-3.2 -5.65,-6.17 -8.86,-8.86c-2.37,-1.99 -5.84,-2.02 -8.19,-0.01c-5.66,4.82 -11.12,9.73 -16.45,14.74c-5.33,-5.01 -10.79,-9.92 -16.45,-14.74c-2.36,-2 -5.82,-1.98 -8.19,0.01c-3.2,2.69 -6.17,5.65 -8.86,8.86c-1.99,2.37 -2.02,5.84 -0.01,8.19c4.82,5.66 9.73,11.12 14.74,16.45c-5.01,5.33 -9.92,10.79 -14.74,16.45c-2,2.36 -1.98,5.82 0.01,8.19c2.69,3.2 5.65,6.17 8.86,8.86c2.37,1.99 5.84,2.02 8.19,0.01c5.66,-4.82 11.12,-9.73 16.45,-14.74c5.33,5.01 10.79,9.92 16.45,14.74c2.36,2 5.82,1.98 8.19,-0.01c3.2,-2.69 6.17,-5.65 8.86,-8.86c1.99,-2.37 2.02,-5.84 0.01,-8.19c-4.82,-5.66 -9.73,-11.12 -14.74,-16.45z" fill="#ebb144"></path><path d="M43.83,58.06c-0.28,0 -0.56,-0.12 -0.75,-0.34c-0.36,-0.42 -0.32,-1.05 0.09,-1.41c1.59,-1.39 4.15,-2.22 6.86,-2.22c2.71,0 5.17,0.79 6.78,2.15c0.42,0.36 0.47,0.99 0.12,1.41c-0.36,0.42 -0.99,0.47 -1.41,0.12c-1.24,-1.05 -3.29,-1.68 -5.49,-1.68c-2.2,0 -4.31,0.64 -5.54,1.72c-0.19,0.17 -0.42,0.25 -0.66,0.25z" fill="#e4b577"></path><path d="M44.09,58.65c-0.42,0 -0.8,-0.26 -0.95,-0.67c-0.13,-0.38 -0.49,-0.72 -0.8,-0.89c-0.48,-0.27 -0.65,-0.88 -0.38,-1.36c0.27,-0.48 0.88,-0.65 1.36,-0.38c0.79,0.45 1.43,1.19 1.7,1.98c0.18,0.52 -0.1,1.09 -0.62,1.27c-0.11,0.04 -0.22,0.06 -0.33,0.06z" fill="#e4b577"></path><path d="M55.91,58.65c-0.11,0 -0.22,-0.02 -0.33,-0.06c-0.52,-0.18 -0.8,-0.75 -0.62,-1.27c0.27,-0.79 0.91,-1.53 1.7,-1.98c0.48,-0.27 1.09,-0.1 1.36,0.38c0.27,0.48 0.1,1.09 -0.38,1.36c-0.3,0.17 -0.67,0.51 -0.8,0.89c-0.14,0.41 -0.53,0.67 -0.95,0.67z" fill="#e4b577"></path><g><circle cx="42" cy="47" r="5" fill="#ffffff"></circle><circle cx="42" cy="47" r="2.5" fill="#e4b577"></circle><circle cx="58" cy="47" r="5" fill="#ffffff"></circle><circle cx="58" cy="47" r="2.5" fill="#e4b577"></circle></g></g></g>
</svg>

            </button>
        </div>
    )
}