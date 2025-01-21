import { SiteConfigItem } from "@/interface/site-config";
import { Briefcase, GraduationCap, User, Code, Home } from "lucide-react";

export const siteConfig: SiteConfigItem[] = [
  {
    title: "Inicio",
    label: "inicio",
    url: "#inicio",
    icon: <Home className="w-6 h-6" />,
  },
  {
    title: "Experiencia",
    label: "experiencia",
    url: "#experiencia",
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    title: "Proyectos",
    label: "proyectos",
    url: "#proyectos",
    icon: <Code className="w-6 h-6" />,
  },
  {
    title: "Educación",
    label: "educacion",
    url: "#educacion",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    title: "Sobre mí",
    label: "sobre-mi",
    url: "#sobre-mi",
    icon: <User className="w-6 h-6" />,
  },
];
