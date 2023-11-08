import React from "react";

const LoginSingup = () => {
  return (
    <div className="w-full h-[80vh] bg-[#fce3fe] pt-24 ">
      <div className="w-[580px] h-[600px] bg-white m-auto py-10 px-14">
        <h1 className="mx-5 text-base">Signup</h1>
        <div className="flex flex-col gap-[29px] mt-8">
          <input
            type="text"
            placeholder="Your Name"
            className="h-16 w-full pl-5 outline-none text-[#5c5c5c] text-lg"
            style={{ border: "1px solid #c9c9c9" }}
          />
          <input
            type="email"
            placeholder="Your email"
            className="h-16 w-full pl-5 outline-none text-[#5c5c5c] text-lg"
            style={{ border: "1px solid #c9c9c9" }}
          />
          <input
            type="password"
            placeholder="Password"
            className="h-16 w-full pl-5 outline-none text-[#5c5c5c] text-lg"
            style={{ border: "1px solid #c9c9c9" }}
          />
        </div>
        <button
          className="text-white bg-[#ff4141] cursor-pointer font-medium"
          style={{
            width: "450px",
            height: "65px",
            margin: " auto",
            marginTop: "10px",
          }}
        >
          Continue
        </button>
        <p className=" mt-5 text-[#5c5c5c] text-lg font-medium">
          Already have an account ?{" "}
          <span className="text-[#ff4141] font-semibold">Login here</span>
        </p>
        <div className="flex items-center mt-6 gap-5 text-[#5c5c5c] text-lg font-medium">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSingup;
