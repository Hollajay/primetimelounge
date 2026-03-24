"use client";

import { motion } from "framer-motion";

export default function CloudNineSection() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#020617] via-[#0f172a] to-black">
      
      {/* ☁️ FLOATING CLOUDS BACKGROUND */}
      <Clouds />

      {/* 🌟 MAIN IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/img/rooftop4.jpeg"
          alt="Cloud 9"
          className="w-full h-full object-cover opacity-40"
        />

        {/* Soft overlay */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      </div>

      {/* ✨ LIGHT GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-blue-400/20 blur-[120px] rounded-full"></div>

      {/* 📝 CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-widest">
          CLOUD 9
        </h1>

        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
          Elevate your nightlife experience above the ordinary.  
          Luxury. Vibes. Pure atmosphere.
        </p>

        <button className="mt-6 px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-full border border-white/20 hover:bg-white/20 transition">
          Explore Experience
        </button>
      </motion.div>
    </section>
  );
}

/* ☁️ CLOUD COMPONENT */
function Clouds() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      
      {/* Cloud Layer 1 */}
      <motion.img
        src="/img/cloud1.png"
        className="absolute top-10 left-[-200px] w-[600px] opacity-30"
        animate={{ x: [0, 300, 0] }}
        transition={{ duration: 60, repeat: Infinity }}
      />

      {/* Cloud Layer 2 */}
      <motion.img
        src="/img/cloud2.png"
        className="absolute bottom-0 right-[-200px] w-[700px] opacity-20"
        animate={{ x: [0, -300, 0] }}
        transition={{ duration: 80, repeat: Infinity }}
      />

      {/* Cloud Layer 3 */}
      <motion.img
        src="/img/cloud3.png"
        className="absolute top-1/2 left-[-150px] w-[500px] opacity-25"
        animate={{ x: [0, 200, 0] }}
        transition={{ duration: 70, repeat: Infinity }}
      />
    </div>
  );
}