import { Project, Skill } from "@/types";
import {
  Smartphone,
  Layers,
  Database,
  Code2,
  Monitor,
  Blocks,
} from "lucide-react";

export const NAV_ITEMS = [
  { id: "projects", title: "Projects", href: "#projects" },
  { id: "skills", title: "Skills", href: "#skills" },
  { id: "contact", title: "Contact", href: "#contact" },
];

export const ROUTES = {
  projects: "#projects",
  skills: "#skills",
  contact: "#contact",
} as const;

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "FinTech Tracker",
    description:
      "A comprehensive finance tracking application with real-time analytics, custom budgeting, and intuitive charts. Built with modern Android architecture.",
    image:
      "https://images.unsplash.com/photo-1671459923818-7d042e07a7ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwbW9iaWxlJTIwYXBwJTIwc2NyZWVuJTIwZGFya3xlbnwxfHx8fDE3NzMyODEwNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Kotlin", "Jetpack Compose", "MVVM", "Room", "Coroutines"],
    githubUrl: "https://github.com/user/fin-tech-tracker",
  },
  {
    id: 2,
    title: "BeatWave Player",
    description:
      "A beautiful music streaming app featuring a custom audio engine, offline playback, and dynamic UI that adapts to album artwork.",
    image:
      "https://images.unsplash.com/photo-1610041123544-ccc3e44dc567?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMG1vYmlsZSUyMGFwcCUyMHNjcmVlbiUyMGRhcmt8ZW58MXx8fHwxNzczMjgxMDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Kotlin", "ExoPlayer", "Clean Architecture", "Dagger Hilt"],
    githubUrl: "https://github.com/user/beatwave-player",
    liveUrl: "https://user.github.io/beatwave-player",
  },
  {
    id: 3,
    title: "TaskFlow Pro",
    description:
      "An advanced productivity suite for remote teams. Syncs across devices instantly using offline-first architecture.",
    image:
      "https://images.unsplash.com/photo-1738563710982-6ebe69cd5b6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXAlMjBkYXJrfGVufDF8fHx8MTc3MzE2MDQxMXww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Kotlin", "Jetpack Compose", "Firebase", "WorkManager"],
    githubUrl: "https://github.com/user/taskflow-pro",
  },
];

export const SKILLS: Skill[] = [
  {
    id: 1,
    title: "Core Android",
    icon: Smartphone,
    skillNames: ["Kotlin", "Android SDK", "Coroutines", "Flow"],
  },
  {
    id: 2,
    title: "Frontend (Next.js)",
    icon: Monitor,
    skillNames: [
      "Next.js 14+",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    id: 3,
    title: "Android UI/UX",
    icon: Layers,
    skillNames: ["Jetpack Compose", "XML", "Material Design 3", "Custom Views"],
  },
  {
    id: 4,
    title: "Web Ecosystem",
    icon: Blocks,
    skillNames: ["Redux / Zustand", "React Query", "Shadcn UI", "Lucide Icons"],
  },
  {
    id: 5,
    title: "Architecture & State",
    icon: Code2,
    skillNames: ["MVVM (Android)", "MVI", "Clean Architecture", "Dagger Hilt"],
  },
  {
    id: 6,
    title: "Backend & Database",
    icon: Database,
    skillNames: [
      "Room / SQLite",
      "Supabase",
      "Firebase",
      "RESTful APIs",
      "GraphQL",
    ],
  },
];
