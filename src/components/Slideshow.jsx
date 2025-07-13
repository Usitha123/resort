// src/components/Slideshow.jsx
import React, { useState, useEffect } from "react";

const images = [
  "/images/slideshows/slide4.jpg",
  "/images/slideshows/slide2.jpg",
  "/images/slideshows/slide3.jpg",
];

const Slideshow = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-[80vh] overflow-hidden relative">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
