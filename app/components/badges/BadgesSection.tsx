import Badge from "@/app/components/badges/Badge";
import LearningHeader from "./LearningHeader";
import ParrotBadge from "../ParrotBadge";

const BadgesSection = () => {
  const badges = [
    {
      imageSrc: "/bird-logo.png",
      arcsSrc: "/arcs.png",
      bgColor: "#4AF0B5",
      label: "Teach the parrot",
      positionFromLeft: 45,
      positionFromLeftLabel: 65,
      cartesianRotate: "",
      left: "",
      bottom: "",
      lengthOfStick: "",
    },
    {
      imageSrc: "/bird-logo.png",
      arcsSrc: "/arcs.png",
      bgColor: "#FFD166",
      label: "Get taught by an AI avatar",
      positionFromLeft: 10,
      positionFromLeftLabel: 30,
      cartesianRotate: "-37Deg",
      left: 70,
      bottom: 80,
      lengthOfStick: "40dvw",
    },
    {
      imageSrc: "/bird-logo.png",
      arcsSrc: "/arcs.png",
      bgColor: "#4A90E2",
      label: "Teach a peer",
      positionFromLeft: 70,
      positionFromLeftLabel: 45,
      cartesianRotate: "23Deg",
      left: 70,
      bottom: 85,
      lengthOfStick: "35dvh",
    },
    {
      imageSrc: "/bird-logo.png",
      arcsSrc: "/arcs.png",
      bgColor: "#6DD3CE",
      label: "Get taught by peer",
      positionFromLeft: 10,
      positionFromLeftLabel: 30,
      cartesianRotate: "-25Deg",
      left: 70,
      bottom: 85,
      lengthOfStick: "35dvh",
    },
    {
      imageSrc: "/bird-logo.png",
      arcsSrc: "/arcs.png",
      bgColor: "#FF6F91",
      label: "Life coach",
      positionFromLeft: 70,
      positionFromLeftLabel: 45,
      cartesianRotate: "24Deg",
      left: 70,
      bottom: 85,
      lengthOfStick: "35dvh",
    },
  ];

  return (
    <div className="relative flex flex-col w-full items-center">
      {/* Header at the top */}
      <LearningHeader day="Day 1" title="AI fundamentals" />
      {/* <div className="w-1/5  bg-amber-300 "> */}
      {badges.map((item, index) => (
        <ParrotBadge
          key={index}
          logo={item.imageSrc}
          sideText={item.label}
          positionFromLeft={item.positionFromLeft}
          positionFromLeftLabel={item.positionFromLeftLabel}
          cartesianRotate={item.cartesianRotate}
          leftandbottom={{
            left: item.left,
            bottom: item.bottom,
            lengthOfStick: item.lengthOfStick,
          }}
        />
      ))}
      {/* <ParrotBadge />
      <ParrotBadge />
      <ParrotBadge />
      <ParrotBadge /> */}
      {/* </div> */}
    </div>
  );
};

export default BadgesSection;
