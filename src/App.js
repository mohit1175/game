import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./index.css";

const App = () => {
  const nextPage = () => {
    window.location.href = "/yes";
  };

  const moveButton = () => {
    const noButton = document.getElementById("noButton");
    if (noButton) {
      const maxX = window.innerWidth - noButton.offsetWidth - 20;
      const maxY = window.innerHeight - noButton.offsetHeight - 20;
      const x = Math.random() * maxX;
      const y = Math.random() * maxY;
      noButton.style.position = "absolute";
      noButton.style.left = `${x}px`;
      noButton.style.top = `${y}px`;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-600 relative">
      <h1 className="text-5xl font-bold text-white text-center mb-5">
        Will you be my Valentine, Yashweeee? 💖
      </h1>
      <img src="/cute-cat.gif" alt="Cute cat" className="w-48 mb-5" />
      <div className="flex flex-row gap-16">
        <button className="bg-blue-400 text-white px-6 py-3 rounded-lg transition duration-300 ease-in-out transform hover:bg-pink-200 hover:text-pink-500 hover:scale-110" onClick={nextPage}>Yes</button>
        <button id="noButton" className="bg-red-700 text-white px-6 py-3 rounded-lg " onMouseOver={moveButton}>No</button>
      </div>
    </div>
  );
};

export default App;