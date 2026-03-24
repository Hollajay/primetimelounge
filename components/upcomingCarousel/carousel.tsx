"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const activities = [
  { day: "Monday", title: "Chill & Vibes", image: "/img/hero.jpg" },
  { day: "Tuesday", title: "Ladies Night", image: "/img/tuesday.jpg" },
  { day: "Wednesday", title: "Midweek Groove", image: "/img/wednesday.jpg" },
  { day: "Thursday", title: "Rooftop Thursday", image: "/img/thursday.jpg" },
  { day: "Friday", title: "Night Madness", image: "/img/hero.jpg" },
  { day: "Saturday", title: "Shutdown Party", image: "/img/saturday.jpg" },
  { day: "Sunday", title: "Sunday Chill", image: "/img/sunday.jpg" },
];

export  function UpcomingShows() {
  const [index, setIndex] = useState(0);

  // 🔥 Auto Slide Infinite
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % activities.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-black py-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-[150px] -translate-x-1/2"></div>

      {/* Title */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl text-white font-bold tracking-widest">
          WEEKLY EXPERIENCE
        </h2>
        <p className="text-gray-400 mt-3">
          Every day is a different vibe
        </p>
      </div>

      {/* Slider */}
      <div className="overflow-hidden relative z-10">
        <div
          className="flex gap-6 px-4 transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * 320}px)`,
          }}
        >
          {activities.concat(activities).map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */

function Card({ item }: any) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setRotate({
      x: ((y / rect.height) - 0.5) * 20,
      y: ((x / rect.width) - 0.5) * -20,
    });
  };

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      style={{
        transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
      className="relative min-w-[280px] h-[360px] rounded-2xl overflow-hidden group transition-transform duration-300"
    >
      {/* Image */}
      <img
        src={item.image}
        className="w-full h-full object-cover scale-100 group-hover:scale-125 transition duration-700"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition"></div>

      {/* Day Badge */}
      <div className="absolute top-4 left-4 px-3 py-1 text-xs bg-yellow-500 text-black rounded-full shadow-[0_0_15px_rgba(255,215,0,0.7)]">
        {item.day}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 p-5">
        <h3 className="text-white text-lg font-semibold">
          {item.title}
        </h3>
      </div>

      {/* Glow Border */}
      <div className="absolute inset-0 border border-transparent group-hover:border-yellow-500 rounded-2xl transition"></div>
    </div>
  );
}