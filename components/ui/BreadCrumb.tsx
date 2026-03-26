"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface HeroBreadcrumbProps {
  items: BreadcrumbItem[];
  title: string;
  image: string; // background image path
}

export default function Breadcrumb({ items, title, image }: HeroBreadcrumbProps) {
  return (
    <section
      className="relative h-72 md:h-96 w-full flex flex-col justify-center items-start md:pl-20 pl-8"
      style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Title */}
      <h1 className="relative z-10 text-white text-3xl md:text-5xl font-bold tracking-wider">
        {title}
      </h1>

      {/* Breadcrumb */}
      <nav className="relative z-10 mt-4 flex items-center  gap-2 text-white/80 text-sm md:text-base">
        {items.map((item, idx) => (
          <span key={idx} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="hover:text-yellow-500 transition">
                {item.name}
              </Link>
            ) : (
              <span>{item.name}</span>
            )}
            {idx < items.length - 1 && <ChevronRight className="text-yellow-500" size={20} />}
          </span>
        ))}
      </nav>
    </section>
  );
}