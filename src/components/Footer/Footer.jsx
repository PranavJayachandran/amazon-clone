import React from "react";
import amazonlogo from "../../assets/amazon-logo.png";

export default function Footer() {
  return (
    <div className="py-6 flex flex-col bg-[#232f3e]">
      <div className=" flex-1 flex justify-center items-center pt-2">
        <img src={amazonlogo} className="h-9 w-24" />
      </div>
      <div className="flex-1 text-white flex flex-col items-center justify-center">
        <div className="text-[#f2f2f2] font-sans"> This is a AMAZON clone</div>
        <div className="text-sm text-gray-300">
          Created by Pranav Jayachandran
        </div>
      </div>
    </div>
  );
}
