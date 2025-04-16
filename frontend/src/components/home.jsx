import { useNavigate } from "react-router";
import { BackgroundBeamsWithCollision } from "../ui/beams";
import icon from "../image/font.png"
 
export const Home = () => {
  const navigate = useNavigate();

  const Click=()=>{
    navigate("/signup")
  }

  return (
    <div className="w-screen h-screen  bg-gradient-to-r from-zinc-900  to-zinc-950 ">
    {/* // navbar */}
      <BackgroundBeamsWithCollision>
       <div className="flex items-center justify-center">
        <div className="w-[1300px]  bg-black mt-24 h-16 fixed  ">
      <div className="flex justify-between text-white mt-2 ml- font-semibold">
        <img src={icon} alt="logo"  className="h-10 mt-[1px] "/>
        <button  className="mr-8 bg-white w-20 h-7 text-black rounded-md mt-2" onClick={Click}>
        <p className="text-center" >login</p>
        </button>
       </div>
        </div>
        
      </div>

     {/* welcome to heliverse */}
            <div className="text-white pt-40">

        <p className="text-7xl font-black text-center flex justify-center items-center  ">
          <p className="ml-5 absolute mr-96">
       Welcome to </p> 
      <img src={icon} alt="font" className="h-36 ml-96 " />
        </p>
        <p className="text-3xl font-light tracking-wider pt-5 text-center ">
        Personalized meals. Prescribed by care.
        </p>
      </div>
     
      </BackgroundBeamsWithCollision>
  
    </div>
  );
};
