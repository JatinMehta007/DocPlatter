import { useState } from "react";
import { useNavigate } from "react-router";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { BACKEND_URL } from "../../config";
import axios from "axios";
import { Spinner } from "./skeleton/spinner";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const createUser = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/create`, {
        username,
        email,
        password,
      });
      console.log("Signup response:", response.data);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/admin");
      }
    } catch (err) {
      console.error("Signup error:", err);
      if (err.response && err.response.data?.message) {
        setError(err.response.data.message);
        alert("enter the valid email id");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm  ">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="  w-full h-screen flex justify-center  bg-gradient-to-r from-zinc-900  to-zinc-950 ">
      <div className="w-[400px] bg-zinc-950 border absolute mt-52 rounded-lg  border-zinc-600 ">
        <p className="text-white  text-center font-bold tracking-wide mt-2 text-xl">
          Join DocPlatter
        </p>
        {/* <p className="text-white text-center font-bold">Already have an account?</p> */}
        <div className="text-white text-center font-bold mt-2">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-blue-400  hover:text-blue-600 transition-all duration-200"
          >
            Login
          </button>
        </div>
        <div className="p-6 ml-2 tracking-wider">
          <p className="text-white font-medium  ">
            Name
            <Input
              type="text"
              placeholder="Jack"
              className=" "
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </p>
          <p className="text-white mt-4 font-medium">
            Email Address
            <Input
              type="text"
              placeholder="docplatter@fc.com"
              className=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </p>
          <p className="text-white mt-4 font-medium">
            Password
            <Input
              type="password"
              placeholder="••••••••••"
              className=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </p>

          {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}

          <button
            onClick={createUser}
            disabled={loading}
            className="group/btn relative mt-5 block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] border border-t-gray-700 border-b-gray-700 border-r-0 border-l-0 cursor-pointer"
            type="submit"
          >
            Sign up →
            <BottomGradient />
          </button>
          <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
        </div>
      </div>
    </div>
  );
};

export const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};
