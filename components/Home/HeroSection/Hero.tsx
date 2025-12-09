"use client";

import Image from "next/image";
import HERO_IMG from "@/public/hero.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-linear-to-r from-[#1A2FB3] to-[#0674E7] flex items-center">
      {/* Animated blobs */}
      <motion.div 
        className="absolute w-72 h-72 bg-orange-400 rounded-full opacity-30 -top-20 -left-20 blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div 
        className="absolute w-96 h-96 bg-blue-500 rounded-full opacity-30 -bottom-32 -right-32 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      />

      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-12 relative z-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-white space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Innovative IT Solutions <span className="text-orange-400">for Your Business</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            We build interactive, responsive, and premium digital solutions tailored to your business needs.
          </p>
          <div className="flex gap-4">
            <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg">
              Get Started
            </button>
            <button className="border-2 border-white hover:border-orange-400 text-white px-6 py-3 rounded-lg font-semibold transition-all">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative w-full h-[400px] md:h-[500px] mb-10 md:mb-0"
        >
          <Image
            src={HERO_IMG}
            alt="Hero"
            fill
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
