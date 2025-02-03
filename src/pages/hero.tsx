import Indicator from "@/components/indicator";
import ModalCorreo from "@/components/modal-correo";
import SocialPill from "@/components/social-pill";
import { redesSociales } from "@/config/red-social";
import Typewriter from "typewriter-effect";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { useState } from "react";
import { useGitHubData } from "@/hooks/useGitHubData";

const HeroPage = () => {
  const { repos, orgCount } = useGitHubData();
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const indicadores = [
    { end: orgCount, label: "Organizaciones", subLabel: "Partícipe" },
    { end: repos.length, label: "Proyectos", subLabel: "Realizados" },
  ];

  return (
    <>
      <section className="w-full max-w-7xl mx-auto pt-16 mb-20 grid gap-20 justify-items-center md:pt-40 md:mb-40  md:gap-10 items-center text-center">
        <div className="max-w-3xl w-full space-y-8 animate-opacity-slide">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-white">
            ¡Hola, soy Kevin Villegas!
            <span className="text-primary-color">
              <Typewriter
                options={{
                  strings: [
                    "Desarrollador apasionado",
                    "Apasionado por la tecnología",
                    "Creador de soluciones",
                    "Desarrollador .NET",
                    "Innovador constante",
                    "Desarrollador FullStack",
                    "Desarrollador Backend",
                    "Desarrollador Frontend",
                  ],
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
            aprender.
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
            <ModalCorreo setShowConfetti={setShowConfetti} />

            {showConfetti && (
              <Confetti
                numberOfPieces={1000}
                width={width - 3}
                height={height}
                initialVelocityY={20}
              />
            )}
          </nav>
        </div>
      </section>

      <div className="w-11/12 max-w-4xl mx-auto flex flex-col gap-12 items-center justify-center md:flex-row md:gap-8 md:justify-center">
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
