"use client";
import './recreate.css'

import { motion } from "framer-motion";
import { useState } from "react";
import { Dumbbell, Waves, Goal, CircleDot } from "lucide-react";

const activities = [
  {
    title: "Swimming Pool",
    subtitle: "Luxury poolside experience",
    details: "Open daily • VIP cabanas • Night lighting",
    image: "/img/rooftop1.jpeg",
    icon: <Waves size={22} />,
  },
  {
    title: "Football Pitch",
    subtitle: "Night games under lights",
    details: "5-a-side • Turf • Book slots",
    image: "/img/primetime football.jpeg",
    icon: <Goal size={22} />,
  },
  {
    title: "Gym",
    subtitle: "Modern fitness zone",
    details: "24/7 • Trainers available",
    image: "/img/gym.jpg",
    icon: <Dumbbell size={22} />,
  },
  {
    title: "Snooker",
    subtitle: "Premium snooker lounge",
    details: "Private tables • Chill bar",
    image: "/img/snooker.jpg",
    icon: <CircleDot size={22} />,
  },
];

export  function WeeklyActivities() {
  return (
    <section className="relative bg-black py-28 px-4 overflow-hidden">
      
      {/* 🔥 PARTICLES */}
      <Particles />

      {/* 🔥 MOUSE SPOTLIGHT */}
      <Spotlight />

      {/* Title */}
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-5xl font-bold text-white tracking-widest">
          RECREATION
        </h2>
        <p className="text-gray-400 mt-3">
          Luxury. Energy. Experience.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
        {activities.map((item, i) => (
          <Card key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}

function Card({ item, index }: any) {
  const [flip, setFlip] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setRotate({
      x: ((y / rect.height) - 0.5) * 25,
      y: ((x / rect.width) - 0.5) * -25,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      className="perspective"
    >
      <div
        onMouseMove={handleMove}
        onMouseLeave={() => setRotate({ x: 0, y: 0 })}
        onClick={() => setFlip(!flip)}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        }}
        className="relative h-[320px] cursor-pointer transition-transform duration-300"
      >
        <div className={`relative w-full h-full transition duration-700 transform-style ${flip ? "rotate-y-180" : ""}`}>
          
          {/* FRONT */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden backface">
            <img src={item.image} className="w-full h-full object-cover scale-110 group-hover:scale-125 transition duration-700" />
            <div className="absolute inset-0 bg-black/60" />

            <div className="absolute bottom-0 p-6">
              <div className="text-yellow-400 mb-2">{item.icon}</div>
              <h3 className="text-white font-semibold">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.subtitle}</p>
            </div>
          </div>

          {/* BACK */}
          <div className="absolute inset-0 rounded-2xl bg-black border border-yellow-500/40 p-6 rotate-y-180 backface flex flex-col justify-center items-center text-center">
            <h3 className="text-white font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.details}</p>

            <button className="mt-4 px-4 py-2 bg-yellow-500 text-black rounded-full text-sm hover:scale-110 transition">
              Book Now
            </button>
          </div>

        </div>

        {/* Glow Pulse */}
        <div className="absolute inset-0 rounded-2xl animate-pulse border border-yellow-500/20"></div>
      </div>
    </motion.div>
  );
}

/* 🔥 PARTICLES */
function Particles() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-ping"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
}

/* 🔥 SPOTLIGHT */
function Spotlight() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
      className="absolute inset-0 z-0"
    >
      <div
        className="absolute w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"
        style={{
          left: pos.x - 200,
          top: pos.y - 200,
        }}
      />
    </div>
  );
}