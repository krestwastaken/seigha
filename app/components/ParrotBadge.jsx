"use client";

import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="relative flex items-center justify-center w-64 h-64 bg-[#4AF0B5] rounded-full overflow-hidden">
      {/* Outer Rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-[110%] h-[110%] rounded-full border-[16px] border-[#3D4E91]/60 border-t-transparent" />
        <div className="absolute w-[130%] h-[130%] rounded-full border-[8px] border-[#4A5BCF]/70 border-b-transparent" />
      </div>

      {/* Bird Logo */}
      <Image
        src="/bird-logo.png"
        alt="Bird logo"
        width={150}
        height={150}
        className="z-10"
      />

      {/* Label Circle (small “B” dot) */}
      <div className="absolute right-[30%] top-[50%] translate-y-[-20%] bg-[#1E2A78] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold shadow-md">
        B
      </div>
    </div>
  );
};

export default Logo;
