import { Project } from "@/types";
import { motion } from "framer-motion";
import ImageWithFallback from "../ui/ImageWithFallBack";

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-[#111827] border border-white/5 hover:border-teal-500/50 rounded-2xl p-6 overflow-hidden transition-colors duration-500"
    >
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#0a0f18] z-10 pointer-events-none"></div>
      {/* Subtle glowing edge effect on hover */}
      <div className="absolute -inset-px bg-linear-to-r from-teal-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-sm -z-10"></div>

      <div className="h-64 overflow-hidden relative">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
