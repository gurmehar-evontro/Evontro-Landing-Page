"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      desc: "High-performance websites using Next.js & React.",
      icon: "/icons/web-dev.svg",
    },
    {
      title: "Mobile App Development",
      desc: "iOS & Android apps with smooth UX & scalable architecture.",
      icon: "/icons/mobile-app.svg",
    },
    {
      title: "UI/UX Design",
      desc: "Clean & modern designs for web & mobile apps.",
      icon: "/icons/ui-ux.svg",
    },
    {
      title: "SEO & Digital Marketing",
      desc: "Improve your online presence & visibility.",
      icon: "/icons/seo.svg",
    },
    {
      title: "E-Commerce Solutions",
      desc: "Build powerful online stores with smooth checkout.",
      icon: "/icons/ecommerce.svg",
    },
    {
      title: "Consulting & Strategy",
      desc: "Expert advice to grow your business digitally.",
      icon: "/icons/strategy.svg",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white text-gray-900">
      {/* ================= HERO ================= */}
      <section className="relative h-[40vh] flex items-center justify-center bg-linear-to-r from-blue-600/80 to-blue-800 text-white overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-bold text-center"
        >
          Our Services
        </motion.h1>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3 overflow-hidden">
        {services.map((service, i) => {
          const slug = service.title
            .toLowerCase()
            .replace(/&/g, "and")
            .replace(/\s+/g, "-")
            .replace(/\//g, "-");
          return (
            <Link key={i} href={`/service/${slug}`}>
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition cursor-pointer"
              >
                <div className="w-16 h-16 mb-4">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={64}
                    height={64}
                  />
                </div>

                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700 text-sm">{service.desc}</p>
              </motion.div>
            </Link>
          );
        })}
      </section>

      {/* ================= CTA ================= */}
      <section className="w-full py-16 px-6 text-center bg-gray-100">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-bold mb-4"
        >
          Ready to Start Your Project?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-lg mx-auto mb-6 text-gray-700"
        >
          Contact our team today and let's craft premium digital experiences for
          your brand.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Contact Us
        </motion.button>
      </section>
    </div>
  );
}
