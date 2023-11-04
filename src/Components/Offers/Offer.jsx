import React from "react";
import exclusive_image from "../assets/exclusive_image.png";

const Offer = () => {
  return (
    <div
      className="flex w-2/3 h-[60vh] m-auto px-3 mb-36"
      style={{
        background: "linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%)",
      }}
    >
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="font-semibold text-7xl text-[#171717] mb-5">
          Exclusive
        </h1>
        <h1 className="text-[#171717] text-2xl font-semibold mb-4">
          Offers For You
        </h1>
        <p className="text-[#171717] text-2xl font-semibold mb-3">
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <button className="w-72 h-16 rounded-lg bg-[#ff4141] border-none text-white text-xl font-medium mt-7 cursor-pointer  ">
          Check Now
        </button>
      </div>
      <div className=" flex-1 flex items-center justify-end pt-6">
        <img src={exclusive_image} alt="exclusive img" />
      </div>
    </div>
  );
};

export default Offer;
