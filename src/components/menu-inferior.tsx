import { siteConfig } from "../config/site";
import { ThemeSwitch } from "./theme-switch";
import { Button } from "@heroui/react";
import { Globe } from "lucide-react";

const MenuInferior = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full py-3 bg-black bg-opacity-75 backdrop-blur-lg z-50 sm:hidden">
      <div className="flex justify-around items-center w-full max-w-7xl mx-auto">
        {/* Elementos de siteConfig */}
        {siteConfig.map((item) => (
          <a
            key={item.label}
            href={item.url}
            className="flex flex-col items-center text-white text-sm"
          >
            {item.icon}
            <span className="mt-1">{item.title}</span>
          </a>
        ))}
      </div>

      {/* Contenedor de botones flotantes (Modo Oscuro y Selección de Idioma) */}
      <div className="absolute bottom-20 right-4 z-50 sm:hidden flex flex-col items-center space-y-4">
        <div>
          <ThemeSwitch />
        </div>

        <div>
          <Button
            isIconOnly
            variant="faded"
            className="bg-black text-black dark:bg-black text-white"
          >
            <Globe />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default MenuInferior;
