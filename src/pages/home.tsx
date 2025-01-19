import HomeLayout from "@/layouts/default";
import HeroPage from "./hero";
import ExperienciePage from "@/pages/experience";
import ProyectsPage from "@/pages/proyect";
import AboutPage from "./about";
import SectionContainer from "@/components/section-container";

const HomePage = () => {
  return (
    <HomeLayout>
      <SectionContainer id="inicio">
        <HeroPage />
      </SectionContainer>

      <SectionContainer id="experiencia">
        <ExperienciePage />
      </SectionContainer>

      <SectionContainer id="proyectos">
        <ProyectsPage />
      </SectionContainer>

      <SectionContainer id="sobre-mi">
        <AboutPage />
      </SectionContainer>
    </HomeLayout>
  );
};

export default HomePage;
