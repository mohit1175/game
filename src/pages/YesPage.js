import React, { useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";

const images = [
  "/img1.jpeg",
  "/img2.jpeg",
  "/img3.jpeg",
];

const YesPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle through images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen relative p-4"
      style={{
        backgroundImage: "url('/ribbon.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
      }}
    >
      {/* Background Music */}
      <audio autoPlay loop>
        <source src="song.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <h1 className="text-5xl font-bold text-[#d63384] text-center mb-5">
        Yayyyyyy!!!
      </h1>

      {/* Slideshow */}
      <div className="w-96 h-96 mb-5 relative">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`memory-${index}`}
            className={`absolute w-full h-full rounded-lg object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <p className="text-xl text-[#7b2869] font-semibold mb-5">
        You are the best Girlfriend 💖😘
      </p>
    </div>
  );
};

export default YesPage;
