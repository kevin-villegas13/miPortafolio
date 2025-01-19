import { Mail, Phone, Github, Linkedin, Download } from "lucide-react";

export const redesSociales = [
  {
    href: "/path-to-your-cv.pdf",
    icono: <Download size={20} />,
    label: "Descargar CV",
  },
  {
    href: "https://github.com/kevin-villegas13",
    icono: <Github size={20} />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/kevin-villegas-666bb61ab/",
    icono: <Linkedin size={20} />,
    label: "LinkedIn",
  },
  {
    href: "mailto:kevinvilleperez@gmail.com",
    icono: <Mail size={20} />,
    label: "Enviar un correo",
  },
  {
    href: "https://wa.me/573173552802",
    icono: <Phone size={20} />,
    label: "Contáctame por WhatsApp",
  },
];
