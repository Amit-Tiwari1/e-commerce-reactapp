import React from "react";
import "./Hero.css";
import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_image from "../assets/hero_image.png";

const Hero = () => {
  return (
    <div
      className="h-screen flex"
      style={{ background: "linear-gradient(180deg, #fde1ff, #e1ffea22 60%)" }}
    >
      <div className="flex-1 flex flex-col justify-start gap-5 p-48 leading-tight">
        <h2 className="bg-red text-[#090909] text-2xl text font-semibold">
          New Arrival Only
        </h2>
        <div>
          <div className="flex items-center gap-5">
            <p className="text-[#171717] text-8xl font-bold">new</p>
            <img src={hand_icon} className="w-24" />
          </div>
          <p className="text-[#171717] text-8xl font-bold">collection</p>
          <p className="text-[#171717] text-8xl font-bold">for everyone</p>
        </div>
        <div className="flex justify-center items-center gap-4 w-80 h-20 rounded-[75px] mt-8 bg-[#ff4141] text-white text-2xl font-medium">
          <div>Latest Collection</div>
          <img src={arrow_icon} />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img src={hero_image} alt="heroimage" />
      </div>
    </div>
  );
};

export default Hero;
