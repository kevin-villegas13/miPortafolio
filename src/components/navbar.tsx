import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
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

const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <Logo />
            <p className="font-bold text-inherit">ACME</p>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-6" justify="center">
          {siteConfig.map((item) => (
            <NavbarItem key={item.url}>
              <Link
                href={item.url}
                className="transition-colors duration-200 dark:text-white dark:hover:text-blue-300 text-black hover:text-blue-400"
              >
                {item.title}{" "}
              </Link>
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
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              className="w-full"
              color={
                index === siteConfig.length - 1 ? "foreground" : "foreground"
              }
              href={item.url}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroUINavbar>
  );
};

export default Navbar;
