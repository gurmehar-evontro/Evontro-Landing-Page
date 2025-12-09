"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import LOGO from "@/public/evontro.png";

export default function ResponsiveNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/service" },
    { label: "Case Studies", href: "/case-study" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 left-0 top-0 overflow-x-hidden ${
        scrolled ? "bg-white/90 shadow-lg backdrop-blur-md" : "bg-transparent"
      }
      `}
    >
      <div className="max-w-[1400px] w-full mx-auto flex justify-between items-center px-6 py-4 overflow-x-hidden">
        {/* Logo */}
        <div className="text-2xl font-bold transition-colors">
          <Image
            src={LOGO}
            alt="Evontro"
            width={170}
            height={80}
            className={`${scrolled ? "" : "invert brightness-0 contrast-200"}`}
          />
        </div>

        {/* Desktop Nav (only lg and above) */}
        <ul
          className={`
            hidden lg:flex gap-6 font-medium transition-colors
            ${scrolled ? "text-blue-900" : "text-white"}
          `}
        >
          {navItems.map((link, idx) => (
            <li
              key={idx}
              className="cursor-pointer hover:text-orange-500 transition-colors"
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile + Tablet Hamburger (show until lg) */}
        <div
          className={`lg:hidden transition-colors ${
            scrolled ? "text-blue-900" : "text-white"
          }`}
        >
          {isOpen ? (
            <X size={26} onClick={() => setIsOpen(false)} />
          ) : (
            <Menu size={26} onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`lg:hidden py-6 px-6 flex flex-col gap-4 transition-all duration-300 ${
            scrolled
              ? "bg-white/90 text-blue-900"
              : "bg-white/10 text-white backdrop-blur-md"
          }
          `}
        >
          {navItems.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="hover:text-orange-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
