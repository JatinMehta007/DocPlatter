import { useNavigate } from "react-router";
import { BackgroundBeamsWithCollision } from "../ui/beams";

export const Home = () => {
  const navigate = useNavigate();

  const Click=()=>{
    navigate("/signup")
  }
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-gray-900 via-black to-gray-950">
    {/* // navbar */}
      <BackgroundBeamsWithCollision>
      <div className="flex justify-between text-white p-4 font-semibold ">
        <p className="pl-10">Heliverse Hospital</p>
        <div className="flex gap-10 border-transparent">
          <p className="p-2  cursor-pointer border border-transparent hover:rounded-full  hover:border-yellow-600 hover:text-yellow-600">Dashboard</p>
          <p className="p-2 cursor-pointer border border-transparent hover:rounded-full  hover:border-yellow-600 hover:text-yellow-600">Contact</p>
        </div>
        <button  className="mr-8 bg-white w-20 h-7 text-black rounded-md " onClick={Click}>
        <p className="text-center" >login</p>
        </button>
      </div>

     {/* welcome to heliverse */}
            <div className="text-white pt-40">

        <p className="text-7xl font-black text-center">
       Welcome to <span className="text-yellow-600">Heliverse Hospital</span> 
        </p>
        <p className="text-3xl font-medium pt-5 text-center ">
            Streamlining Your Healthcare Operations for Better Patient Care
        </p>
      </div>

      <div  className="flex justify-center gap-5 pt-10 text-white">
        <button className="text-sm font-semibold bg-gray-900 w-44 h-7 rounded-lg">
            Go to Dashboard
        </button>

        <button className="text-black font-medium bg-white w-44  rounded-lg">
            Contact us
        </button>
      </div>
      </BackgroundBeamsWithCollision>
  
    </div>
  );
};
