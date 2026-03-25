
"use client";

import Breadcrumb from "@/components/ui/BreadCrumb";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
     <div>
        <Breadcrumb
     title="Contac Us"
     image="/img/hero.jpg"
     items={[
       { name: "Home", href: "/" },
       { name: "Contact" },
     ]}
   />
   
    <section className="bg-black text-white min-h-screen py-24 px-6">

      {/* ================= HERO ================= */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
        <p className="text-gray-400 mt-3">
          We’d love to hear from you! Reach out for inquiries, bookings, or feedback.
        </p>
      </motion.div>

      {/* ================= CONTACT FORM + INFO ================= */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* ---------------- FORM ---------------- */}
        <motion.form
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6"
        >
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

        {/* ---------------- CONTACT INFO ---------------- */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center gap-6"
        >
          <div>
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p className="text-gray-400">
              Prime Time Lounge, Ibadan, Nigeria
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <a href="tel:+2340000000000" className="text-yellow-500">
              +234 000 000 0000
            </a>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <a href="mailto:info@primetimelounge.com" className="text-yellow-500">
              info@primetimelounge.com
            </a>
          </div>

          {/* Placeholder for Map */}
          <div className="mt-6 h-64 bg-white/5 rounded-2xl flex items-center justify-center text-gray-400">
            Map Placeholder
          </div>
        </motion.div>
      </div>
    </section>
     </div>
  );
}