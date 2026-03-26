"use client";

import Breadcrumb from "@/components/ui/BreadCrumb";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const slides = [
  "/img/hero.jpg",
  "/img/hero.jpg",
  "/img/hero.jpg",
  "/img/hero.jpg",
];

export default function HotelBookingPage() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("20:00");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // auto-fade every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Breadcrumb
        title="Our Hotel"
        image="/img/hero.jpg"
        items={[{ name: "Home", href: "/" }, { name: "Hotel" }]}
      />

      <section className="bg-black text-white py-24 px-6 relative overflow-hidden">

        {/* BACKGROUND GLOW */}
         <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/20 blur-[120px]" />

        {/* TITLE */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            Stay in Style
          </h1>
          <p className="text-gray-400 mt-3">
            Premium living, elevated experiences, and unmatched comfort
          </p>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          {/* TEXT */}
          <div className="md:w-1/2 text-white  space-y-4">
            <p className="text-center">
              Welcome to Prime Time Hotel — where sophistication meets comfort
              in perfect harmony. Designed for those who appreciate the finer
              things, our space blends modern luxury with a calm and inviting
              atmosphere, creating an experience that goes beyond just a stay.
            </p>

            <p className="hidden md:block text-center">
              From elegantly styled rooms to breathtaking rooftop views, every
              detail is carefully curated to deliver excellence. Whether you're
              visiting for business, relaxation, or a special occasion, Prime
              Time Hotel offers a seamless blend of class, comfort, and
              unforgettable moments.
            </p>
          </div>

          {/* SLIDER */}
          <div className="md:w-1/2 w-full relative h-96 rounded-2xl overflow-hidden border border-white/10">
            {slides.map((img, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-[2000ms] ${
                  i === index ? "opacity-100 z-20" : "opacity-0"
                }`}
              >
                <img
                  src={img}
                  className="w-full h-full object-cover scale-110 animate-[zoom_10s_linear_infinite]"
                  alt={`Hotel slide ${i + 1}`}
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <p className="block md:hidden text-center  mt-4">
            From elegantly styled rooms to breathtaking rooftop views, every
            detail is carefully curated to deliver excellence. Whether you're
            visiting for business, relaxation, or a special occasion, Prime Time
            Hotel offers a seamless blend of class, comfort, and unforgettable
            moments.
          </p>
        </div>

        {/* 💰 PRICE */}
        <div className="max-w-2xl mx-auto text-center my-20 border border-white/10 rounded-2xl p-10 bg-white/5">
          <h3 className="text-3xl font-bold text-yellow-500">
            ₦50,000 / Night
          </h3>
        </div>

        {/* 🧾 FORM */}
        <form className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg outline-none"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <DatePicker
              selected={date}
              onChange={(d: any) => setDate(d)}
              minDate={new Date()}
              className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white"
            />
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg"
            />
          </div>

          <input
            type="number"
            min="1"
            defaultValue="2"
            placeholder="Guests"
            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg"
          />

          <textarea
            rows={3}
            placeholder="Special request (optional)"
            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg"
          />

          <button className="w-full py-4 bg-yellow-500 text-black font-semibold rounded-full hover:scale-105 transition">
            Reserve Now
          </button>
        </form>

        {/* 📞 CONTACT */}
        <div className="text-center mt-16">
          <p className="text-gray-400">Prefer direct booking?</p>
          <div className="mt-4 flex flex-col items-center gap-3">
            <a
              href="tel:+2340000000000"
              className="px-6 py-3 bg-yellow-500 text-black rounded-full"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/2340000000000"
              className="text-green-400 underline"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
