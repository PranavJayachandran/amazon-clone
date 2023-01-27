import React from "react";
import { useState } from "react";
import amazonlogo from "../../assets/ambg.png";
import { useDispatch, useSelector } from "react-redux";
import { addUserName } from "../../redux/features/CounterSlice";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();

  const handle = (e) => {
    setUserName(e.target.value);
  };
  const signin = () => {
    console.log("Asd");
    dispatch(addUserName(userName));
  };

  return (
    <div className="test flex justify-center h-screen items-center">
      <div className="bg-white text-black w-60 sm:w-[500px] px-4  border border-black">
        <div className="">
          <div className="flex justify-center">
            <img src={amazonlogo} />
          </div>
          <div className="text-2xl mb-8">Sign In</div>
          <div className="">
            <div className="text-lg pb-2">Username</div>
            <input
              className="px-2 h-10 border border-black w-full rounded-lg"
              value={userName}
              onChange={handle}
            ></input>
          </div>
          <Link to="/home">
            <div
              className="rounded-lg text-xl py-2 mb-8 px-4 flex justify-center my-4 bg-amber-300 cursor-pointer hover:bg-amber-400"
              onClick={signin}
            >
              <div className="signin">Sign in</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
