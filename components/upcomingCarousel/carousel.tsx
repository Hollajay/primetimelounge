"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// 🔥 SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

/* ================= DATA ================= */

const activities = [
  {
    date: "31 MAR",
    title: "SINGFINITY & FRIENDS",
    host: "Live Music Experience",
    time: "2026-03-31T16:00:00", // ✅ 31st 4PM
    status: "hot",
    image: "/img/singfinity.jpeg",
  },
  {
    date: "COMING",
    title: "GYM GRAND OPENING",
    host: "Prime Time Lounge",
    time: null,
    status: "soon",
    image: "/img/openinggym.jpeg",
  },
  {
    date: "COMING",
    title: "SNOOKER COMPETITION",
    host: "Cash Prize • Elite Players",
    time: null,
    status: "soon",
    image: "/img/snookercomp.jpeg",
  },
  {
    date: "28 MAR",
    title: "LADIES NIGHT",
    host: "Free Cocktails • DJ Vibes",
    time: "2026-03-30T23:00:00" ,
    status: "live", 
    image: "/img/ladies.jpg",
  },
  {
    date: "4 APR",
    title: "RAVE PARTY",
    host: "Live DJ • Hypeman",
    time: "2026-04-04T23:00:00",
    status: "hot",
    image: "/img/rave.jpg",
  },
];



export function UpcomingShows() {
  return (
    <section className="relative bg-black py-24 overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-[150px] -translate-x-1/2"></div>

      {/* Title */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl text-white font-bold tracking-widest">
          UPCOMING & LIVE EVENTS
        </h2>
        <p className="text-gray-400 mt-3">
          Experience What’s Next at Prime Time
        </p>
      </div>

      {/* 🔥 SWIPER */}
      <div className="px-4">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          spaceBetween={20}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {activities.map((item, i) => (
            <SwiperSlide key={i}>
              <Card item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
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
    if (!item.time) {
      setTimeLeft("COMING SOON");
      return;
    }

    const interval = setInterval(() => {
      const diff =
        new Date(item.time).getTime() - new Date().getTime();

      if (diff <= 0) {
        setTimeLeft("LIVE NOW");
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);

      setTimeLeft(`${d}d ${h}h ${m}m`);
    }, 1000);

    return () => clearInterval(interval);
  }, [item.time]);

  // 🌀 TILT EFFECT
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
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="group relative"
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
          src={item.image}
          className="w-full h-full object-cover group-hover:scale-110 group-hover:blur-[2px] transition duration-700"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        {/* STATUS */}
        {item.status === "live" && (
          <div className="absolute top-4 right-4 bg-red-600 text-white text-xs px-3 py-1 rounded-full animate-pulse">
            🔴 LIVE
          </div>
        )}

        {item.status === "hot" && (
          <div className="absolute top-4 right-4 bg-pink-500 text-white text-xs px-3 py-1 rounded-full">
            🔥 HOT
          </div>
        )}

        {item.status === "soon" && (
          <div className="absolute top-4 right-4 bg-gray-700 text-white text-xs px-3 py-1 rounded-full">
            ⏳ SOON
          </div>
        )}

        {/* DATE */}
        <div className="absolute top-4 left-4 bg-yellow-500 text-black text-xs px-3 py-1 rounded-full font-semibold">
          {item.date}
        </div>

        {/* CONTENT */}
        <div className="absolute bottom-0 p-6 w-full">
          <h3 className="text-white text-2xl font-bold">
            {item.title}
          </h3>

          <p className="text-gray-300 text-sm mt-1">
            {item.host}
          </p>

          {/* COUNTDOWN */}
          <div className="mt-2 text-yellow-400 text-sm font-semibold">
            {timeLeft}
          </div>
        </div>

        {/* BORDER */}
        <div className="absolute inset-0 rounded-2xl border border-yellow-500/20 group-hover:border-yellow-500/70 transition"></div>
      </div>
    </motion.div>
  );
}