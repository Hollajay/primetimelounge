

"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import { motion } from "framer-motion";
import Breadcrumb from "@/components/ui/BreadCrumb";
import "react-datepicker/dist/react-datepicker.css";

export default function ReservationPage() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("20:00");
  const [seat, setSeat] = useState("VIP");

  return (

    <div>
          <Breadcrumb
          title="Book Reservation"
          image="/img/hero.jpg"
          items={[
            { name: "Home", href: "/" },
            { name: "Reservation" },
          ]}
        />

    <section className="min-h-screen bg-black text-white py-24 px-6 relative overflow-hidden">
     {/* BACKGROUND GLOW */}
         <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/20 blur-[120px]" />

        {/* TITLE */}
      {/* 🔥 TITLE */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold">
          Book a Table
        </h1>
        <p className="text-gray-400 mt-3">
          Reserve your spot for an unforgettable experience
        </p>
      </div>

      {/* 🔥 FORM */}
      <motion.form
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 space-y-8"
      >

        {/* NAME */}
        <div>
          <label className="text-sm text-gray-400">Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full mt-2 px-4 py-3 bg-black/40 border border-white/10 rounded-lg outline-none focus:border-yellow-500"
          />
        </div>

        {/* PHONE NUMBER */}
         <div>
          <label className="text-sm text-gray-400">Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your name"
            className="w-full mt-2 px-4 py-3 bg-black/40 border border-white/10 rounded-lg outline-none focus:border-yellow-500"
          />
        </div>

        {/* SEAT TYPE */}
        <div>
          <label className="text-sm text-gray-400">Select Seat</label>
          <div className="grid grid-cols-3 gap-4 mt-3">
            {["Regular", "VIP", "Rooftop"].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setSeat(type)}
                className={`py-3 rounded-lg border transition ${
                  seat === type
                    ? "bg-yellow-500 text-black border-yellow-500"
                    : "border-white/20 hover:border-yellow-500"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* DATE + TIME */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* DATE */}
          <div>
            <label className="text-sm text-gray-400">Select Date</label>
            <DatePicker
              selected={date}
              onChange={(date: any) => setDate(date)}
              className="w-full mt-2 px-4 py-3 bg-black/40 border border-white/10 rounded-lg outline-none text-white"
            />
          </div>

          {/* TIME */}
          <div>
            <label className="text-sm text-gray-400">Select Time</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full mt-2 px-4 py-3 bg-black/40 border border-white/10 rounded-lg outline-none"
            />
          </div>
        </div>

        {/* GUESTS */}
        <div>
          <label className="text-sm text-gray-400">Number of Guests</label>
          <input
            type="number"
            min="1"
            defaultValue="2"
            className="w-full mt-2 px-4 py-3 bg-black/40 border border-white/10 rounded-lg outline-none"
          />
        </div>

        {/* SPECIAL REQUEST */}
        <div>
          <label className="text-sm text-gray-400">Special Request</label>
          <textarea
            rows={3}
            placeholder="Birthday, VIP treatment, etc..."
            className="w-full mt-2 px-4 py-3 bg-black/40 border border-white/10 rounded-lg outline-none"
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full py-4 bg-yellow-500 text-black font-semibold rounded-full hover:scale-105 transition"
        >
          Confirm Reservation
        </button>
      </motion.form>
    </section>
        </div>
  );
}