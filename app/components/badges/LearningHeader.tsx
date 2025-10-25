import { BookOpen } from "lucide-react";

interface LearningHeaderProps {
    day: string;
    title: string;
}

const LearningHeader = ({ day, title }: LearningHeaderProps) => {
    return (
      <div className="flex items-center justify-between w-[90%] max-w-md bg-[#4AF0B5] rounded-2xl px-5 py-4 shadow-lg">
        {/* Left side: day + title */}
        <div className="flex flex-col text-[#0B0D17]">
          <p className="text-sm font-medium opacity-80">{day}</p>
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>

        {/* Right side: icon container */}
        <div className="flex items-center justify-center w-10 h-10 bg-white rounded-xl shadow-md">
          <BookOpen className="w-6 h-6 text-[#4AF0B5]" />
        </div>
      </div>
    );
}

export default LearningHeader;