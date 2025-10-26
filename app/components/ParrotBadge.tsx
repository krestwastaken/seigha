"use client";
import { useState } from "react";
import Image from "next/image";

interface ParrotBadgeProps {
  logo: string;
  sideText: string;
  positionFromLeft: string | number;
  positionFromLeftLabel: string | number;
  leftandbottom: {
    lengthOfStick: string | number;
    bottom: string | number;
    left: string | number;
  };
  cartesianRotate?: string;
}

const ParrotBadge = ({
  logo,
  sideText,
  positionFromLeft,
  positionFromLeftLabel,
  leftandbottom,
  cartesianRotate = "",
}: ParrotBadgeProps) => {
  const [active, setActive] = useState(false);

  return (
    <div className="w-full flex h-[20dvw] mt-5 items-center relative">
      {/* --- Background Bar --- */}
      <span
        style={{
          position: "absolute",
          backgroundColor: "#99EDC3",
          width: leftandbottom.lengthOfStick,
          height: "1dvh",
          bottom: leftandbottom.bottom,
          left: leftandbottom.left,
          opacity: "25%",
          rotate: cartesianRotate,
          zIndex: 0,
        }}
        className={cartesianRotate === "" ? "hidden" : ""}
      ></span>

      {/* --- Logo Circle --- */}
      <div
        className="absolute top-0 flex items-center justify-center w-[20dvw] h-[20dvw] cursor-pointer"
        style={{
          left:
            typeof positionFromLeft === "number"
              ? `${positionFromLeft}dvw`
              : positionFromLeft,
        }}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onClick={() => setActive((prev) => !prev)}
      >
        {/* --- Grey / Green Circle --- */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${
            active ? "scale-95" : "opacity-100 scale-100"
          }`}
        >
          <div
            className={`relative flex items-center justify-center w-[15dvw] h-[15dvw] ${
              active ? "bg-[#4AF0B5]" : "bg-[#bfc1d1] opacity-75"
            } rounded-full z-10 overflow-hidden`}
          >
            <Image
              src={logo}
              alt="Bird logo"
              width={150}
              height={150}
              className="z-20"
            />
          </div>
        </div>

        {/* --- Arcs when Active --- */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${
            active ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src="/arcs.png"
            alt="Arcs surrounding the circle"
            width={170}
            height={170}
            className="absolute z-0"
          />
        </div>
      </div>

      {/* --- Side Label --- */}
      <p
        className="text-[#bfc1d1] absolute text-lg"
        style={{
          left:
            typeof positionFromLeftLabel === "number"
              ? `${positionFromLeftLabel}dvw`
              : positionFromLeftLabel,
        }}
      >
        {sideText}
      </p>
    </div>
  );
};

export default ParrotBadge;
