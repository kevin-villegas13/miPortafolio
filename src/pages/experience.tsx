import ExperiencieItems from "../components/experience-items";

const Experiencias = [
  {
    date: "02-Feb-2024 - 02-Agos-2024",
    title: " Desarrollador .NET Jr",
    company: "Colombiana de Accesorios",
    description:
      "Desarrollo y soporte de aplicaciones en C#/.NET, utilizando una arquitectura de cuatro capas y diseñando interfaces en Windows Forms. Manejo en la administración de bases de datos MySQL y control de versiones con Git. Habilidades en la creación de documentación técnica y análisis de requerimientos para mejorar los procesos.",
  },
];

const ExperienciePage = () => {
  return (
    <section className="w-11/12 max-w-7xl mx-auto pt-40 md:pt-50">
      <h2 className="mb-4 text-4xl font-bold text-center text-black/80 md:text-5xl  lg:text-6xl uppercase dark:text-white">
        EXPERIENCIA LABORAL
      </h2>
      <ol className="relative mt-8">
        {Experiencias.map((experiencia) => (
          <li key={experiencia.title}>
            <ExperiencieItems {...experiencia} />
          </li>
        ))}
      </ol>
    </section>
  );
};

export default ExperienciePage;
