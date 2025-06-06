import "./globals.css";
import HeroSection from "./components/HeroSection";
import FeaturedCourse from "./components/featuredCourse";

export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
    <HeroSection/>
    <FeaturedCourse/>
   </main>

  )
}