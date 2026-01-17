"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

const CircularText = () => {
  const text = "BOOK YOUR SAVANNA TRAVEL • ";

  return (
    <div className="absolute left-20 -bottom-14 lg:bottom-2 hidden md:flex z-30  items-center justify-center w-64 h-64">
      {/* Badge Container */}
      <div className="relative w-40 h-40 flex items-center justify-center rounded-full border-2 border-[#E89344] bg-[#FFF9F0] shadow-sm">
        {/* Rotating Text */}
        <svg
          className="absolute inset-0 w-full h-full animate-spin-slow"
          viewBox="0 0 100 100"
        >
          <defs>
            <path
              id="circlePath"
              d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
          </defs>

          <text className="text-[11px] font-extrabold uppercase tracking-[0.25em] fill-[#4A3728]">
            <textPath href="#circlePath">{text.repeat(2)}</textPath>
          </text>
        </svg>

        {/* Center Arrow (Static) */}
        <div className="z-10 flex h-20 w-20  p-4 items-center justify-center rounded-full border border-[#E89344] bg-white">
          <ArrowUpRight className="h-6 w-6 text-[#E89344] stroke-[2.5]" />
        </div>
      </div>
    </div>
  );
};

export default CircularText;
