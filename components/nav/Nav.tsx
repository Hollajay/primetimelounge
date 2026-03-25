"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const leftLinks = [
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Reservation", href: "/reservation" },
  ];

  const rightLinks = [
    { name: "Hotel", href: "/hotel" },
    { name: "Contact", href: "/contact" },
    { name: "Recreation", href: "/recreation" },
  ];

  return (
    <>
      {/* 🔥 NAVBAR */}
      <nav className="fixed  top-0 left-0  w-full  z-50 py-4  ">
        <div className="max-w-7xl mx-auto px-6  flex gap-8 items-center justify-between md:justify-center">

          {/* LEFT LINKS */}
          <div className="hidden md:flex gap-4">
            {leftLinks.map((link, i) => (
              <NavLink key={i} {...link} />
            ))}
          </div>

          {/* LOGO */}
          <div className="text-white text-xl font-bold ">
           <Link href={'/'}> <Image width={100} height={100} className="w-18 h-18 object-cover" src={'/img/logo.png'}  alt='logo' />  </Link> 
          </div>

          {/* RIGHT LINKS */}
          <div className="hidden md:flex gap-4">
            {rightLinks.map((link, i) => (
              <NavLink key={i} {...link} />
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white relative z-50"
          >
            <div className="w-6 h-6 flex flex-col justify-between">
              <span className={`h-[2px] bg-white transition ${open && "rotate-45 translate-y-2"}`}></span>
              <span className={`h-[2px] bg-white transition ${open && "opacity-0"}`}></span>
              <span className={`h-[2px] bg-white transition ${open && "-rotate-45 -translate-y-2"}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* 🔥 MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8"
          >
            {[...leftLinks, ...rightLinks].map((link, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-white text-2xl font-semibold hover:text-yellow-400 transition"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* 🔥 NAV LINK */
function NavLink({ name, href }: any) {
  return (
    <Link href={href} className="relative group text-white text-lg tracking-wide">
      {name}

      {/* underline animation */}
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}