import Indicator from "@/components/indicator";
import SocialPill from "@/components/social-pill";
import Typewriter from "typewriter-effect";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const indicadores = [
  { end: 94, label: "Commits", subLabel: "Realizados" },
  { end: 32, label: "Proyectos", subLabel: "Realizados" },
];

const redesSociales = [
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

const HeroPage = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8 mt-10 sm:mt-16">
        <div className="max-w-3xl w-full space-y-8 animate-opacity-slide">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-white">
            ¡Hola, soy Kevin Villegas!
            <span className="text-primary-color">
              <Typewriter
                options={{
                  strings: ["FullStack", "Backend", "Frontend"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 50,
                }}
              />
            </span>
          </h1>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-black dark:text-white dark:text-opacity-80 font-semibold leading-relaxed">
            Soy ingeniero de sistemas con pasión por transformar ideas complejas
            en soluciones digitales efectivas. Siempre buscando innovar y
            aprender. 🇨🇴
          </p>
          <nav className="flex flex-wrap justify-center gap-4 mt-8">
            {redesSociales.map((red, index) => (
              <SocialPill
                key={index}
                href={red.href}
                label={red.label}
                icono={red.icono}
              />
            ))}
          </nav>
        </div>
      </section>

      <div className="w-11/12 max-w-4xl mx-auto flex flex-col gap-12 items-center justify-center md:flex-row md:gap-8 md:justify-between">
        {indicadores.map((indicador) => (
          <Indicator
            key={indicador.label}
            end={indicador.end}
            label={indicador.label}
            subLabel={indicador.subLabel}
          />
        ))}
      </div>
    </>
  );
};

export default HeroPage;
