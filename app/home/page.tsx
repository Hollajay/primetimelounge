
import Image from "next/image";
import Link from "next/link";
import './home.css'
import { UpcomingShows } from "@/components/upcomingCarousel/carousel";
import { WeeklyActivities } from "@/components/WeeklyActivities";
import { RecreationSection } from "@/components/Recreations";
import CloudNineSection from "@/components/Cloud";


const HomePage = () => {
  return (
    <main className="w-full ">
      <section className="relative ">
        <div className="w-full h-screen">
          <video
            className="h-screen w-full object-cover"
            width="100%"
            height="800"
            autoPlay
            loop
            controls
            muted
            preload=""
            playsInline
          >
            <source src="/video/hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col  items-center justify-center bg-[#00000084]">
          <h1 className="text-[80px] text-white font-bold">
            PRIME TIME LOUNGE
          </h1>
          <p></p>
          <div className="flex items-center justify-center gap-4"> 
            <button className="border-2 border-white rounded-lg p-3 text-white text-xl">
              Book Reservation
            </button>
            <button className="border-2 border-white rounded-lg p-3 text-white text-xl">
              Visit our page
            </button>
          </div>
        </div>
      </section>

      {/* about us */}

      <section className="bg-background">
        <h1 className="text-4xl text-center py-10 ">About Us</h1>
        <div className=" px-20 flex gap-12 flex-row-reverse items-center justify-between w-full">
          <div className="w-1/2 ">
            <Image
              width={"500"}
              height="700"
              className="w-full h-full rounded-2xl object-cover"
              src="/img/Primetime lounge.jpeg"
              alt="about-img"
            />
          </div>
          <div className="w-1/2 shadow-2xl py-8 px-4 rounded-xl flex-col flex gap-6 text-lg ">
            <p>
              Welcome to Prime Time Lounge, one of the finest destinations for
              relaxation, entertainment, and hospitality in Ibadan. Prime Time
              Lounge was created to give guests a unique blend of comfort,
              luxury, and exciting recreational experiences all in one place.
            </p>
            <p>
              At Prime Time Lounge, we go beyond the traditional lounge
              experience. Our facility features a comfortable hotel for guests
              who want to relax and stay in style, alongside a variety of
              recreational activities designed to keep every visit exciting.
              Guests can enjoy football, take a refreshing swim in our swimming
              pool, stay active in our modern gym, or simply unwind with friends
              in our vibrant lounge atmosphere.
            </p>
            <p>
              Whether you are visiting to relax after a long day, hang out with
              friends, enjoy sports, or spend the night in comfort, Prime Time
              Lounge offers the perfect environment for unforgettable moments.
              Our goal is to provide top-class service, great entertainment, and
              a welcoming atmosphere that keeps our guests coming back.
            </p>

            <Link href={"/about"} className="">
              More
            </Link>
           
          </div>
        </div>
      </section>
   <WeeklyActivities/>




    <div id="parallax-world-of-ugg">
      {/* Section One */}
      <section className="parallax-one flex items-center justify-center">
        <div className="w-full py-40 bg-transparent flex flex-col items-center justify-center">
          <h1 className="text-6xl">ROOFTOP</h1>
          <p className="text-3xl">Where the city lights meet the vibe.</p>
          <p className="text-3xl">Every Thursday, we go higher.</p>
        </div>
      </section>

      <section className="bg-white py-20 text-center">
        <UpcomingShows/>
      </section>

     

     <RecreationSection/>
     <CloudNineSection/>
     
     

     
      <section className="parallax-three flex items-center justify-center">
        <h2 className="text-white text-4xl font-bold">Premium Lounge</h2>
      </section>
    </div>

    </main>
  );
};

export default HomePage;
