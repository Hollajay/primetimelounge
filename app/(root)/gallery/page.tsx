

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Breadcrumb from "@/components/ui/BreadCrumb";

const categories = ["All", "Lounge", "Events", "Pool", "Nightlife"];

const images = [
  { src: "/img/rooftop1.jpeg", category: "Lounge" },
  { src: "/img/juju.jpeg", category: "Events" },
  { src: "/img/spa.jpg", category: "Pool" },
  { src: "/img/karaoke.jpg", category: "Nightlife" },
  { src: "/img/rooftop4.jpeg", category: "Lounge" },
  { src: "/img/singfinity.jpeg", category: "Events" },
];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filtered =
    active === "All"
      ? images
      : images.filter((img) => img.category === active);

  return (
    <div>
      
             <Breadcrumb
          title="Gallery"
          image="/img/hero.jpg"
          items={[
            { name: "Home", href: "/" },
            { name: "Gallery" },
          ]}
        />
    <section className="bg-black text-white py-24 px-6 relative overflow-hidden">

       {/* BACKGROUND GLOW */}
         <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/20 blur-[120px]" />

        {/* TITLE */}

      {/* 🔥 TITLE */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">Gallery</h1>
        <p className="text-gray-400 mt-3">
          Explore moments from Prime Time Lounge
        </p>
      </div>

      {/* 🔥 FILTERS */}
      <div className="flex justify-center gap-4 flex-wrap mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full border transition ${
              active === cat
                ? "bg-yellow-500 text-black border-yellow-500"
                : "border-white/20 text-white hover:border-yellow-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🔥 GRID */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[200px]">
        {filtered.map((img, i) => (
          <motion.div
            key={i}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`relative overflow-hidden rounded-xl cursor-pointer group
              ${i % 3 === 0 ? "row-span-2" : ""}
            `}
            onClick={() => setSelected(img.src)}
          >
            <img
              src={img.src}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition"></div>

            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition shadow-[0_0_50px_rgba(255,215,0,0.3)]"></div>
          </motion.div>
        ))}
      </div>

      {/* 🔥 LIGHTBOX MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={selected}
              className="max-h-[90vh] max-w-[90vw] rounded-xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
    </div>
  );
}