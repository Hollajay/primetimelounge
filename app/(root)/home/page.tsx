import Image from "next/image";
import Link from "next/link";
import "./home.css";
import { UpcomingShows } from "@/components/upcomingCarousel/carousel";
import { WeeklyActivities } from "@/components/WeeklyActivities";
import { RecreationSection } from "@/components/Recreations";
import CloudNineSection from "@/components/Cloud";
import { GallerySection } from "@/components/Gallery";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/footer/Footer";
import AboutSection from "@/components/AboutSection";
import Navbar from "@/components/nav/Nav";
import HeroSlider from "@/components/Hero";

const HomePage = () => {
  return (
    <main className="w-full ">
      <Navbar />
      <HeroSlider />

      {/* about us */}

      <AboutSection />
      <WeeklyActivities />

      <div id="parallax-world-of-ugg">
        {/* Section One */}
        <section className="parallax-one flex items-center justify-center">
          <div className="w-full md:py-40 py-10 bg-black/40 flex flex-col items-center justify-center">
            <h1 className="md:text-6xl text-3xl text-white">ROOFTOP</h1>
            <p className="md:text-3xl text-white">
              Where the city lights meet the vibe.
            </p>
            <p className="md:text-3xl text-white">
              Every Thursday, we go higher.
            </p>
          </div>
        </section>

        <section className="bg-white  text-center">
          <UpcomingShows />
        </section>

        <RecreationSection />

        <section className="parallax-three flex items-center justify-center">
          <CloudNineSection />
        </section>
        <GallerySection />
        <ContactSection />
        <div className="w-full h-[400px]">
          <iframe
            src="https://maps.google.com/maps?q=lagos&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default HomePage;
