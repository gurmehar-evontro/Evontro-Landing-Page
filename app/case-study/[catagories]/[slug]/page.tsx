"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function CaseStudyPage() {
  return (
    <div className="w-full bg-white">

      {/* ---------------- HERO ---------------- */}
      <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/case-banner.jpg"
          alt="case study"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        {/* Title */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold text-white"
          >
            Mobile App for Smart Finance Management
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-200 mt-4 text-lg"
          >
            FinTech • UI/UX • Mobile Development • Cloud
          </motion.p>
        </div>
      </div>

      {/* ---------------- CONTENT WRAPPER ---------------- */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-20 py-20 space-y-20">

        {/* Back Button */}
        <Link href="/case-study">
          <div className="flex items-center gap-2 text-[#1A2FB3] hover:text-orange-500 font-medium cursor-pointer">
            <ArrowLeft size={18} /> Back to Case Studies
          </div>
        </Link>

        {/* ---------------- SUMMARY SECTION ---------------- */}
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-gray-500 text-sm">Industry</h3>
            <p className="text-xl font-semibold text-[#1A2FB3]">FinTech</p>
          </div>

          <div>
            <h3 className="text-gray-500 text-sm">Services</h3>
            <p className="text-xl font-semibold text-[#1A2FB3]">
              UI/UX, Mobile App, Cloud Integration
            </p>
          </div>

          <div>
            <h3 className="text-gray-500 text-sm">Year</h3>
            <p className="text-xl font-semibold text-[#1A2FB3]">2023 - 2024</p>
          </div>
        </div>

        {/* ---------------- SECTION: PROBLEM ---------------- */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2FB3]">
            The Problem
          </h2>
          <p className="mt-5 text-gray-600 leading-relaxed text-lg">
            The client was struggling with customer retention due to outdated
            UI, poor performance, and lack of intelligent insights for money
            management.
          </p>
        </div>

        {/* ---------------- SECTION: SOLUTION ---------------- */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2FB3]">
            The Solution
          </h2>

          <div className="grid md:grid-cols-2 gap-10 mt-8">
            <ul className="space-y-5">
              {[
                "Modern UI/UX with smooth animations",
                "AI-based spending insights",
                "Secure cloud architecture",
                "Real-time syncing across devices",
                "One-tap payments & smart alerts",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-orange-500 mt-1" size={20} />
                  <p className="text-gray-700">{point}</p>
                </li>
              ))}
            </ul>

            <div className="w-full h-64 relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/case-solution.jpg"
                alt="case study solution"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* ---------------- IMAGE GALLERY ---------------- */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2FB3]">
            Screens & Visuals
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {["/case1.jpg", "/case2.jpg", "/case3.jpg", "/case4.jpg", "/case5.jpg", "/case6.jpg"].map(
              (img, idx) => (
                <motion.div
                  key={idx}
                  className="relative w-full h-56 rounded-xl overflow-hidden shadow-md group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Image
                    src={img}
                    alt="case image"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>
              )
            )}
          </div>
        </div>

        {/* ---------------- RESULTS ---------------- */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2FB3]">
            The Results
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-8">
            {[
              { number: "65%", label: "User Retention Increased" },
              { number: "40%", label: "Growth in App Downloads" },
              { number: "2.3M+", label: "Active Monthly Users" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="p-8 rounded-2xl bg-[#F3F6FF] border border-[#DBE4FF] shadow-sm text-center"
              >
                <h3 className="text-4xl font-bold text-orange-500">
                  {stat.number}
                </h3>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ---------------- TESTIMONIAL ---------------- */}
        <div className="bg-[#F8FAFF] p-10 md:p-14 rounded-2xl border shadow-md mt-10">
          <p className="text-gray-700 italic text-lg leading-relaxed">
            “Evontro transformed our app completely — we have seen massive improvement
            in user engagement and retention. Their design sense and technical
            execution are unmatched.”
          </p>
          <p className="mt-5 font-semibold text-[#1A2FB3]">— CEO, FinTech Corp</p>
        </div>

      </div>

      {/* ---------------- CTA ---------------- */}
      <div className="w-full bg-[#1A2FB3] py-16 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold">
          Want to Build Something Amazing?
        </h2>
        <p className="text-gray-300 mt-4">
          Let’s work together and create something extraordinary.
        </p>

        <button className="mt-6 px-8 py-3 bg-orange-500 hover:bg-orange-600 transition-all text-white rounded-xl font-semibold">
          Start Your Project →
        </button>
      </div>
    </div>
  );
}
