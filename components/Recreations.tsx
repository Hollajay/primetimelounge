"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Dumbbell, Waves, Goal, CircleDot } from "lucide-react";

const activities = [
  {
    title: "Swimming Pool",
    subtitle: "Luxury poolside experience",
    image: "/img/swimming.jpg",
    icon: <Waves size={22} />,
  },
  {
    title: "Football Pitch",
    subtitle: "Night games under lights",
    image: "/img/football.jpg",
    icon: <Goal size={22} />,
  },
  {
    title: "Gym",
    subtitle: "Modern fitness zone",
    image: "/img/gym.jpg",
    icon: <Dumbbell size={22} />,
  },
  {
    title: "Snooker",
    subtitle: "Premium snooker lounge",
    image: "/img/snooker.jpg",
    icon: <CircleDot size={22} />,
  },
];

export  function RecreationSection() {
  return (
    <section className="relative bg-black py-24 px-4 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-yellow-500/10 blur-[150px] -translate-x-1/2"></div>

      {/* Title */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
          Recreation Activities
        </h2>
        <p className="text-gray-400 mt-3">
          Experience luxury beyond nightlife
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
        {activities.map((item, index) => (
          <Card key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

/* ================= CARD ================= */

function Card({ item, index }: any) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * 12;
    const rotateY = ((x / rect.width) - 0.5) * -12;

    setRotate({ x: rotateX, y: rotateY });
  };

  const reset = () => setRotate({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.7 }}
      viewport={{ once: true }}
      className="perspective"
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={reset}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        }}
        className="relative h-[320px] rounded-2xl overflow-hidden transition-transform duration-300 group"
      >
        {/* 🔥 IMAGE */}
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover 
          group-hover:scale-110 transition duration-700"
        />

        {/* 🔥 GRADIENT OVERLAY (NOT TOO DARK) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        {/* 🔥 CONTENT */}
        <div className="relative h-full p-6 flex flex-col justify-end">
          
          <div className="mb-3 text-yellow-400 group-hover:scale-110 transition">
            {item.icon}
          </div>

          <h3 className="text-white text-xl font-semibold tracking-wide">
            {item.title}
          </h3>

          <p className="text-gray-300 text-sm mt-1">
            {item.subtitle}
          </p>

          {/* 🔥 EXPLORE LINK */}
          <span className="mt-3 text-yellow-400 text-sm opacity-0 group-hover:opacity-100 transition">
            Explore →
          </span>
        </div>

        {/* 🔥 SOFT GLOW (CLEAN, NOT TOO MUCH) */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 shadow-[0_0_30px_rgba(255,215,0,0.4)]"></div>
      </div>
    </motion.div>
  );
}