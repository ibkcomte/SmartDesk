import React from "react";
import passport from "../assets/passport.png";
const PageOne = () => {
  
  return (
    <div className="flex flex-cols-6 mt-6 flex-wrap">
      <h3 className="font-extrabold text-6xl p-18 ">
        Hello, <h3 className="text-lime-200">My name is </h3>
        <div className="flex pb-4 font-['Poppins'] text-[80px] font-extrabold tracking-tighter">
          <span className="text-lime-200 mr-2 relative">
            DADA
            <span className="absolute-top-[15px] -right-[5px] w-2 h-2 bg-[#38a86a] transform rotate-45"></span>
          </span>
          <span className="text-white pl-3 custom-text-effect">IBUKUN</span>
        </div>
        <h2 className="italic font-extrabold text-2xl font-serif">
          {" "}
          I Am A Web Developer
        </h2>
        <button
          type="submit"
          className="bg-auto hover:bg-lime-200 text-black text-2xl font-serif hover:text-white-200 mt-8 py-4 px-4 transition duration-300 rounded-full shadow-md"
        >
          DOWNLOAD CV
        </button>
      </h3>

      <div className="flex flex-col items-center p-12 bg-white rounded-xl">
        <img
          src={passport} 
          alt="Dada Ibukun, Professional Developer"
          className="w-82 h-82 rounded-full object-cover border-4 border-lemon-400 mb-4"
        />
        <button
          type="submit"
          className="bg-auto hover:bg-lime-200 text-black text-small font-serif hover:text-white-200 py-8 px-8 transition duration-300 rounded-full shadow-md"
        >
          3 + YEARS <h6>EXPERIENCE </h6>
        </button>
      </div>
    </div>
  );
};

export default PageOne;
