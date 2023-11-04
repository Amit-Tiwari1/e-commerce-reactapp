import React from "react";

const NewsLetter = () => {
  return (
    <div
      className="w-2/3 h-[40vh] flex flex-col items-center justify-center m-auto py-36 mb-36 gap-7"
      style={{
        background: "linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%",
      }}
    >
      <h1 className="text-[#454545] text-5xl font-semibold">
        Get Exclusive offer on your email
      </h1>
      <p className="text-[#454545] text-xl ">
        Subscribe to our newletter and stay updated
      </p>
      <div
        className="flex items-center justify-between bg-white max-w-5xl h-20"
        style={{ borderRadius: "80px", border: "1px solid #e3e3e3" }}
      >
        <input
          type="email"
          placeholder="Your email id"
          className=" h-16 bg-black text-white text-4 cursor-pointer items-center pl-5"
          style={{ borderRadius: "80px", width: "500px" }}
        />
        <button className="p-5">Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
