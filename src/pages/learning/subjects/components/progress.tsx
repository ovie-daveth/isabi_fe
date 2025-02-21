import React from "react";

interface CircularProgressProps {
  progress: number;
}

const getColor = (progress: number) => {
  if (progress <= 30) return "stroke-blue-500";
  if (progress <= 60) return "stroke-red-500";
  return "stroke-green-500";
};

const CircularProgress: React.FC<CircularProgressProps> = ({ progress }) => {
  const radius = 30;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative w-16 h-16">
      <svg
        className="w-full h-full transform -rotate-90"
        viewBox="0 0 100 100"
      >
        {/* Background Circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          strokeWidth={strokeWidth}
          className="stroke-gray-200 fill-none"
        />
        {/* Progress Circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          strokeWidth={strokeWidth}
          className={`fill-none transition-all duration-300 ease-in-out ${getColor(progress)}`}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      {/* Percentage Text */}
      {/* <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
        {progress}%
      </div> */}
    </div>
  );
};

export default CircularProgress;
