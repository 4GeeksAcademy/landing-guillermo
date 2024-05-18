import React from "react";

const NavBar = () => {
  return (
    <div className="bg-slate-700  flex justify-between py-3 sticky top-0">
      <span className="ml-5 text-white">Start TaildWind</span>
      <div className="flex gap-3 text-gray-400 focus-within:text-white">
        <span className="">Home</span>
        <span className="">About</span>
        <span className="">Services</span>
        <span className="mr-2">Contact</span>
      </div>
    </div>
  );
};

export default NavBar;
