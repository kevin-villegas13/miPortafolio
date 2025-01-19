import HomeLayout from "@/layouts/default";
import HeroPage from "./hero";
import ExperienciePage from "@/pages/experience";
import ProyectsPage from "@/pages/proyect";
import AboutPage from "./about";

export default function HomePage() {
  return (
    <HomeLayout>
      <HeroPage />
      <ExperienciePage />
      <ProyectsPage />
      <AboutPage />
    </HomeLayout>
  );
}
