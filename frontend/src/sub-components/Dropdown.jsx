import { useNavigate } from "react-router-dom";
import crown from "../image/crown.webp";
import { BACKEND_URL } from "../../config";
import axios from "axios";
import { useEffect, useState } from "react";

export const Dropdown = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate(`/`);
  };

  const [name, setName] = useState();

    useEffect(()=>{
      axios.get(`${BACKEND_URL}/api/v1/user/userinfo`,{
        headers:{
          Authorization:`Bearer ${localStorage.getItem("token")}`
        },
         withCredentials: true
      })
      .then(res => {
        setName(res.data.name);
      })
      .catch(err => console.error("Error fetching user info: ",err));
    },[])
  
  return (
    <div className="relative group">
      <div className="flex justify-center items-center pr-12">
      <img src={crown} alt="Crown Icon" className="h-6 mt-5 mr-4 cursor-pointer" />
      <div className="text-slate-300 mt-5 pr-4 font-semibold  tracking-wider font-sans">
      {name}
      </div>
      </div>
      <div className="absolute top-14 right-4 bg-white shadow-md rounded-md z-[100] hidden group-hover:block">
        <div className="p-3">
          <button
            role="menuitem"
            onClick={logout}
            className="flex w-full cursor-pointer items-center gap-2 rounded-md px-6 font-sans text-sm antialiased font-normal text-inherit hover:text-slate-500"
          >
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V13C0 13.2652 0.105357 13.5196 0.292893 13.7071C0.48043 13.8946 0.734784 14 1 14C1.26522 14 1.51957 13.8946 1.70711 13.7071C1.89464 13.5196 2 13.2652 2 13V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0ZM11.293 9.293C11.1108 9.4816 11.01 9.7342 11.0123 9.9964C11.0146 10.2586 11.1198 10.5094 11.3052 10.6948C11.4906 10.8802 11.7414 10.9854 12.0036 10.9877C12.2658 10.99 12.5184 10.8892 12.707 10.707L15.707 7.707C15.8945 7.51947 15.9998 7.26516 15.9998 7C15.9998 6.73484 15.8945 6.48053 15.707 6.293L12.707 3.293C12.6148 3.19749 12.5044 3.12131 12.3824 3.0689C12.2604 3.01649 12.1292 2.9889 11.9964 2.98775C11.8636 2.9866 11.7319 3.0119 11.609 3.06218C11.4861 3.11246 11.3745 3.18671 11.2806 3.2806C11.1867 3.3745 11.1125 3.48615 11.0622 3.60905C11.0119 3.73194 10.9866 3.86362 10.9877 3.9964C10.9889 4.12918 11.0165 4.2604 11.0689 4.3824C11.1213 4.50441 11.1975 4.61475 11.293 4.707L12.586 6H5C4.73478 6 4.48043 6.10536 4.29289 6.29289C4.10536 6.48043 4 6.73478 4 7C4 7.26522 4.10536 7.51957 4.29289 7.70711C4.48043 7.89464 4.73478 8 5 8H12.586L11.293 9.293Z"
                fill="#90A4AE"
              ></path>
            </svg>
            <p>Logout</p>
          </button>
        </div>
      </div>
    </div>
  );
};