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
    <div className="w-screen min-h-screen   bg-gradient-to-r from-zinc-900  to-zinc-950 overflow-hidden">
      {/* // navbar */}
      <BackgroundBeamsWithCollision>
        <div className="flex items-center justify-center relative">
          <div className="lg:w-[88%] w-[95%] sm:w-[95%]    bg-black mt-6 sm:mt-10 h-16 fixed top-0 z-50  ">
            <div className="flex justify-between text-white mt-2  font-semibold">
              <img src={icon} alt="logo" className="h-10 mt-[1px] " />
              <button
                className="mr-4 sm:mr-8 bg-white w-20 h-7 text-black rounded-md mt-2"
                onClick={Click}
              >
                <p className="text-center">login</p>
              </button>
            </div>
          </div>
        </div>

        {/* welcome to heliverse */}
        <div className="text-white md:pt-40 pt-20">
          <div className="xl:text-8xl lg:text-7xl text-5xl md:text-6xl  text-center flex justify-center items-center  ">
            <p className="xl:ml-5 text-center   absolute md:mr-[320px] lg:mr-[450px] xl:mr-[500px] xl:mt-3 md:mt-1 lg:mt-[10px] tracking-wider font-extrabold">
              Welcome to
            </p>
            <img src={icon} alt="font" className="xl:h-[180px] md:mt-0 md:h-[110px] lg:h-[148px] md:ml-[307px] lg:ml-[315px]  xl:ml-[500px] h-[110px] mt-20   " />
          </div>

          <div className="">
            <div className="xl:grid xl:grid-flow-col md:mt-10  bg-stone-900 xl:w-[1100px] xl:h-[500px] xl:ml-24 xl:rounded-3xl  ">
              <div className="xl:grid-cols-1 xl:w-[65%] p-10">
                <p className="xl:text-6xl md:text-6xl text-4xl text-center xl:text-left font-extrabold tracking-wider pt-5 xl:ml-20  ">
                  Simple, Smart, and Reliable Hospital Management
                  <span className="xl:text-2xl md:text-2xl lg:text-3xl text-base block font-normal mt-6">
                    Add patients, assign meals, and manage records — all in one
                    place. Join others streamlining hospital care with
                    DocPlatter.
                  </span>
                </p>
              </div>
              <div className="xl:grid-cols-2 xl:absolute xl:h-[400px] xl:w-[500px] 2xl:ml-[720px] xl:ml-[670px]  w-screen xl:mt-28  ">
                <img src={image} alt="" className="ls:rounded-3xl" />
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
          <div className="xl:mx-24 mt-8 md:mt-0">
          <img src={icon} alt="font" className="xl:h-[80px] md:h-[60px] hidden md:block  lg:mt-10 md:mt-5   " />
          <p className="text-white ml-7 xl:ml-[90px] md:ml-[70px]">A product by <a href="https://github.com/JatinMehta007"><span className="text-yellow-500"> Jatin Mehta</span></a></p>
          <p className="text-white ml-7 xl:ml-[90px] mt-2 md:ml-[70px]  mb-16">A product by <a href="https://twitter.com/JatinMehta35630"> <span className="text-yellow-500"> @JatinMehta35630 </span></a></p>
          </div>

          <div className="xl:mx-32 mx-8 ">
            <a href="https://github.com/JatinMehta007/DocPlatter" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="github-icon" className="xl:h-10 h-8 md:mt-8 lg:mt-10 mt-6 ml-2 md:ml-0" />
            </a>
            <a href="https://www.linkedin.com/in/jatin-mehta-a70a0025a/" target="_blank" rel="noopener noreferre">
            <img src={linkedin} alt="github-icon" className="xl:h-10 h-8 md:mt-8 lg:mt-10 mt-3 ml-2 md:ml-0" />
            </a>
          </div>
          </div>
        </footer>
      </BackgroundBeamsWithCollision>
    </div>
  );
};
