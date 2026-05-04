import { Project } from "@/types";
import { motion } from "framer-motion";
import ImageWithFallback from "../ui/ImageWithFallBack";
import Link from "next/link";
import { GithubIcon } from "../icons/GithubIcon";
import { ExternalLink } from "lucide-react";

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

      <div className="p-6 relative z-20">
        <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-emerald-300 drop-shadow-[0_0_10px_rgba(20,184,166,0.6)] mb-3">
          {project.title}
        </h3>

        <p className="text-sm font-normal text-gray-400 leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium text-teal-300 bg-teal-500/10 border border-teal-500/20 px-2.5 py-1 gap-2 rounded-md shadow-[0_0_5px_rgba(20,184,166,0.1)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto">
          <Link
            href={project.githubUrl}
            className="text-sm font-semibold text-gray-300 hover:text-teal-300 gap-2 flex items-center transition-colors "
          >
            <GithubIcon className="w-4 h-4" />
            Code
          </Link>

          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              className="text-sm font-semibold text-gray-300 hover:text-teal-300 gap-2 flex items-center transition-colors "
            >
              <ExternalLink className="w-4 h-4" />
              Preview
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
