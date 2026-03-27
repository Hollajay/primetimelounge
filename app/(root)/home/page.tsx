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
import Map from "@/components/Map";
import RooftopParallax from "@/components/RooftopParrallax";

const HomePage = () => {
  return (
    <main className="w-full ">
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <WeeklyActivities />
      <UpcomingShows />
      <RecreationSection />
      <RooftopParallax />
      <GallerySection />
      <ContactSection />
      <Map />
      <Footer />
    </main>
  );
};

export default HomePage;
