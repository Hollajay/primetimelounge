"use client";

import Breadcrumb from "@/components/ui/BreadCrumb";
import { motion } from "framer-motion";
import Link from "next/link";

const activities = [
  {
    title: "Fitness Hub",
    desc: "Stay active in our fully equipped gym, designed to keep you energized and refreshed throughout your stay.",
    image: "/img/gym.jpg",
    link: "/recreation/gym",
  },
  {
    title: "Football Arena",
    desc: "Enjoy thrilling moments on our premium football pitch, perfect for friendly matches and competitive play.",
    image: "/img/football.jpg",
    link: "/recreation/football",
  },
  {
    title: "Swimming Experience",
    desc: "Relax and unwind in our luxurious swimming pool, offering a perfect blend of leisure and serenity.",
    image: "/img/swimming.jpg",
    link: "/recreation/swimming",
  },
  {
  title: "Spa",
  desc: "Indulge in ultimate relaxation at our luxury spa, where soothing treatments, calming ambiance, and expert care help you unwind, refresh, and rejuvenate your body and mind.",
  image: "/img/spa.jpg",
  link: "/recreation/spa",
},
];

export default function RecreationPage() {
  return (
    <div>
      <Breadcrumb
        title="Recreation"
        image="/img/hero.jpg"
        items={[
          { name: "Home", href: "/" },
          { name: "Recreation" },
        ]}
      />

      <section className="bg-black text-white py-24 px-6 relative overflow-hidden">

        {/* 🔥 BACKGROUND GLOW */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/20 blur-[120px]" />

        {/* 🔥 HEADER */}
        <div className="text-center mb-20 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Elevate Your Experience
          </h1>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Discover a world of recreation designed to energize, entertain, 
            and help you unwind in style.
          </p>
        </div>

        {/* 🔥 CARDS */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 relative z-10">
          {activities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              {/* IMAGE */}
              <div className="h-80 overflow-hidden">
                <img
                  src={item.image}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  alt={item.title}
                />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-0 p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4">
                  {item.desc}
                </p>

                <Link href={item.link}>
                  <button className="px-5 py-2 bg-yellow-500 text-black rounded-full font-semibold hover:scale-105 transition">
                    Explore More
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔥 CTA */}
        <div className="text-center mt-28">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Enjoy the Experience?
          </h3>

          <p className="text-gray-400 mb-6">
            Book your stay now and unlock access to premium recreation.
          </p>

          <button className="px-8 py-4 bg-yellow-500 text-black rounded-full font-semibold hover:scale-105 transition">
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
}