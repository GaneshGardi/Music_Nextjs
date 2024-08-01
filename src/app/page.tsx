import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instrcutors from "@/components/Instrcutors";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUS from "@/components/WhyChooseUS";
import { Inspiration } from "next/font/google";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUS />
      <TestimonialCards />
      <UpcomingWebinars />
      <Instrcutors />
    </main>
  );
}
