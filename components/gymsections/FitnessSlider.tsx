"use client";

import { motion } from "framer-motion";

const classes = [
  {
    title: "Cardio Workouts",
    desc: "Boost your endurance and stamina with high-energy sessions.",
    img: "/img/gym1.jpg",
  },
  {
    title: "Strength Training",
    desc: "Build muscle and increase power with guided workouts.",
    img: "/img/strength.jpg",
  },
  {
    title: "Yoga & Mindfulness",
    desc: "Improve flexibility and find your inner balance.",
    img: "/img/yoga.jpg",
  },
  {
    title: "HIIT Training",
    desc: "Burn fat fast with intense interval sessions.",
    img: "/img/hiit.jpg",
  },
  {
    title: "Boxing",
    desc: "Train like a fighter and improve agility and strength.",
    img: "/img/boxer.jpg",
  },
  {
    title: "CrossFit",
    desc: "Challenge your limits with dynamic full-body workouts.",
    img: "/img/crossfit.jpg",
  },
];

export default function FitnessGrid() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
        FITNESS CLASS OVERVIEW
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {classes.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition duration-500"
          >
            {/* IMAGE */}
            <div className="h-64 overflow-hidden">
              <img
                src={item.img}
                className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition duration-700"
              />
            </div>

            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

            {/* CONTENT */}
            <div className="relative p-6">
              <h3 className="text-xl font-semibold group-hover:text-yello-500 transition">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm mt-2 group-hover:text-gray-300 transition">
                {item.desc}
              </p>
            </div>

            {/* GLOW EFFECT */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
              <div className="absolute inset-0 bg-yellow-500/10 blur-2xl" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}