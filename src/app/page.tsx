import "./globals.css";
import HeroSection from "./components/HeroSection";
import FeaturedCourse from "./components/featuredCourse";
import Scroll from "./components/scroll";
import InfiniteMovingCardsDemo from "./components/movingCard";
import CardHover from "./components/cardHover";

export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
    <HeroSection/>
    <FeaturedCourse/>
    <Scroll/>
    <InfiniteMovingCardsDemo/>
    <CardHover/>
   </main>

  )
}