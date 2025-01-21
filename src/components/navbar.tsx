import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";
import SelectLanguage from "./select-language";
import { siteConfig } from "../config/site";
import MenuInferior from "./menu-inferior";

const Navigation = () => {
  return (
    <>
      {/* Navbar principal para pantallas grandes */}
      <Navbar>
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand className="gap-3 max-w-fit">
            <a
              className="flex justify-start items-center gap-1"
              color="foreground"
              href="#inicio"
            >
              <Logo />
              <p className="font-bold text-inherit">ACME</p>
            </a>
          </NavbarBrand>

          <NavbarContent className="hidden sm:flex gap-6" justify="center">
            {siteConfig.map((item) => (
              <NavbarItem key={item.url}>
                <a
                  href={item.url}
                  className="transition-colors duration-200 dark:text-white dark:hover:text-blue-300 text-black hover:text-blue-400"
                >
                  {item.title}
                </a>
              </NavbarItem>
            ))}
          </NavbarContent>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <NavbarItem className="hidden sm:flex gap-2">
            <SelectLanguage />
          </NavbarItem>
          <NavbarItem className="hidden md:flex">
            <ThemeSwitch />
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* Navegación inferior fija para dispositivos móviles */}
      <MenuInferior />
    </>
  );
};

export default Navigation;
