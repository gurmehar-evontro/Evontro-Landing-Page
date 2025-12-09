"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "What services does your company provide?",
    answer:
      "We offer web development, mobile app development, UI/UX design, branding, SEO, cloud solutions, and complete end-to-end IT consulting.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most projects take between 4–12 weeks depending on complexity, features, and revisions required.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes, we provide maintenance plans, support contracts, and on-demand updates even after your product goes live.",
  },
  {
    question: "Can you work with international clients?",
    answer:
      "Absolutely! We work with clients across the US, UK, Canada, UAE, and Europe with full communication transparency.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-20 px-6 md:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto overflow-visible">
        
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1A2FB3]">
          Frequently Asked <span className="text-orange-500">Questions</span>
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Everything you need to know about our services, process, and support.
        </p>

        <div className="mt-14 space-y-6">

          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 bg-white shadow-sm rounded-xl p-5 overflow-visible transition-all"
              >
                {/* Header */}
                <button
                  className="w-full flex justify-between items-center text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-[#1A2FB3]">
                    {item.question}
                  </h3>

                  {isOpen ? (
                    <Minus className="text-orange-500" size={24} />
                  ) : (
                    <Plus className="text-orange-500" size={24} />
                  )}
                </button>

                {/* Animated Answer */}
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 mt-3 pb-2">
                    {item.answer}
                  </p>
                </motion.div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
