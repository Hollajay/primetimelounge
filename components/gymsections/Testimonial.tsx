"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "John Doe",
    message:
      "This gym completely changed my lifestyle. The environment is premium and motivating!",
    avatar: "/img/user1.jpg",
  },
  {
    name: "Sarah Williams",
    message:
      "Top-notch equipment and amazing trainers. I enjoy every session here.",
    avatar: "/img/user2.jpg",
  },
  {
    name: "Michael Johnson",
    message: "The best fitness experience I’ve ever had. Highly recommend!",
    avatar: "/img/user3.jpg",
  },
  {
    name: "David Smith",
    message: "Clean environment, great energy, and professional service.",
    avatar: "/img/user4.jpg",
  },
];

export function TestimonialSlider() {
  return (
    <section className="bg-black text-white py-24 px-6">
      {/* TITLE */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
        WHAT OUR CLIENTS SAY
      </h2>

      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={1000}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 h-full flex flex-col justify-between hover:bg-white/10 transition duration-500">
                <div className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#ffffff"
                    
                  >
                    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                  </svg>
                </div>
                {/* MESSAGE */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  "{item.message}"
                </p>

                {/* USER */}
                <div className="flex items-center gap-4 mt-6">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full bg-yellow-700 object-cover border border-white/20"
                  />

                  <div>
                    <h4 className="font-semibold group-hover:text-yellow-500 transition">
                      {item.name}
                    </h4>
                    <p className="text-gray-500 text-xs">Member</p>
                  </div>
                </div>

                {/* GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
                  <div className="absolute inset-0 bg-red-500/10 blur-2xl rounded-2xl" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
