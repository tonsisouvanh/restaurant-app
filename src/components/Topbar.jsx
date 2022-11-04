import { useContext, useState } from "react";
import { BsSearch } from "react-icons/bs";

import { getAuth, signOut } from "firebase/auth";
import { AuthContext } from "../context/AuthContext"

import { useNavigate } from "react-router-dom";


const Topbar = () => {
  const { dispatch } = useContext(AuthContext)
  const navigate = useNavigate();

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {

      // Sign-out successful.
      dispatch({ type: "LOGOUT" })
      localStorage.removeItem("user")
      navigate("/admin/login")
    }).catch((error) => {
      // An error happened.
      console.log(error.message)
    });
  }

  return (
    <div className="w-full flex flex-col gap-3 justify-center">
      <div className="w-full flex items-center justify-between">
        <h1 className="font-bold text-lg">THAI LAO RESTAURANT MANAGEMENT.</h1>
        <div className="group cursor-pointer relative w-[40px]">
          <img
            className="w-full h-full rounded-full object-cover"
            src="https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg"
            alt=""
          />
          <ul className="absolute hidden group-hover:flex group-hover:flex-col  space-y-1 top-10 right-0 bg-white border shadow-md p-2 rounded-md">
            <li className="hover:text-gray-500 cursor-pointer text-sm whitespace-nowrap">View profile</li>
            <li onClick={handleLogout} className="hover:text-gray-500 cursor-pointer text-sm whitespace-nowrap">Logout</li>
          </ul>
        </div>
      </div>
      <div className="flex rounded-lg items-center gap-2 border px-2 py-1">
        <BsSearch />
        <input className="flex-1 outline-none" type="text" placeholder="Food name" />
      </div>
    </div>
  );
};

export default Topbar;
