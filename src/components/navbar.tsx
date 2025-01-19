import { Link } from "@heroui/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";
import SelectLanguage from "./select-language";
import { siteConfig } from "@/config/site";

const Navigation = () => {
  return (
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

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <SelectLanguage />
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Menú de navegación desplegable para pantallas pequeñas */}
      <NavbarMenu>
        {siteConfig.map((item, index) => (
          <NavbarMenuItem key={item.url}>
            <a
              className="w-full"
              color={
                index === siteConfig.length - 1 ? "foreground" : "foreground"
              }
              href={item.url}
            >
              {item.title}
            </a>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Navigation;
