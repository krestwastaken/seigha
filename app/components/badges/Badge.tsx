"use client";
import { useState } from "react";
import Image from "next/image";

interface BadgeProps {
  imageSrc: string;
  arcsSrc: string;
  bgColor: string;
  label: string;
}

const Badge = ({ imageSrc, arcsSrc, bgColor, label }: BadgeProps) => {
  const [active, setActive] = useState(false);

  return (
    <div className="flex items-center justify-center space-x-3 select-none">
      <div
        className="relative flex items-center justify-center w-40 h-40 cursor-pointer"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onClick={() => setActive((prev) => !prev)}
      >
        {/* Default (Grey) */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${
            active ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          <div className="relative flex items-center justify-center w-[90px] h-[95px] bg-[#C7C9D1] rounded-full z-10 overflow-hidden">
            <Image src={imageSrc} alt={label} width={150} height={150} />
          </div>
        </div>

        {/* Active (Colored + Arcs) */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${
            active ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <Image
            src={arcsSrc}
            alt="Arcs"
            width={120}
            height={120}
            className="absolute z-0"
          />
          <div
            className={`relative flex items-center justify-center w-[90px] h-[95px] rounded-full z-10 overflow-hidden`}
            style={{ backgroundColor: bgColor }}
          >
            <Image src={imageSrc} alt={label} width={150} height={150} />
          </div>
        </div>
      </div>

      <p className="text-[#bfc1d1] text-lg translate-y-[-10%] tracking-wide">
        {label}
      </p>
    </div>
  );
};

export default Badge;
