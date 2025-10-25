import Image from "next/image";

const Logo = () => {
  return (
    <div className="relative flex items-center justify-center w-44 h-44 bg-[#4AF0B5] rounded-full overflow-visible">
      {/* Outer Arcs */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Inner Arc */}
        <div
          className="
            absolute w-[125%] h-[125%] 
            border-28 border-[#3D4E91]/80 
            rounded-full 
            border-t-transparent
            border-l-transparent
            border-r-transparent
            rotate-[-15deg]
          "
        />

        {/* Outer Arc */}
        <div
          className="
            absolute w-[150%] h-[150%] 
            border-20 border-[#4A5BCF]/80 
            rounded-full 
            border-b-transparent
            border-l-transparent
            border-r-transparent
            rotate-15
          "
        />
      </div>

      {/* Bird Logo */}
      <Image
        src="/bird-logo.png"
        alt="Bird logo"
        width={150}
        height={150}
        className="z-10"
      />

      {/* Label Circle (“B”) */}
      <div className="absolute right-[27%] top-[50%] translate-y-[-15%] bg-[#1E2A78] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold shadow-md">
        B
      </div>
    </div>
  );
};

export default Logo;
