"use client";

import { useState } from "react";

const Map = () => {
  const [loadMap, setLoadMap] = useState(false);

  return (
    <div className="w-full h-[400px] relative">
      {!loadMap ? (
        <div
          onClick={() => setLoadMap(true)}
          className="w-full h-full cursor-pointer group relative"
        >
          {/* 🖼️ Static Preview Image */}
          <img
            src="/img/map-preview.png"
            alt="Map location"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <button className="px-6 py-3 bg-yellow-500 text-black rounded-full font-semibold group-hover:scale-105 transition">
              View Map
            </button>
          </div>
        </div>
      ) : (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7911.625577127877!2d3.9790742653986544!3d7.485913406869393!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1774788137687!5m2!1sen!2sng"
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>
      )}
    </div>
  );
};

export default Map;
