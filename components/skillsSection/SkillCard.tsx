import { Skill } from "@/types";
import { motion } from "framer-motion";

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const Icon = skill.icon;
  return (
    <motion.div
      key={skill.id}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-linear-to-br from-teal-900/10 to-[#111827] border border-teal-500/20 rounded-2xl p-6 hover:shadow-[0_0_30px_rgba(20,184,166,0.15)] transition-shadow duration-500"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-teal-950/50 border border-teal-500/30 p-3 rounded-xl">
          <Icon className="text-teal-300 w-6 h-6 drop-shadow-[0_0_8px_rgba(20,184,166,0.8)]" />
        </div>

        <h3 className="text-xl font-bold text-white tracking-wide">
          {skill.title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {skill.skillNames.map((skillName, index) => (
          <span
            key={skillName}
            className="text-sm font-medium text-teal-200 hover:bg-teal-500/20 hover:border-teal-400 transition-colors cursor-default drop-shadow-[0_0_5px_rgba(20,184,166,0.2)] hover:drop-shadow-[0_0_10px_rgba(20,184,166,0.6)] bg-teal-500/5 border border-teal-500/20 px-3 py-1.5 rounded-lg"
          >
            {skillName}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
