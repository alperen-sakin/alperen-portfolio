"use client";

import { SKILLS } from "@/constants";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const SkillsSection = () => {
  return (
    <section className="py-24 px-6 relative z-10 bg-[#0a0f18]/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Technical{" "}
            <span className="bg-linear-to-r from-teal-300 to-teal-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(20,184,166,0.6)]">
              Arsenal
            </span>
          </h2>
          <div className="w-24 h-1 bg-teal-500 rounded-full shadow-[0_0_10px_rgba(20,184,166,0.8)] mx-auto"></div>
        </motion.div>

        {/* Skill cards will go here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, index) => (
            <SkillCard key={skill.id} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
