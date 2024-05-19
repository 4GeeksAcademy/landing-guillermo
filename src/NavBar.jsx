import React from "react";
import DropDown from "./DropDown";

const NavBar = () => {
  return (
    <div className="bg-slate-700  flex justify-between py-3 sticky top-0">
      <span className="ml-5 text-white">Start TailWind</span>
      <div className="sm:hidden">
        <DropDown />
      </div>
      <div className="flex gap-3 text-gray-400 max-sm:hidden">
        <button className="focus:text-white select-auto">Home</button>
        <button className="focus:text-white">About</button>
        <button className="focus:text-white">Services</button>
        <button className="mr-10 focus:text-white">Contact</button>
      </div>
    </div>
  );
};

export default NavBar;
