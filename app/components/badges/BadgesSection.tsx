import Badge from "@/app/components/badges/Badge";
import LearningHeader from "./LearningHeader";

const BadgesSection = () => {
  const badges = [
    {
      imageSrc: "/bird-logo.png",
      arcsSrc: "/arcs.png",
      bgColor: "#4AF0B5",
      label: "Teach the parrot",
    },
    {
      imageSrc: "/lion-logo.png",
      arcsSrc: "/arcs.png",
      bgColor: "#FFD166",
      label: "Get taught by an AI avatar",
    },
    {
      imageSrc: "/owl-logo.png",
      arcsSrc: "/arcs.png",
      bgColor: "#4A90E2",
      label: "Teach a peer",
    },
    {
      imageSrc: "/fish-logo.png",
      arcsSrc: "/arcs.png",
      bgColor: "#6DD3CE",
      label: "Get taught by peer",
    },
    {
      imageSrc: "/cat-logo.png",
      arcsSrc: "/arcs.png",
      bgColor: "#FF6F91",
      label: "Life coach",
    },
  ];

  return (
    <div className="relative flex flex-col items-center py-20 space-y-12">
      {/* Header at the top */}
      <LearningHeader day="Day 1" title="AI fundamentals" />

      {badges.map((badge, index) => (
        <div key={index} className="relative w-full flex flex-col items-center">
          {/* Zig-zag layout */}
          <div
            className={`relative flex items-center justify-center ${
              index % 2 === 0 ? "translate-x-[-60px]" : "translate-x-[60px]"
            } transition-all duration-300`}
          >
            <Badge {...badge} />
          </div>

          {/* Diagonal connector to next badge */}
          {index < badges.length - 1 && (
            <svg
              className="w-full max-w-[200px] h-20"
              viewBox="0 0 200 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d={
                  index % 2 === 0
                    ? "M100 0 L200 80" // slope down-right
                    : "M100 0 L0 80" // slope down-left
                }
                stroke="#444A6B"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};

export default BadgesSection;
