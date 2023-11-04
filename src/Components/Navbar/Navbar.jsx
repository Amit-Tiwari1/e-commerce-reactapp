import React, { useState } from "react";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setmenu] = useState("Shop");
  return (
    <div className="flex justify-around p-4 shadow-md">
      <div className="flex items-center gap-4">
        <img src={logo} alt="" />
        <p className="text-[#171717] text-4xl from-neutral-950 ">Shopper</p>
      </div>
      <ul className="flex items-center gap-8 text-[#626262] text-xl from-neutral-800  ">
        <li
          className="flex flex-col justify-center items-center cursor-pointer gap-1"
          onClick={() => setmenu("Shop")}
        >
          <Link to="/">Shop</Link>
          {menu === "Shop" ? <hr className="navhr" /> : <></>}
        </li>
        <li
          className="flex flex-col justify-center items-center cursor-pointer gap-1 "
          onClick={() => {
            console.log("men"), setmenu("Men");
          }}
        >
          <Link to="/mens">Men</Link>
          {menu === "Men" ? <hr className="navhr" /> : <></>}
        </li>
        <li
          className="flex flex-col justify-center items-center cursor-pointer gap-1 "
          onClick={() => {
            setmenu("Women");
          }}
        >
          <Link to="/womens"> Women</Link>
          {menu === "Women" ? <hr className="navhr" /> : <></>}
        </li>
        <li
          className="flex flex-col justify-center items-center cursor-pointer gap-1 "
          onClick={() => {
            setmenu("Kids");
          }}
        >
          <Link to="kids">Kids</Link>
          {menu === "Kids" ? <hr className="navhr" /> : <></>}
        </li>
      </ul>
      <div className="flex items-center gap-11">
        <Link to="login">
          {" "}
          <button className="w-40 h-14 outline-none border border-sky-[#7a7a7a] rounded-3xl color-[#515151] text-xl font-medium bg-white cursor-pointer active:bg-[#f3f3f3] ">
            Login
          </button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="carticon" />
        </Link>
        <div className="w-6 h-6 flex justify-center -mt-9 -ml-14 rounded-xl text-sm bg-red-600 text-white">
          0
        </div>
      </div>
    </div>
  );
};

export default Navbar;
