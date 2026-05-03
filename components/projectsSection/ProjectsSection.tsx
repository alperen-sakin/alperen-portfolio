"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../icons/GithubIcon";

const ProjectsSection = () => {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col mb-16 gap-6 md:flex-row md:items-end md:justify-between "
        >
          <div>
            <h2 className="text-4xl md:text-5xl mb-4 text-white font-bold drop-shadow-[0_0_12px_rgba(20,184,166,0.6)]">
              Featured{" "}
              <span className="bg-linear-to-r from-teal-300 to-teal-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-teal-500 rounded-full shadow-[0_0_10px_rgba(20,184,166,0.8)]"></div>
          </div>

          <Link
            href="https://github.com/alperen-sakin?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center bg-[#111827] hover:bg-teal-500/10 border border-teal-500/30 hover:border-teal-400 w-fit transition-all duration-300 rounded-full px-6 py-3 gap-2 hover:shadow-[0_0_15px_rgba(20,184,166,0.3)] font-medium text-teal-300"
          >
            <GithubIcon className="w-4 h-4 text-teal-300" />
            View All on Github
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
