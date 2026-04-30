"use client";

import { NAV_ITEMS } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className="fixed top-0 left-0 right-0 px-6 py-4 md:px-12 md:py-6  bg-(--secondary-background-color/80) backdrop-blur-md border-b border-white/5 z-50">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-3 group relative z-50"
          >
            <div className="absolute inset-0 bg-teal-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Image src="/azapkaan_logo.svg" alt="Logo" width={40} height={40} />
          </Link>
        </div>

        {/*desktop menu */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.id}
              className="relative text-gray-400 hover:text-teal-300 transition-colors duration-300 font-medium tracking-wide group"
            >
              <Link href={item.href}>{item.title}</Link>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(20,184,166,0.8)]"></span>
            </li>
          ))}
        </ul>

        {/*mobile menu */}
        <button
          className="md:hidden text-gray-400 hover:text-teal-300 transition-colors focus:outline-none z-50 relative"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-full left-0 right-0 bg-[#06090e]/95 backdrop-blur-xl border-b border-white/5 md:hidden shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            >
              <div className="flex flex-col items-center py-8 gap-6">
                {NAV_ITEMS.map((item, index) => (
                  <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    key={item.id}
                    href={`#${item.href.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-teal-300 text-lg font-medium tracking-wide transition-colors relative group"
                  >
                    {item.title}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
