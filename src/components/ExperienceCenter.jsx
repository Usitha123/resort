import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "RITIGALA",
    image: "/public/images/experiences/ritigala.jpg",
  },
  {
    title: "KIRINDA BEACH",
    image: "/images/kirinda.jpg",
  },
  {
    title: "BUNDALA NATIONAL PARK",
    image: "/images/bundala.jpg",
  },
  {
    title: "NIMALAWA ARANYA SENASANAYA",
    image: "/images/nimalawa.jpg",
  },
];

export default function ExperienceCenter() {
  return (
    <div className="bg-[#4A4630] text-white py-12">
      <h2 className="text-4xl font-light text-center mb-10">
        Center of Great Experience
      </h2>

      <div className="relative flex items-center justify-center gap-4 max-w-6xl mx-auto overflow-hidden">
        {/* Left Arrow */}
        <button className="absolute left-0 z-10 bg-black/50 hover:bg-black/70 text-white p-2">
          <ChevronLeft />
        </button>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="relative h-[300px] bg-cover bg-center group"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute bottom-0 w-full bg-black/50 text-white text-sm text-left px-4 py-2 group-hover:bg-black/70">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="absolute right-0 z-10 bg-black/50 hover:bg-black/70 text-white p-2">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
