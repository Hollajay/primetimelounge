"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/ui/BreadCrumb";

export default function FootballPage() {
  return (
    <div className="bg-black text-white">
      <Breadcrumb
        title="Football"
        image="/img/hero.jpg"
        items={[{ name: "Home", href: "/" }, 
          { name: "Recreation", href: '/recreation' },
          { name: "Football" }
        ]}
      />

      {/* ⚽ HERO */}
      <section className="relative h-[80vh] flex items-center justify-center text-center">
        <Image
          src="/img/football.jpg"
          alt="football"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold">5-A-SIDE FOOTBALL</h1>
          <p className="text-gray-300 mt-4">Build your team. Compete. Win.</p>
        </div>
      </section>

      {/* 🏟️ ABOUT */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Football Pitch</h2>

        <p className="text-gray-400 leading-relaxed">
          Experience high-quality football on our premium pitch designed for
          fast-paced 5-a-side matches. Perfect for tournaments, friendly games,
          and competitive play.
        </p>
      </section>

      {/* 👥 TEAM FORMAT */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 border border-white/10 rounded-xl">
            <h3 className="text-2xl font-bold text-green-500">5 Players</h3>
            <p className="text-gray-400 mt-2">Outfield Players</p>
          </div>

          <div className="p-6 border border-white/10 rounded-xl">
            <h3 className="text-2xl font-bold text-yellow-500">1 Goalkeeper</h3>
            <p className="text-gray-400 mt-2">Defend your goal</p>
          </div>

          <div className="p-6 border border-white/10 rounded-xl">
            <h3 className="text-2xl font-bold text-red-500">6 Total</h3>
            <p className="text-gray-400 mt-2">Per Team</p>
          </div>
        </div>
      </section>

      {/* 📝 REGISTRATION FORM */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Register Your Team
          </h2>

          <form className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">
            <input
              type="text"
              placeholder="Team Name"
              className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg"
            />

            <input
              type="text"
              placeholder="Captain Name"
              className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg"
            />

            <input
              type="number"
              placeholder="Number of Players (6 max)"
              className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg"
            />

            <button className="w-full py-4 bg-yellow-500 text-black font-semibold rounded-full hover:scale-105 transition">
              Register Team
            </button>
          </form>
        </div>
      </section>

      {/* 🏆 CTA */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold">Ready to Compete?</h2>

        <p className="text-gray-400 mt-4">
          Join tournaments and showcase your skills.
        </p>

        <a
          href="https://wa.me/2340000000000"
          className="mt-6 inline-block px-8 py-4 bg-yellow-500 text-black rounded-full"
        >
          Chat on WhatsApp
        </a>
      </section>
    </div>
  );
}
     