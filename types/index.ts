import { LucideIcon } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface Skill {
  id: number;
  icon: LucideIcon;
  title: string;
  skillNames: string[];
}
