"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const activities = [
  {
    date: "28 MAR",
    title: "ROOFTOP MADNESS",
    host: "DJ Pumpy • MC Yemi",
    time: "2026-03-28T22:00:00",
    status: "live",
    image: "https://images.unsplash.com/photo-1571266028243-e4733b8d8b41",
  },
  {
    date: "29 MAR",
    title: "LADIES NIGHT",
    host: "Free Cocktails • DJ Vibes",
    time: "2026-03-29T21:00:00",
    status: "hot",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
  },
  {
    date: "30 MAR",
    title: "CLUB SHUTDOWN",
    host: "Live DJ • Hypeman",
    time: "2026-03-30T23:00:00",
    status: "soon",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
  },
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
          UPCOMING SHOWS
        </h2>
        <p className="text-gray-400 mt-3">
          Luxury. Energy. Experience.
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
  const [timeLeft, setTimeLeft] = useState("");

  // ⏳ COUNTDOWN
  useEffect(() => {
    const interval = setInterval(() => {
      const diff = new Date(item.time).getTime() - new Date().getTime();

      if (diff <= 0) {
        setTimeLeft("LIVE NOW");
        return;
      }

      const h = Math.floor(diff / (1000 * 60 * 60));
      const m = Math.floor((diff / (1000 * 60)) % 60);

      setTimeLeft(`${h}h ${m}m`);
    }, 1000);

    return () => clearInterval(interval);
  }, [item.time]);

  // 🌀 3D TILT
  const handleMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setRotate({
      x: ((y / rect.height) - 0.5) * 12,
      y: ((x / rect.width) - 0.5) * -12,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 120, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="group relative min-w-[300px]"
    >
      <div
        onMouseMove={handleMove}
        onMouseLeave={() => setRotate({ x: 0, y: 0 })}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        }}
        className="relative h-[400px] rounded-2xl overflow-hidden transition-transform duration-300"
      >
        {/* IMAGE */}
        <img
          src={`${item.image}?auto=format&fit=crop&w=900&q=80`}
          className="w-full h-full object-cover group-hover:scale-110 group-hover:blur-[2px] transition duration-700"
        />

        {/* DARK CINEMATIC OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        {/* 🔴 STATUS BADGE */}
        {item.status === "live" && (
          <div className="absolute top-4 right-4 bg-red-600 text-white text-xs px-3 py-1 rounded-full animate-pulse shadow-lg">
            🔴 LIVE
          </div>
        )}

        {item.status === "hot" && (
          <div className="absolute top-4 right-4 bg-pink-500 text-white text-xs px-3 py-1 rounded-full shadow-lg">
            🔥 HOT
          </div>
        )}

        {/* DATE */}
        <div className="absolute top-4 left-4 bg-yellow-500 text-black text-xs px-3 py-1 rounded-full font-semibold shadow-[0_0_20px_rgba(255,215,0,0.8)]">
          {item.date}
        </div>

        {/* LIGHT SWEEP EFFECT */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full"></div>

        {/* CONTENT */}
        <div className="absolute bottom-0 p-6 w-full">
          <h3 className="text-white text-2xl font-bold tracking-wide">
            {item.title}
          </h3>

          <p className="text-gray-300 text-sm mt-1">
            {item.host}
          </p>

          {/* ⏳ COUNTDOWN */}
          <div className="mt-2 text-yellow-400 text-sm font-semibold">
            {timeLeft}
          </div>

          {/* CTA */}
          <button className="mt-4 w-full py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-full hover:scale-105 transition">
            Get Ticket
          </button>
        </div>

        {/* 🔥 NEON BORDER */}
        <div className="absolute inset-0 rounded-2xl border border-yellow-500/20 group-hover:border-yellow-500/70 transition duration-500"></div>

        {/* 🔥 GLOW */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-2xl bg-yellow-500/20 transition duration-500"></div>
      </div>
    </motion.div>
  );
}