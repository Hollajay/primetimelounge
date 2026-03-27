"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic Plan",
    price: "₦15,000",
    features: [
      "Gym Access",
      "Locker Room",
      "Free WiFi",
      "1 Training Session",
    ],
  },
  {
    name: "Premium Plan",
    price: "₦30,000",
    popular: true,
    features: [
      "Full Gym Access",
      "Personal Trainer",
      "Group Classes",
      "Nutrition Guide",
      "Locker + Shower",
    ],
  },
  {
    name: "VIP Plan",
    price: "₦50,000",
    features: [
      "All Premium Features",
      "Private Training",
      "VIP Lounge Access",
      "Priority Booking",
      "24/7 Access",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="bg-black text-white py-24 px-6">
      
      {/* TITLE */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
        MEMBERSHIP PLANS
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`relative rounded-2xl p-8 border transition duration-500
              ${
                plan.popular
                  ? "border-red-500 bg-white/10 scale-105"
                  : "border-white/10 bg-white/5 hover:bg-white/10"
              }
              hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(255,0,0,0.2)]
            `}
          >

            {/* POPULAR BADGE */}
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-red-500 px-4 py-1 text-xs rounded-bl-xl rounded-tr-xl">
                MOST POPULAR
              </div>
            )}

            {/* PLAN NAME */}
            <h3 className="text-xl font-semibold mb-4">
              {plan.name}
            </h3>

            {/* PRICE */}
            <p className="text-4xl font-bold text-red-500 mb-6">
              {plan.price}
              <span className="text-sm text-gray-400"> / month</span>
            </p>

            {/* FEATURES */}
            <ul className="space-y-3 mb-8">
              {plan.features.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-300">
                  <Check size={18} className="text-green-500" />
                  {item}
                </li>
              ))}
            </ul>

            {/* BUTTON */}
            <button className="w-full py-3 rounded-full bg-red-500 text-white font-semibold hover:scale-105 transition">
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}