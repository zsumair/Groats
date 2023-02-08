"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <Testimonials />
    </>
  );
}
