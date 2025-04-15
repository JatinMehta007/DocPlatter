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
        <p className="pl-10">DocPlatter</p>
        
        <button  className="mr-8 bg-white w-20 h-7 text-black rounded-md " onClick={Click}>
        <p className="text-center" >login</p>
        </button>
      </div>

     {/* welcome to heliverse */}
            <div className="text-white pt-40">

        <p className="text-7xl font-black text-center">
       Welcome to <span className="text-yellow-600">DocPlatter</span> 
        </p>
        <p className="text-3xl font-light tracking-wider pt-5 text-center ">
        Personalized meals. Prescribed by care.
        </p>
      </div>

      </BackgroundBeamsWithCollision>
  
    </div>
  );
};
