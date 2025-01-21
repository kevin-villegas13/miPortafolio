import { useState } from "react";
import { Tabs, Tab } from "@heroui/tabs";
import { CodeIcon } from "lucide-react";
import Typewriter from "typewriter-effect";
import { Pagination } from "@heroui/pagination";
import { projects } from "@/config/proyect";
import { Projects } from "@/interface/proyect-tabs";
import { Project } from "@/interface/proyect";
import Card from "@/components/card";

// Configuración de paginación
const ITEMS_PER_PAGE = 3;

const ProyectsPage = () => {
  const [currentPage, setCurrentPage] = useState({
    web: 1,
    desktop: 1,
    mobile: 1,
    all: 1,
  });

  // Función para combinar todos los proyectos en un solo arreglo
  const combineAllProjects = () => [
    ...projects.web,
    ...projects.desktop,
    ...projects.mobile,
  ];

  // Función para obtener proyectos de la categoría actual según la paginación
  const paginate = (projectsArray: Project[], category: keyof Projects) => {
    const startIndex = (currentPage[category] - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return projectsArray.slice(startIndex, endIndex);
  };

  // Manejar el cambio de página
  const handlePageChange = (page: number, category: keyof Projects) => {
    setCurrentPage((prevState) => ({
      ...prevState,
      [category]: page,
    }));
  };

  // Función para renderizar proyectos o mensaje de "próximamente"
  const renderProjects = (category: keyof Projects) => {
    const projectsToDisplay =
      category === "all" ? combineAllProjects() : projects[category];
    return projectsToDisplay?.length ? (
      paginate(projectsToDisplay, category).map((project, index) => (
        <Card
          key={index}
          title={project.title}
          image={project.image}
          urlPage={project.urlPage}
          iconos={project.iconos}
          label={project.label}
        />
      ))
    ) : (
      <div className="col-span-full text-center">
        <p>Próximamente</p>
      </div>
    );
  };

  // Función para calcular el total de páginas para la paginación
  const calculateTotalPages = (category: keyof Projects) => {
    const projectsToDisplay =
      category === "all" ? combineAllProjects() : projects[category];
    return Math.ceil((projectsToDisplay?.length || 0) / ITEMS_PER_PAGE);
  };

  return (
    <section
      className="w-11/12 max-w-7xl mx-auto pt-20 mb-20 md:pt-30 lg:pt-40 lg:mb-40"
      id="proyectos"
    >
      {/* Título de la sección */}
      <div className="flex items-center justify-center mb-4">
        <CodeIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-black dark:text-white mr-2" />
        <h2 className="text-4xl font-bold text-center text-black/80 md:text-5xl lg:text-6xl uppercase dark:text-white">
          <Typewriter
            options={{
              strings: [
                "Proyectos de mi Portafolio",
                "Descubre mis proyectos.",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 100,
            }}
          />
        </h2>
      </div>

      {/* Tabs de categorías de proyectos */}
      <Tabs
        aria-label="Project Categories"
        className="flex justify-center mb-8"
        items={[
          { id: "web", label: "Web" },
          { id: "desktop", label: "Desktop" },
          { id: "mobile", label: "Mobile" },
          { id: "all", label: "All" },
        ]}
      >
        {(item) => (
          <Tab key={item.id} title={item.label}>
            {/* Contenido de los proyectos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
              {renderProjects(item.id as keyof Projects)}
            </div>

            {/* Paginación */}
            <div className="flex justify-center mt-4">
              <Pagination
                showControls
                initialPage={1}
                total={calculateTotalPages(item.id as keyof Projects)}
                onChange={(page) =>
                  handlePageChange(page, item.id as keyof Projects)
                }
              />
            </div>
          </Tab>
        )}
      </Tabs>
    </section>
  );
};

export default ProyectsPage;
