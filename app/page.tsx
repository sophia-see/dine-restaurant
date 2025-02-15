"use client"

import About from "@/components/about/About";
import Action from "@/components/action/Action";
import Events from "@/components/events/Events";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Highlights from "@/components/highlights/Highlights";

export default function Home() {
  return (
    <div 
      className={`
        h-full min-h-screen w-full min-w-screen
      `}
    >
      <Hero />
      <About />
      <Highlights />
      <Events />
      <Action />
      <Footer />
    </div>
  );
}
