import React from "react";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";

const Navbar = () => {
  return (
    <div className="flex justify-around p-4 shadow-md">
      <div className="flex items-center gap-4">
        <img src={logo} alt="" />
        <p className="text-[#171717] text-4xl from-neutral-950 ">Shopper</p>
      </div>
      <ul className="flex items-center gap-8 text-[#626262] text-xl from-neutral-800  ">
        <li className="flex flex-col justify-center items-center cursor-pointer gap-1 ">
          Shop
          <hr className="border-0 w-14 h-1 rounded-xl bg-[#ff4141]" />
        </li>
        <li className="flex flex-col justify-center items-center cursor-pointer gap-1 ">
          Men
          <hr />
        </li>
        <li className="flex flex-col justify-center items-center cursor-pointer gap-1 ">
          Women
          <hr />
        </li>
        <li className="flex flex-col justify-center items-center cursor-pointer gap-1 ">
          Kids
          <hr />
        </li>
      </ul>
      <div className="flex items-center gap-11">
        <button className="w-40 h-14 outline-none border border-sky-[#7a7a7a] rounded-3xl color-[#515151] text-xl ">
          Login
        </button>
        <img src={cart_icon} alt="carticon" />
      </div>
    </div>
  );
};

export default Navbar;
