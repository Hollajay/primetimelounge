'use client'

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "/img/hotel-exterior.jpg",
  "/img/hotel-room.jpg",
  "/img/hotel-interior.jpg",
  "/img/hotel-lounge.jpg",
];

function HotelSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden rounded-2xl">
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index]}
          alt="Hotel"
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        />
      </AnimatePresence>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}