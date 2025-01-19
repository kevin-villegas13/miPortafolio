import { Image } from "@heroui/image";
import { UserRound } from "lucide-react";

const AboutPage = () => {
  return (
    <section className="pt-20 bg-[#090D18] md:pt-30 lg:pt-40" id="about">
      <div className="w-11/12 max-w-7xl mx-auto pb-20">
        <h2 className="mb-8 text-4xl font-bold text-white md:text-5xl lg:text-6xl uppercase flex items-center justify-start">
          <UserRound className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mr-4" />
          Sobre mí
        </h2>

        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="flex flex-col gap-6">
            <p className="text-white text-lg leading-8 md:text-xl lg:text-2xl">
              Soy Kevin Villegas, desarrollador web apasionado por crear
              soluciones tecnológicas que resuelven problemas reales. Con
              experiencia en front-end y back-end, mi enfoque está en construir
              aplicaciones escalables y eficientes, siempre manteniendo el
              usuario en el centro de cada decisión.
            </p>

            <p className="text-white text-lg hidden lg:block leading-8 md:text-xl lg:text-2xl">
              Me esfuerzo por aprender constantemente y aplicar las últimas
              tecnologías para ofrecer productos innovadores. Siempre busco
              aportar valor a través de un trabajo colaborativo y una
              comunicación efectiva.
            </p>
          </div>

          {/* Imagen */}
          <div className="relative w-full flex justify-center md:justify-center items-center">
            <Image
              src="../image/me.webp"
              alt="Sobre mí"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
