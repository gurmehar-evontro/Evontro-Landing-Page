"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { label: "Happy Clients", value: 120 },
  { label: "Projects Delivered", value: 180 },
  { label: "Team Members", value: 25 },
  { label: "Years of Experience", value: 5 },
];

const processSteps = [
  {
    title: "Discovery & Research",
    desc: "We understand your business, goals, and challenges to build the perfect solution.",
  },
  {
    title: "Wireframing & Planning",
    desc: "We plan the complete digital experience with clarity and precision.",
  },
  {
    title: "Design & Development",
    desc: "We design visually premium UI and build high-performance applications.",
  },
  {
    title: "Testing & Deployment",
    desc: "We ensure flawless delivery with proper QA and seamless deployment.",
  },
];

const founders = [
  {
    name: "Vishal Fulwani",
    role: "Co-Founder & CEO",
    img: "/founder1.png",
    bio: "Leading the vision with strong expertise in product strategy and business scaling.",
  },
  {
    name: "Harvinder Singh",
    role: "Co-Founder & CTO",
    img: "/founder2.png",
    bio: "Architect of innovation — building scalable, modern and robust tech foundations.",
  },
];

export default function AboutPage() {
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const { ref: processRef, inView: processInView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <main className="bg-white">

      {/* HERO SECTION */}
      <section className="w-full h-[50vh] flex items-center justify-center bg-linear-to-b from-blue-600/80 to-blue-800 text-white text-center px-5 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto px-6"
        >
          <h1 className="text-5xl font-bold leading-tight">
            We Build Premium Digital Experiences
          </h1>
          <p className="mt-4 text-lg">
            Innovative solutions, modern technologies & world-class execution.
          </p>
        </motion.div>

        {/* <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/10 to-white"></div> */}
      </section>

      {/* WHO WE ARE */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-10"
        >
          Who We Are
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center text-gray-600 text-lg max-w-3xl mx-auto"
        >
          We are a team of passionate designers, developers, strategists, and creators who build
          world-class digital products. From startups to enterprises, we help brands grow with modern,
          scalable and visually premium solutions.
        </motion.p>
      </section>

      {/* ⭐ STATS SECTION WITH COUNTER (INTEGRATED) */}
      <section ref={statsRef} className="py-24 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
            >
              <p className="text-4xl font-bold text-orange-500">
                {statsInView ? (
                  <CountUp start={0} end={item.value} duration={2} separator="," />
                ) : (
                  0
                )}
                +
              </p>
              <p className="text-gray-700 text-sm mt-2 font-medium">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* OUR PROCESS — Scroll Animation */}
      <section ref={processRef} className="py-28 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our Premium Process
        </h2>

        <div className="max-w-5xl mx-auto grid gap-14">

          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              animate={processInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
            >
              <div className="text-6xl font-extrabold text-orange-500 opacity-40">
                {i + 1}
              </div>

              <div>
                <h3 className="text-2xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-gray-600">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOUNDERS SECTION */}
      <section className="py-28 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Meet Our Co-Founders</h2>

        <div className="grid md:grid-cols-2 gap-14">

          {founders.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100"
            >
              <img
                src={f.img}
                alt={f.name}
                className="w-40 h-40 mx-auto rounded-full object-cover shadow-md"
              />

              <h3 className="text-2xl font-semibold text-center mt-6">{f.name}</h3>
              <p className="text-orange-500 text-center font-medium">{f.role}</p>
              <p className="text-gray-600 mt-4 text-center">{f.bio}</p>
            </motion.div>
          ))}

        </div>
      </section>
    </main>
  );
}
