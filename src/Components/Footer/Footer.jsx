import React from "react";
import Footer_logo from "../assets/logo_big.png";
import instagram_icon from "../assets/instagram_icon.png";
import pintester_icon from "../assets/pintester_icon.png";
import whatsapp_icon from "../assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-12">
      <div className="flex items-center gap-5">
        <img src={Footer_logo} alt="footerlogo" />
        <p className="text-[#383838] text-5xl font-bold">Shopper</p>
      </div>
      <ul className="flex text-[#121212] gap-12 text-lg cursor-pointer ">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="flex gap-5">
        <div className="footericoncontainer">
          <img
            src={instagram_icon}
            alt="instgram_icon"
            className="
          p-3 pb-1 bg-[#fbfbfb] 
          "
            style={{ border: "1px solid #ebebeb" }}
          />
        </div>
        <div className="footericoncontainer">
          <img
            src={pintester_icon}
            alt="instgram_icon"
            className="
          p-3 pb-1 bg-[#fbfbfb] 
          "
            style={{ border: "1px solid #ebebeb" }}
          />
        </div>
        <div className="footericoncontainer">
          <img
            src={whatsapp_icon}
            alt="instgram_icon"
            className="
          p-3 pb-1 bg-[#fbfbfb] 
          "
            style={{ border: "1px solid #ebebeb" }}
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 w-full mb-7text-[#1a1a1a] text-lg">
        <hr className="w-4/5 border-none rounded-xl h-3 bg-[#c7c7c7]" />
        <p>Copyright @ 2023 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
