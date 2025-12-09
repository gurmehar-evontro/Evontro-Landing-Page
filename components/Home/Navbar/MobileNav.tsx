import { navLinks } from "@/constants/Contant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type MobileNavProps = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: MobileNavProps) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-10000 bg-black opacity-70 w-full h-screen`}
      ></div>
      {/* Mobile Menu */}
      <div
        className={`${navOpen} fixed text-white justify-center flex flex-col h-full transform transition-all duration-500 delay-200 w-[80%] sm:w-[60%] space-y-6 z-100006 bg-blue-700`}
      >
        {navLinks.map((link) => {
          return (
            <Link href={link.url} key={link.id}>
              <p className="nav__links text-white text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm;text-[30px]">
                {link.name}
              </p>
            </Link>
          );
        })}
        {/* Close Button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
        />
      </div>
    </div>
  );
};

export default MobileNav;
