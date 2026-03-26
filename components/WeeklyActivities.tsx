"use client";
import './recreate.css'

import { motion } from "framer-motion";
import { useState } from "react";
import { Dumbbell, Waves, Goal, CircleDot } from "lucide-react";

const activities = [
  {
    title: "Monday",
    subtitle: "Karoke Night",
    details: "Host by Yemi . Dj pumpy",
    image: "/img/rooftop1.jpeg",
    
  },
  {
    title: "Tuesday",
    subtitle: "Night games under lights",
    details: "5-a-side • Turf • Book slots",
    image: "/img/primetime football.jpeg",
    
  },
  {
    title: "Wenesday",
    subtitle: "Modern fitness zone",
    details: "24/7 • Trainers available",
    image: "/img/gym.jpg",
   
  },
  {
    title: "Thurdays",
    subtitle: "Premium snooker lounge",
    details: "Private tables • Chill bar",
    image: "/img/snooker.jpg",
   
  },
  {
    title: "Friday",
    subtitle: "Clound 9",
    details: "Private tables • Chill bar",
    image: "/img/snooker.jpg",
    
  },
  {
    title: "Saturday",
    subtitle: "Premium snooker lounge",
    details: "Private tables • Chill bar",
    image: "/img/snooker.jpg",
    
  },
  {
    title: "Sunday",
    subtitle: "Clound 9",
    details: "Private tables • Chill bar",
    image: "/img/snooker.jpg",
    
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
          WEEKLY ACTIVITIES
        </h2>
        <p className="text-gray-400 mt-3">
         Every day is a different vibe  
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.15,
        duration: 0.7,
        ease: "easeOut",
      }}
      className="group"
    >
      {/* CARD */}
      <div className="rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 hover:border-yellow-500/40 transition duration-500">

        {/* IMAGE */}
        <div className="relative h-[220px] overflow-hidden">
          <img
            src={item.image}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />

          {/* 🔥 DAY TAG (TOP LEFT) */}
          <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs text-yellow-400 border border-yellow-500/30">
            {item.title}
          </div>

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-500" />
        </div>

        {/* TEXT BELOW IMAGE */}
        <div className="p-5">
          <div className="text-yellow-400 mb-2">{item.icon}</div>

          <h3 className="text-white font-semibold text-lg">
            {item.subtitle}
          </h3>

          <p className="text-gray-400 text-sm mt-1">
            {item.details}
          </p>
        </div>
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