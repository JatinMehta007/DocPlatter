import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Spinner } from "./skeleton/spinner";
import { BottomGradient } from "./signup";
import { Input } from "../ui/input";

export const Login=()=>{
    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState("");
    const navigate = useNavigate();

    const auth = async()=>{
        try{
            setLoading(true);
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/login`,{
                email,
                password,
            });
            console.log("login response :" , response);

            if(response.data.token){
                localStorage.setItem("token",response.data.token);
                navigate("/admin");
            } 
            
        } catch(err){
            console.log("Login error:",err);
             setError(err.message || "An error occured");
        } finally{
            setLoading(false);
        }
    }

    if(loading){
        return(

            <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-sm">
            <Spinner/>
        </div>
        )
    }
    
      return (
        <div className="  w-full h-screen flex justify-center  bg-gradient-to-r from-zinc-900  to-zinc-950 ">
          <div className="w-[400px] bg-zinc-950 border absolute mt-52 rounded-lg  border-zinc-600 ">
            <p className="text-white  text-center font-bold tracking-wide mt-2 text-xl">
              Join DocPlatter
            </p>
            {/* <p className="text-white text-center font-bold">Already have an account?</p> */}
            <div className="text-white text-center font-bold mt-2">
              Don't have an account?{" "}
              <button
                onClick={() => navigate("/signup")}
                className="text-blue-400  hover:text-blue-600 transition-all duration-200"
              >
                Signup
              </button>
            </div>
            <div className="p-6 ml-2 tracking-wider">
              
              <div className="text-white mt-4 font-medium">
                Email Address
                <Input
                  type="text"
                  placeholder="docplatter@fc.com"
                  className=" "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="text-white mt-4 font-medium">
                Password
                <Input
                  type="password"
                  placeholder="••••••••••"
                  className=" "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
    
              {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
    
              <button
                onClick={auth}
                disabled={loading}
                className="group/btn relative mt-5 block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] border border-t-gray-700 border-b-gray-700 border-r-0 border-l-0 cursor-pointer"
                type="submit"
              >
               Log in →
                <BottomGradient />
              </button>
              <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
            </div>
          </div>
        </div>
      );
    };
    