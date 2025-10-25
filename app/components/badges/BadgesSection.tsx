import Badge from '@/app/components/badges/Badge'

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
    <div className="flex flex-wrap gap-10 justify-center items-center">
      {badges.map((badge, index) => (
        <Badge key={index} {...badge} />
      ))}
    </div>
  );
};

export default BadgesSection;
