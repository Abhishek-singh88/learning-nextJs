import "./globals.css";
import HeroSection from "./components/HeroSection";
import FeaturedCourse from "./components/featuredCourse";
import Scroll from "./components/scroll";
import InfiniteMovingCardsDemo from "./components/movingCard";
import CardHover from "./components/cardHover";
import Instructor from "./components/instructor";
import Footer from "./components/footer";

export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
    <HeroSection/>
    <FeaturedCourse/>
    <Scroll/>
    <InfiniteMovingCardsDemo/>
    <CardHover/>
    <Instructor/>
    <Footer/>
   </main>

  )
}