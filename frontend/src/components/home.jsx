import { useNavigate } from "react-router";
import { BackgroundBeamsWithCollision } from "../ui/beams";
import icon from "../image/font.png";
import image from "../image/image.png";
import github from "../image/github.png";
import linkedin from "../image/linkedin.png";;

export const Home = () => {
  const navigate = useNavigate();

  const Click = () => {
    navigate("/signup");
  };

  return (
    <div className="w-screen min-h-screen   bg-gradient-to-r from-zinc-900  to-zinc-950 ">
      {/* // navbar */}
      <BackgroundBeamsWithCollision>
        <div className="flex items-center justify-center relative">
          <div className="w-[1300px]  bg-black mt-10 h-16 fixed top-0 z-50  ">
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
            <div className="grid grid-flow-col  bg-stone-900 w-[1100px] h-[500px] ml-24 rounded-3xl  ">
              <div className="grid-cols-1 w-[65%] p-10">
                <p className="text-6xl text-left font-extrabold tracking-wider pt-5 ml-20  ">
                  Simple, Smart, and Reliable Hospital Management
                  <span className="text-2xl block font-normal mt-6">
                    Add patients, assign meals, and manage records — all in one
                    place. Join others streamlining hospital care with
                    DocPlatter.
                  </span>
                </p>
              </div>
              <div className="grid-cols-2 absolute h-[400px] w-[500px]  ml-[720px] mt-28  ">
                <img src={image} alt="" className="rounded-3xl" />
              </div>
            </div>
          </div>
        </div>

        <section className=" text-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl sm:text-6xl font-bold text-center mb-12">
              Key Features of DocPlatter
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Feature Card */}
              <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg hover:shadow-yellow-500/20 transition">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-semibold mb-2">Add Patients</h3>
                <p className="text-zinc-400">
                  Easily register new patients with details like name, age,
                  condition, and room.
                </p>
              </div>

              <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg hover:shadow-yellow-500/20 transition">
                <div className="text-4xl mb-4">🗂️</div>
                <h3 className="text-xl font-semibold mb-2">
                  Manage Medical Records
                </h3>
                <p className="text-zinc-400">
                  Access and update all patient reports, prescriptions, and
                  doctor notes in one place.
                </p>
              </div>

              <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg hover:shadow-yellow-500/20 transition">
                <div className="text-4xl mb-4">🍽️</div>
                <h3 className="text-xl font-semibold mb-2">Assign Meals</h3>
                <p className="text-zinc-400">
                  Assign customized meal plans based on dietary restrictions and
                  schedule.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* // add footer */}
        <footer>
          <hr />
          <div className="flex justify-between ">
          <div className="mx-24">
          <img src={icon} alt="font" className="h-[80px]  mt-10   " />
          <p className="text-white ml-[90px]">A product by <a href="https://github.com/JatinMehta007"><span className="text-yellow-500"> Jatin Mehta</span></a></p>
          <p className="text-white ml-[90px]  mb-16">A product by <a href="https://twitter.com/JatinMehta35630"> <span className="text-yellow-500"> @JatinMehta35630 </span></a></p>
          </div>

          <div className="mx-32">
            <a href="https://github.com/JatinMehta007/DocPlatter" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="github-icon" className="h-10 mt-10 " />
            </a>
            <a href="https://www.linkedin.com/in/jatin-mehta-a70a0025a/" target="_blank" rel="noopener noreferre">
            <img src={linkedin} alt="github-icon" className="h-10 mt-10" />
            </a>
          </div>
          </div>
        </footer>
      </BackgroundBeamsWithCollision>
    </div>
  );
};
