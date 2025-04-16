import { useNavigate } from "react-router";
import { BackgroundBeamsWithCollision } from "../ui/beams";
import icon from "../image/font.png";
import image from "../image/image.png";

export const Home = () => {
  const navigate = useNavigate();

  const Click = () => {
    navigate("/signup");
  };

  return (
    <div className="w-screen min-h-screen  bg-gradient-to-r from-zinc-900  to-zinc-950 ">
      {/* // navbar */}
      <BackgroundBeamsWithCollision>
        <div className="flex items-center justify-center">
          <div className="w-[1300px]  bg-black mt-24 h-16 fixed  ">
            <div className="flex justify-between text-white mt-2 ml- font-semibold">
              <img src={icon} alt="logo" className="h-10 mt-[1px] " />
              <button
                className="mr-8 bg-white w-20 h-7 text-black rounded-md mt-2"
                onClick={Click}
              >
                <p className="text-center">login</p>
              </button>
            </div>
          </div>
        </div>

        {/* welcome to heliverse */}
        <div className="text-white pt-40">
          <div className="text-8xl  text-center flex justify-center items-center  ">
            <p className="ml-5 absolute mr-[500px] mt-3 tracking-wider font-extrabold">
              Welcome to
            </p>
            <img src={icon} alt="font" className="h-[180px] ml-[500px]  " />
          </div>
          <div className="">
            <div className="grid grid-flow-col  bg-stone-900 w-[1100px] h-[500px] ml-36 rounded-3xl  ">
              <div className="grid-cols-1 w-[65%] p-10">
          <p className="text-6xl text-left font-extrabold tracking-wider pt-5 ml-24  ">
            Simple, Smart, and Reliable Hospital Management
             <span className="text-2xl block font-normal mt-6">Add patients, assign
            meals, and manage records — all in one place. Join others
            streamlining hospital care with DocPlatter.</span>
          </p>
            </div>
          <div className="grid-cols-2 absolute h-[400px] w-[500px]  ml-[720px] mt-28  ">
            <img src={image} alt="" className=""/>
          </div>
              </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
        
    </div>
  );
};
