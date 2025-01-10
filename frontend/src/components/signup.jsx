export const Signup=()=>{
    return(
        

        <div className="bg-zinc-900  w-full h-screen flex justify-center">
            <div className= "w-72 bg-zinc-950 border absolute mt-52 rounded-2xl  border-transparent ">
                <div className="p-6">
                <p className="text-white font-medium ">
                Username
                <input type="text" placeholder="heliverse123@xyz.com" className="mt-1 font-normal rounded-lg bg-zinc-950 border p-2 " />
                </p>
                <p className="text-white mt-2 font-medium">
                Password
                <input type="password"  placeholder="*********" className="mt-1 font-normal rounded-lg bg-zinc-950 border p-2 " />
                </p>
                
                <button className="text-black ml-20 mt-10 bg-white p-1 rounded-md font-medium" > 
                    Signup
                </button>
                </div>
            </div>
        </div>
  )
}
