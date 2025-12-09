"use client";

import Image from "next/image";
import LOGO from "@/public/evontro.png";

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-blue-700 to-blue-600 text-white py-14 px-6 md:px-10 lg:px-16">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* LOGO + TEXT */}
        <div className="space-y-5">
          <h2 className="text-2xl font-bold tracking-wide">
            <Image
              src={LOGO}
              alt="Evontro"
              width={170}
              height={80}
              className="invert brightness-0 contrast-200"
            />
          </h2>
          <p className="text-white/90 leading-relaxed text-sm">
            We build digital experiences that help brands grow faster with
            innovative ideas, modern development and high-quality designs.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-3">
            {["facebook", "twitter", "github", "linkedin"].map((i) => (
              <div
                key={i}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-lg border border-white/10 hover:bg-white/20 transition"
              >
                <i className={`fa-brands fa-${i} text-lg`}></i>
              </div>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3 text-white/90">
            <li className="hover:text-orange-400 cursor-pointer">Home</li>
            <li className="hover:text-orange-400 cursor-pointer">Services</li>
            <li className="hover:text-orange-400 cursor-pointer">
              Case Studies
            </li>
            <li className="hover:text-orange-400 cursor-pointer">About Us</li>
            <li className="hover:text-orange-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Our Services</h3>
          <ul className="space-y-3 text-white/90">
            <li className="hover:text-orange-400 cursor-pointer">
              Web Development
            </li>
            <li className="hover:text-orange-400 cursor-pointer">
              Mobile Apps
            </li>
            <li className="hover:text-orange-400 cursor-pointer">
              UI/UX Design
            </li>
            <li className="hover:text-orange-400 cursor-pointer">Branding</li>
            <li className="hover:text-orange-400 cursor-pointer">
              Digital Marketing
            </li>
          </ul>
        </div>

        {/* SUBSCRIBE */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
          <p className="text-white/80 mb-4 text-sm">
            Subscribe to get the latest updates and offers.
          </p>

          {/* INPUT + BUTTON */}
          <div className="flex w-full items-center bg-white/10 border border-white/20 rounded-xl overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent py-3 px-4 text-sm placeholder-white/50 focus:outline-none"
            />

            <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-5 py-3 text-sm font-semibold whitespace-nowrap">
              Send
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-white/70 text-sm">
        Copyright © 2023 Evontro. All Rights Reserved.
      </div>
    </footer>
  );
}
