"use client";

import Navbar from "@/components/nav/Nav";
import Image from "next/image";
import { motion } from "framer-motion";
import FitnessSlider from "@/components/gymsections/FitnessSlider";
import StatsSection from "@/components/gymsections/StatsSection";
import { useEffect, useState } from "react";
import { TestimonialSlider } from "@/components/gymsections/Testimonial";
import PricingSection from "@/components/gymsections/PricingSection";
import { Footer } from "@/components/footer/Footer";
import WhyChooseUs from "@/components/gymsections/WhyChooseUs";
import Breadcrumb from "@/components/ui/BreadCrumb";

const testimonials = [
  {
    name: "Michael Johnson",
    role: "Fitness Enthusiast",
    image: "/img/user1.jpg",
    review:
      "This gym completely transformed my lifestyle. The trainers are top-notch and the environment is elite.",
  },
  {
    name: "Sarah Williams",
    role: "Member",
    image: "/img/user2.jpg",
    review:
      "I love the atmosphere here. Everything feels premium and well structured.",
  },
  {
    name: "David Lee",
    role: "Athlete",
    image: "/img/user3.jpg",
    review: "Best fitness center I’ve ever trained in. Highly recommend!",
  },
];

/* ================= MEMBERSHIP DATA ================= */
const plans = [
  {
    title: "Basic",
    price: "₦15,000",
    features: ["Gym Access", "Locker Room", "1 Trainer Session"],
  },
  {
    title: "Standard",
    price: "₦30,000",
    features: ["All Basic Features", "Unlimited Classes", "Free Diet Plan"],
  },
  {
    title: "Premium",
    price: "₦50,000",
    features: [
      "All Standard Features",
      "Personal Trainer",
      "VIP Lounge Access",
    ],
  },
];

export default function Gym() {
  const [index, setIndex] = useState(0);

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];
  return (
    <div className="w-full bg-black text-white">
      <Navbar />
          <Breadcrumb
                  title="Gymnasium"
                  image="/img/hero.jpg"
                  items={[
                    { name: "Home", href: "/" },
                    { name: "Reservation", href: "/recreation" },
                     { name: "gym" },
                  ]}
                />
      {/* 🔥 HERO */}
      <section className="relative h-screen w-full">
        <Image
          src="/img/gymhero.jpg"
          alt="gym-hero"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-widest">
            PRIME TIME WELLNESS
          </h1>
          <p className="text-gray-300 mt-4 max-w-xl">
            Elevate your fitness experience in a premium environment designed
            for strength, wellness, and performance.
          </p>
          <button className="mt-6 px-6 py-3 bg-yellow-500 rounded-full hover:scale-105 transition">
            Learn More
          </button>
        </div>
      </section>
        <WhyChooseUs/>
    

      <FitnessSlider />
      {/* <StatsSection /> */}
      <TestimonialSlider/>
      <PricingSection/>
      <div>
        <section
          className="relative py-28 text-center text-white"
          style={{
            backgroundImage: "url('/img/gym.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative z-10 max-w-2xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Body?
            </h2>

            <p className="mb-8 text-lg text-gray-300">
              Join our gym today and start your fitness journey with the best
              trainers and world-class equipment.
            </p>

            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition">
              Join Now
            </button>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
}
