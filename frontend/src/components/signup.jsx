import { useState } from "react"
import { Admin } from "./Admin"
import { useNavigate } from "react-router";

export const Signup=()=>{

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const Signup=()=>{
        if(username==="manager@xyz.com" && password==="Password@2025"){
            navigate("/admin");
        } else{
            setError("Invalid username or password");
        }
    }
    return(
        

        <div className="bg-zinc-900  w-full h-screen flex justify-center ">
            <div className= "w-72 bg-zinc-950 border absolute mt-52 rounded-2xl  border-transparent ">
            <p className="text-white uppercase text-center font-medium tracking-wide mt-2">Manager Username</p>
                <div className="p-6 ml-2 tracking-wider">
                <p className="text-white font-medium ">
                Username
                <input type="text" placeholder="heliverse123@xyz.com" className="mt-1 font-normal rounded-lg bg-zinc-950 border p-2 w-56 " value={username} onChange={(e)=>setUsername(e.target.value)}/>
                </p>
                <p className="text-white mt-4 font-medium">
                Password
                <input type="password"  placeholder="**************" className="mt-1 font-normal rounded-lg bg-zinc-950 border p-2 w-56 "  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </p>
                {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
                <button className="text-black ml-20 mt-10 bg-zinc-300 hover:bg-white p-1 rounded-md font-medium" onClick={Signup} > 
                    Signup
                </button>
                </div>
            </div>
        </div>
  )
}
