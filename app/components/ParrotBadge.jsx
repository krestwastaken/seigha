"use client";
import { useState } from "react";
import Image from "next/image";

const ParrotBadge = () => {
  const [active, setActive] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center w-40 h-40 cursor-pointer"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={() => setActive((prev) => !prev)}
    >
      {/* --- Grey State (Default) --- */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
          active ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Grey Circle */}
        <div className="relative flex items-center justify-center w-[120px] h-[125px] bg-[#C7C9D1] rounded-[50%] z-10 overflow-hidden">
          {/* Bird Logo */}
          <Image
            src="/bird-logo.png"
            alt="Bird logo"
            width={150}
            height={150}
            className="z-20"
          />
        </div>
      </div>

      {/* --- Green State (Hover/Active) --- */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
          active ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Arcs */}
        <Image
          src="/arcs.png"
          alt="Arcs surrounding the circle"
          width={170}
          height={170}
          className="absolute z-0"
        />

        {/* Green Circle */}
        <div className="relative flex items-center justify-center w-[120px] h-[125px] bg-[#4AF0B5] rounded-[50%] z-10 overflow-hidden">
          {/* Bird Logo */}
          <Image
            src="/bird-logo.png"
            alt="Bird logo"
            width={150}
            height={150}
            className="z-20"
          />
        </div>
      </div>
    </div>
  );
};

export default ParrotBadge;
