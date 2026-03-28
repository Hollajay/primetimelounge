"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Waves, Martini, Music, Sun } from "lucide-react";
import Breadcrumb from "@/components/ui/BreadCrumb";

export default function PoolPage() {
  return (
    <div className="bg-black text-white">

        <Breadcrumb
                title="Swimming Pool"
                image="/img/hero.jpg"
                items={[{ name: "Home", href: "/" }, 
                  { name: "Recreation", href: '/recreation' },
                  { name: "swimming" }
                ]}
              />

      {/* 🌊 HERO */}
      <section className="relative h-[80vh] flex items-center justify-center text-center">
        <Image
          src="/img/pool-hero.jpg"
          alt="pool"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold">
            LUXURY POOL EXPERIENCE
          </h1>
          <p className="text-gray-300 mt-4">
            Chill. Relax. Enjoy the vibe.
          </p>
        </div>
      </section>

      {/* 🏝️ ABOUT */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          About Our Pool
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Dive into a premium relaxation experience at Prime Time Lounge.
          Our swimming pool offers a clean, serene, and luxurious
          environment perfect for unwinding, socializing, and enjoying life.
        </p>
      </section>

      {/* 🍹 EXPERIENCE FEATURES */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">

          {[
            { icon: <Waves />, title: "Clean Water" },
            { icon: <Sun />, title: "Outdoor Chill" },
            { icon: <Martini />, title: "Poolside Drinks" },
            { icon: <Music />, title: "Music & Vibes" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-6 border border-white/10 rounded-xl bg-white/5"
            >
              <div className="text-yellow-500 flex justify-center mb-4">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
            </motion.div>
          ))}

        </div>
      </section>

      {/* 🛋️ ACCESS / BOOKING */}
      <section className="py-24 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-6">
            Pool Access & Booking
          </h2>

          <p className="text-gray-400 mb-8">
            Enjoy flexible access to our pool. Whether you want a solo chill
            session or a group hangout, we’ve got you covered.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <div className="p-6 border border-white/10 rounded-xl">
              <h3 className="text-xl font-bold text-blue-400">
                ₦5,000
              </h3>
              <p className="text-gray-400">Per Person</p>
            </div>

            <div className="p-6 border border-white/10 rounded-xl">
              <h3 className="text-xl font-bold text-yellow-400">
                Group Booking
              </h3>
              <p className="text-gray-400">Custom Pricing</p>
            </div>
          </div>

        </div>
      </section>

      {/* 📸 GALLERY STRIP */}
      <section className="py-20 px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["/img/pool1.jpg", "/img/pool2.jpg", "/img/pool3.jpg", "/img/pool4.jpg"].map((img, i) => (
            <div key={i} className="relative h-40">
              <Image
                src={img}
                alt="pool"
                fill
                className="object-cover rounded-lg hover:scale-110 transition"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 📞 CTA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold">
          Ready to Dive In?
        </h2>

        <p className="text-gray-400 mt-4">
          Book your pool experience today.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="https://wa.me/2340000000000"
            className="px-8 py-4 bg-green-500 text-black rounded-full"
          >
            Book via WhatsApp
          </a>

          <button className="px-8 py-4 border border-white rounded-full">
            Call Now
          </button>
        </div>
      </section>

    </div>
  );
}