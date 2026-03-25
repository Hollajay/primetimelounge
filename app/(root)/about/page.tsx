"use client";

import Breadcrumb from "@/components/ui/BreadCrumb";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div>
    <Breadcrumb
        title="About Us"
        image="/img/hero.jpg"
        items={[
          { name: "Home", href: "/" },
          { name: "About" },
        ]}
      />
    
    <section className="bg-black text-white py-24 px-6">
      {/* 🔥 INTRO */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold tracking-wide">
          About Prime Time Lounge
        </h2>
        <p className="text-gray-400 mt-6 leading-relaxed">
          Prime Time Lounge was created to redefine relaxation and entertainment 
          in Ibadan. We bring together luxury, comfort, and vibrant experiences 
          into one destination designed for unforgettable moments.
        </p>
      </div>

      {/* 🎯 GOAL & VISION */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* GOAL */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent"
        >
          <div className="absolute inset-0 rounded-2xl shadow-[0_0_60px_rgba(255,215,0,0.1)]"></div>

          <h3 className="text-2xl font-semibold mb-4 text-yellow-500">
            Our Goal
          </h3>

          <p className="text-gray-300 leading-relaxed">
            Our goal is to create a space where people can escape the ordinary 
            and enjoy premium experiences in a relaxed and welcoming environment. 
            From world-class hospitality to exciting recreational activities, 
            every detail is designed to deliver satisfaction, comfort, and lasting memories.
          </p>
        </motion.div>

        {/* VISION */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent"
        >
          <div className="absolute inset-0 rounded-2xl shadow-[0_0_60px_rgba(59,130,246,0.1)]"></div>

          <h3 className="text-2xl font-semibold mb-4 text-blue-400">
            Our Vision
          </h3>

          <p className="text-gray-300 leading-relaxed">
            Our vision is to become a leading lifestyle destination in Nigeria, 
            known for excellence in entertainment, hospitality, and leisure. 
            We aim to continuously evolve, setting new standards for luxury 
            lounges while creating an atmosphere that attracts guests from all walks of life.
          </p>
        </motion.div>
      </div>

      {/* 💎 WHY CHOOSE US */}
      <div className="max-w-6xl mx-auto mt-24 text-center">
        <h3 className="text-3xl font-bold mb-10">
          Why Choose Us
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            "Premium Lounge Experience",
            "Top-Class Hospitality",
            "Recreational Activities",
            "Luxury Accommodation",
            "Vibrant Nightlife",
            "Unmatched Atmosphere",
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition"
            >
              <p className="text-gray-300">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 📊 OPTIONAL STATS */}
      <div className="max-w-5xl mx-auto mt-24 grid grid-cols-2 md:grid-cols-4 text-center gap-6">
        {[
          { number: "5+", label: "Years Experience" },
          { number: "1000+", label: "Happy Guests" },
          { number: "10+", label: "Facilities" },
          { number: "24/7", label: "Service" },
        ].map((stat, i) => (
          <div key={i}>
            <h4 className="text-3xl font-bold text-yellow-500">
              {stat.number}
            </h4>
            <p className="text-gray-400 text-sm mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}
