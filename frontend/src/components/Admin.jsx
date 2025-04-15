import { Patient } from "../sub-components/Patient";
import { MealDetails } from "../sub-components/MealDetails";
import { Record } from "../sub-components/Record";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Dropdown } from "../sub-components/Dropdown";


export const Admin = () => {
  const [activePanel, setActivePanel] = useState("admin");
  const navigate = useNavigate();
  const Home = () => {
    navigate("/admin");
  };
  return (
    <div className="h-full bg-gradient-to-r from-zinc-900 to-zinc-950 ">
      <div className="flex justify-between">
        
        <p
          className="text-white p-4 font-semibold pl-10  text-2xl cursor-pointer"
          onClick={Home}
        >
          HELIVERSE
        </p>
        <Dropdown/>
      </div>
      <hr className="border-zinc-700" />

      <div
        className="grid grid-flow-col"
        style={{ gridTemplateColumns: "20% 80%" }}
      >
        <div className="border-r border-zinc-700">
          <div className="  h-screen text-white text-lg  ">
            <div
              className={`flex  mt-10  w-full h-10  items-center cursor-pointer ${
                activePanel === "admin" ? "bg-zinc-800" : "hover:bg-zinc-800"
              }`}
              onClick={() => setActivePanel("admin")}
            >
              <div
                className="grid grid-flow-col "
                style={{ gridTemplateColumns: "5% 95%" }}
              >
                <div className="bg-yellow-600 w-2 cursor-pointer h-10  pl-0 "></div>
                <div className=" pl-10 flex items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className=" pl-3 "> Admin</p>
                  </div>
                </div>
              </div>
            </div>

            {/* patient details */}

            <div
              className={`flex  mt-10  w-full h-10  items-center cursor-pointer ${
                activePanel === "patient" ? "bg-zinc-800" : "hover:bg-zinc-800"
              }`}
              onClick={() => setActivePanel("patient")}
            >
              <div
                className="grid grid-flow-col "
                style={{ gridTemplateColumns: "5% 95%" }}
              >
                <div className="bg-yellow-600 w-full h-10  pl-0 "></div>
                <div className=" pl-10 flex items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <button>
                      <p className=" pl-3 ">Patient</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Patient meal details */}
            <div
              className={`flex  mt-10  w-full h-10  items-center cursor-pointer ${
                activePanel === "mealdetails" ? "bg-zinc-800" : "hover:bg-zinc-800"
              }`}
              onClick={() => setActivePanel("mealdetails")}
            >
              <div
                className="grid grid-flow-col "
                style={{ gridTemplateColumns: "5% 95%" }}
              >
                <div className="bg-yellow-600 w-full h-10  pl-0 "></div>
                <div className=" pl-10 flex items-center">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <button className="flex items-center">
                      <p className=" pl-3 ">Meal</p>
                      <p className="pl-3">Details</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4">
          {activePanel === "admin" && <Record />}
          {activePanel === "patient" && <Patient />}
          {activePanel === "mealdetails" && <MealDetails />}
        </div>
      </div>
      <hr />
      <p className="text-sm p-4 text-center text-zinc-500">
        2025 - Build by Jatin Kumar Mehta
      </p>
    </div>
  );
};
