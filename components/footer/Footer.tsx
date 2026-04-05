"use client";

import Link from "next/link";
import { Instagram, Twitter, Facebook } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-950 to-black  pb-10 px-6 overflow-hidden">
      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-yellow-500/10 blur-[150px] -translate-x-1/2"></div>

      {/* 📩 NEWSLETTER */}
      <div className="max-w-3xl  mx-auto mb-16 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
        <h3 className="text-white text-2xl font-semibold">Stay in the Loop</h3>
        <p className="text-gray-400 mt-2 text-sm">
          Get updates on events, offers & exclusive nights
        </p>

        <div className="mt-4 flex flex-col md:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-full bg-black/50 text-white outline-none border border-white/10 focus:border-yellow-500"
          />
          <button className="px-6 py-3 bg-yellow-500 text-black rounded-full font-semibold hover:scale-105 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* 🔗 MAIN FOOTER GRID */}
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4 text-sm relative z-10">
        {/* 🏷️ BRAND */}
        <div>
          

          <div className="flex flex-row items-center justify-start gap-3">
            <Image
              width={70}
              height={70}
              className=""
              src={"/img/logo.png"}
              alt="logo"
            />
            <h2 className="text-white text-xl font-bold tracking-widest">
            PRIME TIME
          </h2>
          </div>
          <p className="text-gray-400 mt-3 leading-relaxed">
            Luxury nightlife, premium recreation, and unforgettable experiences
            in Ibadan.
          </p>
        </div>

        {/* 📍 NAVIGATION */}
        <div>
          <h4 className="text-white text-2xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <FooterLink href="/about" label="About Us" />
            <FooterLink href="/gallery" label="Gallery" />
            <FooterLink href="/reservation" label="Book Reservation" />
            <FooterLink href="/hotel" label="Our Hotel" />
            <FooterLink href="/recreation" label="Recreation" />
            <FooterLink href="/contact" label="Contact" />
          </ul>
        </div>

        {/* 📞 CONTACT */}
        <div>
          <h4 className="text-white text-2xl font-semibold mb-4">Contact</h4>
          <p className="text-gray-400 text-lg ">Ibadan, Nigeria</p>
          <p className="text-gray-400 text-lg mt-2">+234 000 000 0000</p>
          <p className="text-gray-400 text-lg mt-2">info@primetime.com</p>
        </div>

        {/* 🌐 SOCIAL */}
        <div>
          <h4 className="text-white text-2xl font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <SocialIcon>
              <Instagram size={18} />
            </SocialIcon>
            <SocialIcon>
              <Twitter size={18} />
            </SocialIcon>
            <SocialIcon>
              <Facebook size={18} />
            </SocialIcon>
          </div>
        </div>
      </div>

      {/* 🔻 BOTTOM */}
      <div className="mt-16 border-t border-white/10 pt-6 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Prime Time Lounge. All rights reserved.
      </div>
    </footer>
  );
}

/* 🔗 FOOTER LINK */
function FooterLink({ href, label }: any) {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-400 text-lg hover:text-yellow-500 transition relative group"
      >
        {label}
        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </li>
  );
}

/* 🌐 SOCIAL ICON */
function SocialIcon({ children }: any) {
  return (
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-yellow-500 hover:text-black hover:scale-110 transition cursor-pointer">
      {children}
    </div>
  );
}
