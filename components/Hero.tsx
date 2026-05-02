"use client";
import { NAV_ITEMS } from "@/constants";
import { motion } from "framer-motion";
import { ChevronRight, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const Hero = () => {
  const projects = NAV_ITEMS.find((item) => item.id === "projects")!;
  const contact = NAV_ITEMS.find((item) => item.id === "contact")!;
  return (
    <section>
      <div className="min-h-screen flex items-center justify-center relative pt-20 px-6">
        <div className="max-w-4xl mx-auto text-center z-10">
          {/* Animated Welcome Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-amber-50"
          >
            <div className="inline-block mb-4 px-4 py-1.5 bg-teal-500/10 border border-teal-500/30 rounded-full backdrop-blur-sm ">
              <h2 className="text-sm text-teal-300 font-medium tracking-wide uppercase drop-shadow-[0_0_8px_rgba(20,184,166,0.6)]">
                Welcome to My Portfolio{" "}
              </h2>
            </div>
          </motion.div>

          {/* Animated Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white text-5xl md:text-7xl mb-6 lg:text-8xl font-bold tracking-tight leading-tight"
          >
            Hi, I'm{" "}
            <span className="bg-linear-to-r from-teal-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(20,184,166,0.4)]">
              Alperen
            </span>
            ,{" "}
            <span className="bg-linear-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
              Android Developer
            </span>
          </motion.h1>

          {/* Animated Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl font-normal mb-10 leading-relaxed max-w-2xl mx-auto text-gray-400"
          >
            Crafting high-performance, pixel-perfect mobile experiences with
            Kotlin and Jetpack Compose. Turning complex problems into elegant
            Android solutions.
          </motion.p>

          {/* Animated Call-to-Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href={projects.href}
              className="group relative text-slate-900 px-8 py-4 font-semibold rounded-full hover:bg-teal-400 bg-teal-500 transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(20,184,166,0.4)] hover:shadow-[0_0_30px_rgba(20,184,166,0.6)] hover:-translate-y-1"
            >
              View Projects
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href={contact.href}
              className="group px-8 py-4 bg-transparent border-2 border-teal-500/50 hover:border-teal-400 text-teal-300 font-semibold rounded-full transition-all duration-300 flex items-center gap-2 hover:bg-teal-500/10 hover:shadow-[0_0_20px_rgba(20,184,166,0.2)] hover:-translate-y-1"
            >
              Contact Me
              <Mail className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
