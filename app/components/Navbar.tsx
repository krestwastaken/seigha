"use client";
import { useState } from "react";
import { Home, Calendar, Users, Trophy, User } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const navItems = [
    { name: "Home", icon: Home, key: "home" },
    { name: "Upcoming", icon: Calendar, key: "upcoming" },
    { name: "Community", icon: Users, key: "community" },
    { name: "Leaderboard", icon: Trophy, key: "leaderboard" },
    { name: "Profile", icon: User, key: "profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#0B0D17] text-white shadow-[0_-2px_10px_rgba(0,0,0,0.25)] z-50">
      <div className="flex justify-around items-center h-16 sm:h-18 md:h-20">
        {navItems.map(({ name, icon: Icon, key }) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`flex flex-col items-center justify-center text-xs sm:text-sm transition-all ${
              active === key
                ? "text-[#4AF0B5]"
                : "text-[#bfc1d1] hover:text-[#4AF0B5]"
            }`}
          >
            <Icon
              className={`w-5 h-5 sm:w-6 sm:h-6 mb-1 transition-all ${
                active === key ? "scale-110" : "scale-100"
              }`}
            />
            <span>{name}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
