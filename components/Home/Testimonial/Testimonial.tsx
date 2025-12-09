"use client";

import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "CEO, TechVibe",
    // img: "/avatar1.png",
    review:
      "Evontro delivered our project with top-notch quality. The UI/UX experience is outstanding and the performance is flawless!",
  },
  {
    name: "Simran Kaur",
    role: "Founder, SkWeb",
    // img: "/avatar2.png",
    review:
      "Absolutely premium work. Smooth animations, clean code, and super professional communication. Highly recommended!",
  },
  {
    name: "Aman Verma",
    role: "Marketing Head, SoftEdge",
    // img: "/avatar3.png",
    review:
      "The team understands modern design standards very well. The landing page they created boosted our conversions massively.",
  },
  {
    name: "Priya Sharma",
    role: "Product Manager, CloudX",
    // img: "/avatar4.png",
    review:
      "Super premium experience! The animations, responsiveness, and the attention to detail are spot on.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-linear-to-br from-[#1A2FB3] to-[#0674E7] text-white">
      <div className="text-center mb-12 px-6">
        <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
        <p className="text-lg opacity-90 mt-3">Premium reviews from our happy clients.</p>
      </div>

      <div className="relative w-full flex justify-center overflow-hidden h-[360px]">
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-xl max-w-xl mx-auto text-center border border-white/20"
          >
            {/* Avatar */}
            <img
              src={""}
              className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white/30"
            />

            {/* Review */}
            <p className="text-lg italic leading-relaxed">“{testimonials[index].review}”</p>

            {/* Name */}
            <h3 className="text-xl font-bold mt-6">{testimonials[index].name}</h3>
            <p className="opacity-80">{testimonials[index].role}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 gap-3">
        {testimonials.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              i === index ? "bg-orange-400 scale-125" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
