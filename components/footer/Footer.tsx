"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { GithubIcon } from "../icons/GithubIcon";
import { Mail } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("azapkaan@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <footer
      id="contact"
      className="py-16 px-6 bg-[#06090e] relative z-10 border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Image
            src="/azapkaan_logo.svg"
            alt="Azapkaan Logo"
            width={64}
            height={64}
            className="opacity-70 hover:opacity-100 transition-opacity drop-shadow-[0_0_10px_rgba(20,184,166,0.5)]"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl font-bold text-white mb-6"
        >
          Let's Build Something{" "}
          <span className="text-teal-300 drop-shadow-[0_0_12px_rgba(20,184,166,0.6)]">
            Amazing
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 mb-8 max-w-md"
        >
          Currently open for new opportunities. Whether you have a question or
          just want to say hi, I'll try my best to get back to you!
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onClick={handleCopy}
          className="text-xl md:text-2xl font-semibold text-teal-300 mb-12 hover:text-teal-200 transition-colors drop-shadow-[0_0_15px_rgba(20,184,166,0.6)] hover:drop-shadow-[0_0_25px_rgba(20,184,166,0.9)]"
        >
          {copied ? "Copied!" : "azapkaan@gmail.com"}
        </motion.button>

        <div className="flex items-center gap-6 mb-12">
          {[
            {
              icon: <GithubIcon className="w-6 h-6" />,
              href: "https://github.com/alperen-sakin",
              label: "GitHub",
              target: "_blank",
              rel: "noopener noreferrer",
            },

            {
              icon: <Mail className="w-6 h-6" />,
              href: "mailto:azapkaan@gmail.com",
              label: "Email",
            },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              href={social.href}
              aria-label={social.label}
              target={social.target}
              rel={social.rel}
              className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-teal-300 hover:bg-teal-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(20,184,166,0.5)] border border-transparent hover:border-teal-500/30"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        <div className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Alperen. All rights reserved. Built with
          Next.js & Tailwind.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
