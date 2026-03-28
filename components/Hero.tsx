"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  { type: "video", src: "/video/hero.mp4" },
  { type: "image", src: "/img/hero.jpg" },
  { type: "image", src: "/img/Primetime lounge.jpeg" },
  { type: "video", src: "/video/hero.mp4" },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  // 🔥 Typing Effect
  const fullText = "Prime Time Lounge";
  const [text, setText] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    if (i < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[i]);
        setI(i + 1);
      }, 70);

      return () => clearTimeout(timeout);
    }
  }, [i]);

  // 🔥 Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[80vh] md:h-screen w-full overflow-hidden">
      
      {/* 🔥 SLIDES */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ${
            i === index ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          {/* VIDEO */}
          {slide.type === "video" ? (
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={slide.src} type="video/mp4" />
            </video>
          ) : (
            /* IMAGE */
            <img
              src={slide.src}
              alt="hero"
              className="w-full h-full object-cover scale-110 animate-[zoom_10s_linear_infinite]"
            />
          )}
        </div>
      ))}

      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 z-30" />

      {/* 🔥 CONTENT */}
      <div className="absolute inset-0 z-40 flex flex-col items-center justify-center text-center px-4">
        <p className="text-gray-300 mt-4 text-2xl tracking-wide">
          Welcome to
        </p>
        {/* ✨ AUTO TYPING TEXT */}
        <h1 className="md:text-[80px] text-[38px] text-white font-bold tracking-widest font-serif">
          {text}
          <span className="animate-pulse">|</span>
        </h1>

        {/* ✨ SUBTEXT */}
        <p className="text-gray-300 mt-4 text-lg tracking-wide">
          Where Luxury Meets Vibes & Unforgettable Experience
        </p>

        {/* ✨ BUTTONS */}
        <div className="flex gap-4 mt-6 flex-wrap justify-center">
          <Link href={'/reservation'} className="px-6 py-3 border border-yellow-500 animate-pulse bg-yellow-600 text-white rounded-full hover:bg-white hover:text-black transition">
            Book Reservation
          </Link>

          <Link href={'#'} className="px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
            Explore More
          </Link>
        </div>
      </div>

      {/* 🔥 PROGRESS BARS */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        {slides.map((_, i) => (
          <div key={i} className="w-10 h-[3px] bg-white/30 overflow-hidden">
            <div
              className={`h-full bg-yellow-500 ${
                i === index ? "animate-[progress_6s_linear]" : ""
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}