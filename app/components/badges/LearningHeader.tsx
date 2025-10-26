"use client";
import { BookOpen } from "lucide-react";

interface LearningHeaderProps {
  day: string;
  title: string;
}

const LearningHeader = ({ day, title }: LearningHeaderProps) => {
  return (
    <div className="w-[90vw] max-w-6xl mx-auto bg-[#4AF0B5] rounded-2xl px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-3 shadow-xl flex items-center justify-between transition-all duration-300">
      {/* Left Section: Text */}
      <div className="flex flex-col text-[#0B0D17]">
        <p className="text-sm font-medium opacity-70">{day}</p>
        <h2 className="text-base sm:text-xl md:text-2xl font-semibold leading-snug">
          {title}
        </h2>
      </div>

      {/* Right Section: Darker green area with white icon box */}
      <div className="flex items-center justify-center bg-[#36C49B] rounded-xl px-4 py-2.5 translate-x-4 ">
        <div className="flex items-center justify-center w-12 h-12 p-1.5 bg-white rounded-lg shadow-md">
          <BookOpen className="w-6 h-6 text-[#36C49B]" />
        </div>
      </div>
    </div>
  );
};

export default LearningHeader;
