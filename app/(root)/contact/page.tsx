"use client";

import Map from "@/components/Map";
import Breadcrumb from "@/components/ui/BreadCrumb";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div>
      <Breadcrumb
        title="Contact Us"
        image="/img/hero.jpg"
        items={[
          { name: "Home", href: "/" },
          { name: "Contact" },
        ]}
      />

      <section className="bg-black text-white py-24 px-6 relative overflow-hidden">

        {/* 🔥 BACKGROUND GLOW */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/20 blur-[120px]" />

        {/* ================= HERO ================= */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20 relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Let’s Connect
          </h1>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Whether you're booking a stay, planning an event, or making an inquiry,
            our team is always ready to assist you.
          </p>
        </motion.div>

        {/* ================= GRID ================= */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">

          {/* ---------------- FORM ---------------- */}
          <motion.form
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-6 shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-2">
              Send a Message
            </h3>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg outline-none focus:border-yellow-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg outline-none focus:border-yellow-500"
            />

            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg outline-none focus:border-yellow-500"
            />

            <button className="w-full py-4 bg-yellow-500 text-black font-semibold rounded-full hover:scale-105 transition">
              Send Message
            </button>
          </motion.form>

          {/* ---------------- INFO ---------------- */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >

            {/* 🔥 CALL CARD */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20">
              <h3 className="text-xl font-semibold mb-2 text-yellow-500">
                Customer Care
              </h3>

              <a
                href="tel:+2340000000000"
                className="text-2xl font-bold hover:underline"
              >
                +234 000 000 0000
              </a>

              <p className="text-gray-400 mt-2 text-sm">
                Available 24/7 for bookings & support
              </p>
            </div>

            {/* 🔥 QUICK ACTIONS */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+2340000000000"
                className="flex-1 text-center py-3 bg-yellow-500 text-black rounded-full font-semibold hover:scale-105 transition"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/2340000000000"
                className="flex-1 text-center py-3 border border-green-500 text-green-400 rounded-full hover:bg-green-500/10 transition"
              >
                WhatsApp
              </a>
            </div>

            {/* 🔥 ADDRESS */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold mb-2">
                Location
              </h3>
              <p className="text-gray-400">
                Prime Time Lounge, Ibadan, Nigeria
              </p>
            </div>

            {/* 🔥 EMAIL */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold mb-2">
                Email
              </h3>
              <a
                href="mailto:info@primetimelounge.com"
                className="text-yellow-500 hover:underline"
              >
                info@primetimelounge.com
              </a>
            </div>

          </motion.div>
        </div>
      </section>

      {/* 🗺 MAP (Already handled) */}
      <Map />
    </div>
  );
}