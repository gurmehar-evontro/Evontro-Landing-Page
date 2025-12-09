"use client";
import { navLinks } from "@/constants/Contant";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import LOGO from "@/public/evontro.png";

type NavProps = {
  openNav: () => void;
};

const Nav = ({ openNav }: NavProps) => {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 5) {
        setNavbar(true);
      } else if (window.scrollY < 5) {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed ${
        navbar ? "bg-white shadow-md" : "fixed"
      } w-full transition-all duration-200 h-[12vh] z-1000 bg-white`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <h1 className="text-xl md:text-2xl font-bold">
          <Image
            src={LOGO}
            alt="Evontro"
            width={170}
            height={80}
          />
        </h1>
        {/* NAV LINKS */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p className="nav__links">{link.name}</p>
              </Link>
            );
          })}
        </div>
        {/* BUTTONS */}
        <div className="flex items-center space-x-4">
          <button className="md:px-8 md:py-2.5 px-6 py-2 text-white font-semibold text-base bg-blue-500 hover:bg-blue-800 transition-all duration-200 rounded-full">
            Get A Quote
          </button>
        </div>
        {/* HAMBURGER MENU */}
        <HiBars3BottomRight
          onClick={openNav}
          className="w-8 h-8 cursor-pointer text-black lg:hidden"
        />
      </div>
    </div>
  );
};

export default Nav;
