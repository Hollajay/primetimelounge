"use client";

import { motion } from "framer-motion";

const images = [
  "/img/hero.jpg",
  "/img/gallery2.jpg",
  "/img/hero.jpg",
  "/img/hero.jpg",
  "/img/gallery5.jpg",
  "/img/gallery6.jpg",
];

export function GallerySection() {
  return (
    <section className="bg-black py-24 px-4">
      
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-white">Gallery</h2>
        <p className="text-gray-400 mt-2">
          Moments from the experience
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[200px]">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className={`relative overflow-hidden rounded-xl group 
              ${i % 3 === 0 ? "row-span-2" : ""}
            `}
          >
            <img
              src={img}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>

            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition shadow-[0_0_40px_rgba(255,255,255,0.2)]"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}