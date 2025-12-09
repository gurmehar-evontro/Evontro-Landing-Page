"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useParams } from "next/navigation";

interface Service {
  title: string;
  desc: string;
  detail: string;
  icon: string;
  image: string;
}

const services: Service[] = [
  {
    title: "Web Development",
    desc: "High-performance websites using Next.js, React & modern technologies.",
    detail:
      "We deliver cutting-edge web solutions using modern frameworks like Next.js, React, and Tailwind CSS. Every project focuses on performance, scalability, and UX/UI excellence. From landing pages to enterprise web apps, our team ensures pixel-perfect and optimized results.",
    icon: "/icons/web-dev.svg",
    image: "/images/services/web-dev.jpg",
  },
  {
    title: "Mobile App Development",
    desc: "iOS & Android apps with smooth UX & scalable architecture.",
    detail:
      "Our mobile app solutions combine design excellence with robust architecture. We create iOS and Android apps that are fast, visually stunning, and user-friendly. Using React Native and native technologies, your app will stand out in the market.",
    icon: "/icons/mobile-app.svg",
    image: "/images/services/mobile-app.jpg",
  },
  {
    title: "UI/UX Design",
    desc: "Pixel-perfect designs, wireframes & brand identity.",
    detail:
      "We craft world-class digital experiences focusing on user behavior and brand identity. Our UI/UX design process includes research, wireframes, prototypes, and final design, all ensuring a premium, cohesive, and engaging experience.",
    icon: "/icons/ui-ux.svg",
    image: "/images/services/ui-ux.jpg",
  },
  {
    title: "SEO & Digital Marketing",
    desc: "Improve your online presence & visibility.",
    detail:
      "Our SEO and digital marketing services help your business reach its target audience effectively. From on-page SEO to content marketing and paid campaigns, we implement strategies that drive traffic, increase conversions, and boost your online presence.",
    icon: "/icons/seo.svg",
    image: "/images/services/seo.jpg",
  },
  {
    title: "Consulting & Strategy",
    desc: "Expert advice to grow your business digitally.",
    detail:
      "We provide strategic consulting to help you navigate the digital landscape. Our experts analyze your business needs and market trends to develop tailored strategies that drive growth, enhance customer engagement, and maximize ROI.",
    icon: "/icons/strategy.svg",
    image: "/images/services/consulting.jpg",
  },
  {
    title: "E-Commerce Solutions",
    desc: "Build powerful online stores with smooth checkout.",
    detail:
      "We develop robust e-commerce platforms that provide seamless shopping experiences. From storefront design to payment integration and inventory management, our solutions are tailored to boost sales and enhance customer satisfaction.",
    icon: "/icons/ecommerce.svg",
    image: "/images/services/ecommerce.jpg",
  },
];

export default function ServiceDetailPage() {
  const params = useParams(); // slug from URL
  const slug = params.slug as string;

  // Find service by slug
  const service = services.find(
    (s) =>
      s.title
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/\s+/g, "-")
        .replace(/\//g, "-") === slug
  );

  if (!service)
    return (
      <div className="w-full min-h-screen flex items-center justify-center text-gray-600">
        Service not found
      </div>
    );

  return (
    <div className="w-full min-h-screen bg-white text-gray-900">
      {/* ================= HERO ================= */}
      <section className="w-full h-[50vh] flex items-center justify-center bg-linear-to-b from-blue-600/80 to-blue-800 text-white text-center px-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-600 via-blue-400 to-gray-50 opacity-40" />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold z-10 text-center"
        >
          {service.title}
        </motion.h1>
      </section>

      {/* ================= SERVICE DETAIL ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={service.image}
            alt={service.title}
            width={600}
            height={400}
            className="rounded-3xl shadow-2xl object-cover w-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">{service.title}</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {service.detail}
          </p>

          <div className="flex gap-4 mt-4">
            <Image
              src={service.icon}
              alt={service.title}
              width={50}
              height={50}
            />
            <span className="text-gray-600">{service.desc}</span>
          </div>
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section className="w-full py-16 px-6 text-center bg-gray-50">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-extrabold mb-6"
        >
          Interested in this Service?
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 px-8 py-4 rounded-xl font-semibold text-white hover:bg-blue-700 transition"
        >
          Contact Us
        </motion.button>
      </section>
    </div>
  );
}
