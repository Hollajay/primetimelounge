"use client";
import { useEffect, useState } from "react";
import './parallax.css'

export default function VideoParallax() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="parallax-video bg-transparent">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-bg"
        style={{ transform: `translateY(${offset * 0.3}px)` }}
      >
        <source src="/video/rooftop.mp4" type="video/mp4" />
      </video>

      <div className="overlay-content">
        <h2>Luxury Rooftop</h2>
      </div>
    </section>
  );
}