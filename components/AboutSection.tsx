"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="next-section" className="relative bg-black py-24 px-6 overflow-hidden">

      <Particles />

      {/* 🔥 Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-yellow-500/10 blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>

      {/* Title */}
      <div className="text-center mb-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
          About Us
        </h1>
        <p className="text-gray-400 mt-3">
          Experience luxury, comfort & unforgettable moments
        </p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* 🖼️ IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <Image
            width={600}
            height={700}
            src="/img/toss.jpg"
            alt="Prime Time Lounge"
            className="w-full h-[500px] object-cover rounded-2xl"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 rounded-2xl group-hover:bg-black/20 transition"></div>

          {/* Glow */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition shadow-[0_0_60px_rgba(255,215,0,0.4)]"></div>
        </motion.div>

        {/* 📝 TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6"
        >
          <p className="text-gray-300 leading-relaxed">
            Welcome to <span className="text-white font-semibold">Prime Time Lounge</span>, 
            one of the finest destinations for relaxation, entertainment, and hospitality in Ibadan. 
            We offer a unique blend of comfort, luxury, and exciting recreational experiences.
          </p>

          <p className="text-gray-400 leading-relaxed">
            From a premium hotel stay to activities like football, swimming, and gym sessions, 
            every moment here is designed to elevate your experience beyond the ordinary.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Whether you're here to unwind, socialize, or stay overnight, 
            we create an atmosphere that keeps you coming back.
          </p>

          {/* CTA */}
          <Link href="/about">
            <button className="mt-4 px-6 py-3 bg-yellow-500 text-black rounded-full font-semibold hover:scale-105 transition shadow-lg">
              Discover More
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

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