import React from "react";
import loaderImg from "../../assets/images/loader.png"; 

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center">
     
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

      <img
        src={loaderImg}
        alt="Loading..."
        className="w-40 h-40 animate-pulse relative z-10"
      />

   <h1 className="relative z-10 mt-4 text-center drop-shadow-lg">
  {/* Main brand name */}
  <span className="block text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#C79A5E]">
    PERA 360
  </span>

  {/* Subtitle / Authority name */}
  <span className="block mt-2 text-lg sm:text-xl md:text-2xl font-medium text-[#C79A5E]">
    Punjab Enforcement & Regulatory Authority
  </span>
</h1>


  
    </div>
  );
}
