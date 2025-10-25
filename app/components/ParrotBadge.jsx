import Image from "next/image";

const ParrotBadge = () => {
  return (
    <div className="relative flex items-center justify-center w-40 h-40">
      {/* Arcs Image (outer layer) */}
      <Image
        src="/arcs.png"
        alt="Arcs surrounding the circle"
        width={170}
        height={170}
        className="absolute z-0"
      />

      {/* Green Background (slightly smaller, hugs arcs) */}
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
  );
};

export default ParrotBadge;
