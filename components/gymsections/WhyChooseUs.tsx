"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Modern Equipment",
      desc: "Train with state-of-the-art fitness machines.",
    },
    {
      title: "Clean Environment",
      desc: "Hygienic and well-maintained workout space.",
    },
    {
      title: "Professional Trainers",
      desc: "Get guidance from certified fitness experts.",
    },
    {
      title: "24/7 Access",
      desc: "Workout anytime that fits your schedule.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT FIRST ON MOBILE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="order-1 md:order-2"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose Our Gym
          </h2>

          <p className="text-gray-400 leading-relaxed mb-8">
            Our gym is designed to give you a premium fitness experience. From
            modern equipment to a motivating environment, we provide everything
            you need to achieve your goals.
          </p>

          {/* ✅ CHECK LIST */}
          <div className="space-y-5">
            {features.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 group"
              >
                {/* ICON */}
                <div className="mt-1">
                  <Check
                    className="text-yellow-500 group-hover:scale-110 transition"
                    size={20}
                  />
                </div>

                {/* TEXT */}
                <div>
                  <h4 className="font-semibold group-hover:text-yellow-500 transition">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative h-[400px] w-full order-2 md:order-1"
        >
          <Image
            src="/img/whychooseus.jpg"
            alt="gym"
            fill
            className="object-cover rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}