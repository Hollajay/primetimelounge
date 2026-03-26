"use client";

import { motion } from "framer-motion";

export default function RooftopParallax() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">

      {/* 🎥 VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video/rooftop.mp4" type="video/mp4" />
      </video>

      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* ✨ GRADIENT FADE (TOP & BOTTOM) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80"></div>

      {/* 💎 CONTENT */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white">
            Rooftop Experience
          </h2>

          <p className="text-gray-300 mt-6 text-lg leading-relaxed">
            Elevate your nights above the city lights. Our rooftop offers a 
            perfect blend of luxury, music, and breathtaking views — creating 
            an atmosphere where every moment feels exclusive. Whether you're 
            enjoying a quiet evening or vibing with friends, this is where 
            unforgettable experiences come to life.
          </p>

          {/* 🔥 CTA */}
          <button className="mt-8 px-8 py-4 bg-yellow-500 text-black font-semibold rounded-full hover:scale-105 transition">
            Book a Table
          </button>
        </motion.div>
      </div>
    </section>
  );
}