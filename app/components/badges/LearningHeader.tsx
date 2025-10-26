"use client";
import { BookOpen } from "lucide-react";

interface LearningHeaderProps {
  day: string;
  title: string;
}

const LearningHeader = ({ day, title }: LearningHeaderProps) => {
  return (
    <div className="w-[90vw] max-w-6xl mx-auto bg-[#4AF0B5] rounded-3xl px-4 sm:px-6 md:px-10 py-4 sm:py-5 md:py-6 shadow-xl flex items-center justify-between transition-all duration-300">
      {/* Left Section: Text */}
      <div className="flex flex-col text-[#0B0D17]">
        <p className="text-xs sm:text-sm md:text-base font-medium opacity-80">
          {day}
        </p>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold leading-snug">
          {title}
        </h2>
      </div>

      {/* Right Section: Icon */}
      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white rounded-2xl shadow-md">
        <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#4AF0B5]" />
      </div>
    </div>
  );
};

export default LearningHeader;
