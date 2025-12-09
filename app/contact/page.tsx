"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function ContactPage() {
    const officeLocation = {
    lat: 26.26324033055318,
    lng: 73.01210213807386,
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#1b2a7d] via-[#0f173f] to-[#1b2360] text-white">
      {/* ===================== HERO ===================== */}
      <section className="w-full py-28 px-6 text-center overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-4"
        >
          Contact <span className="text-orange-500">Us</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg opacity-80 max-w-2xl mx-auto"
        >
          We're here to help you build exceptional digital products.  
          Reach out & let’s start your next big project.
        </motion.p>
      </section>

      {/* ===================== MAIN GRID ===================== */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 pb-20">

        {/* ===================== FORM ===================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/10"
        >
          <h2 className="text-2xl font-bold mb-6">Send us a message</h2>

          <form className="space-y-5">
            <div>
              <label className="text-sm opacity-80">Your Name</label>
              <input
                type="text"
                className="w-full mt-1 p-3 bg-white/5 border border-white/20 rounded-xl outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="text-sm opacity-80">Email Address</label>
              <input
                type="email"
                className="w-full mt-1 p-3 bg-white/5 border border-white/20 rounded-xl outline-none"
                placeholder="Enter email"
              />
            </div>

            <div>
              <label className="text-sm opacity-80">Phone Number</label>
              <input
                type="text"
                className="w-full mt-1 p-3 bg-white/5 border border-white/20 rounded-xl outline-none"
                placeholder="Enter phone number"
              />
            </div>

            <div>
              <label className="text-sm opacity-80">Message</label>
              <textarea
                rows={4}
                className="w-full mt-1 p-3 bg-white/5 border border-white/20 rounded-xl outline-none"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button className="w-full py-3 bg-orange-500 rounded-xl font-semibold hover:bg-orange-600 transition">
              Send Message
            </button>
          </form>
        </motion.div>

        {/* ===================== CONTACT DETAILS & MAP ===================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          {/* DETAILS CARD */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/10 p-8 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

            <div className="space-y-5">

              <div className="flex gap-4 items-start">
                <MapPin className="text-orange-500 w-6 h-6" />
                <p className="opacity-90">SCO 18, Sector 20 Panchkula, Haryana, India</p>
              </div>

              <div className="flex gap-4 items-center">
                <Mail className="text-orange-500 w-6 h-6" />
                <p className="opacity-90">contact@yourcompany.com</p>
              </div>

              <div className="flex gap-4 items-center">
                <Phone className="text-orange-500 w-6 h-6" />
                <p className="opacity-90">+91 98765 43210</p>
              </div>

              <div className="flex gap-4 items-center">
                <Clock className="text-orange-500 w-6 h-6" />
                <p className="opacity-90">Mon – Fri: 10:00 AM – 7:00 PM</p>
              </div>

            </div>
          </div>

          {/* MAP CARD */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/10 p-4 rounded-3xl shadow-xl">
            <h2 className="text-xl font-semibold mb-3">Your Current Location</h2>

             <iframe
              className="w-full h-64 rounded-2xl"
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps?q=Vishnu+prakash+R+punglia+ltd&hl=es;z=14&output=embed`}
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
