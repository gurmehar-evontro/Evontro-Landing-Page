"use client";

import { Briefcase, Code, LayoutDashboard, Server } from "lucide-react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Link from "next/link";

const services = [
  { icon: <Briefcase size={30} />, title: "Business Consulting", desc: "Expert solutions for your business growth." },
  { icon: <Code size={30} />, title: "Web Development", desc: "Responsive & interactive websites built with latest tech." },
  { icon: <LayoutDashboard size={30} />, title: "UI/UX Design", desc: "Premium design solutions for best user experience." },
  { icon: <Server size={30} />, title: "Cloud Solutions", desc: "Secure and scalable cloud infrastructure." },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Our Services</h2>
        <p className="text-lg text-gray-700 mt-4">We provide a wide range of premium IT services.</p>
      </div>

      {/* Grid with equal height cards */}
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 auto-rows-fr">
        {services.map((service, idx) => (
          <Tilt
            key={idx}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareColor="#ffffff"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-linear-to-r from-blue-600 to-blue-400 text-white rounded-xl p-6 shadow-lg flex flex-col items-center text-center transition-all duration-500 h-full hover:from-blue-500 hover:to-blue-700"
            >
              {/* Icon with subtle animation */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mb-4"
              >
                {service.icon}
              </motion.div>

              <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
              <p className="text-sm opacity-90 flex-1">{service.desc}</p>
            </motion.div>
          </Tilt>
        ))}
      </div>

      {/* View All Services Button */}
      <div className="mt-12 text-center">
        <Link
          href="/service"
          className="inline-block bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition duration-300 hover:scale-105"
        >
          View All Services
        </Link>
      </div>
    </section>
  );
}
