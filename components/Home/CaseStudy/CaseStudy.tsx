"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const caseStudies = [
  {
    id: 1,
    title: "E-Commerce Redesign",
    category: "UI/UX",
    desc: "Modern redesign that boosted conversions by 42%.",
    // img: "/images/case1.jpg",
  },
  {
    id: 2,
    title: "Fintech Dashboard",
    category: "Web App",
    desc: "A scalable dashboard for 50k daily active users.",
    // img: "/images/case2.jpg",
  },
  {
    id: 3,
    title: "Brand Identity Pack",
    category: "Branding",
    desc: "Complete brand design system for a SaaS startup.",
    // img: "/images/case3.jpg",
  },
  {
    id: 4,
    title: "Fitness Mobile App",
    category: "Mobile App",
    desc: "Health tracking app with stunning visuals.",
    // img: "/images/case4.jpg",
  },
  {
    id: 5,
    title: "Crypto Trading UI",
    category: "UI/UX",
    desc: "Premium UI design for live trading platform.",
    // img: "/images/case5.jpg",
  },
];

const filters = ["All", "UI/UX", "Branding", "Web App", "Mobile App"];

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? caseStudies
    : caseStudies.filter((c) => c.category === activeFilter);

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#0A1A4E]"
        >
          Our <span className="text-orange-500">Case Studies</span>
        </motion.h2>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`
                px-5 py-2 rounded-full border text-sm font-medium transition
                ${activeFilter === f
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                  : "border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-500"}
              `}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Horizontal Scroll Slider */}
        <div
          className="
            flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4
            scrollbar-hide
          "
        >
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4 }}
              className="
                min-w-[85%] sm:min-w-[60%] md:min-w-[40%] lg:min-w-[32%]
                bg-white shadow-xl rounded-2xl snap-center
                border border-gray-100 hover:shadow-2xl hover:-translate-y-1
                transition p-5
              "
            >
              <div className="w-full h-52 rounded-xl overflow-hidden mb-4">
                <img
                  src="/images/case_placeholder.jpg"
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-semibold text-[#0A1A4E]">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>

              <div className="mt-4">
                <span className="text-orange-500 font-semibold text-sm">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
