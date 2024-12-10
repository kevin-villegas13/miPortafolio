import { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  VisuallyHidden,
  useSwitch,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
  Select,
  SelectItem,
  Avatar,
} from "@nextui-org/react";
import SunIcon from "../icons/SunIcon";
import MoonIcon from "../icons/MonIcon";

const navItems = [
  { title: "Experiencia", label: "experiencia", url: "/#experiencia" },
  { title: "Proyectos", label: "proyectos", url: "/#proyectos" },
  { title: "Sobre mí", label: "sobre-mi", url: "/#sobre-mi" },
  {
    title: "Contacto",
    label: "contacto",
    url: "mailto:kevinvilleperez@gmail.com",
  },
];

const languages = [
  { value: "es", label: "Español", flag: "https://flagcdn.com/es.svg" },
  { value: "en", label: "English", flag: "https://flagcdn.com/gb.svg" },
];

// Componente para el switch de tema (modo claro/oscuro)
const ThemeSwitch = ({ ...props }) => {
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props);

  return (
    <>
      <div className="flex flex-col gap-2">
        <Component {...getBaseProps()}>
          <VisuallyHidden>
            <input {...getInputProps()} />
          </VisuallyHidden>
          <div
            {...getWrapperProps()}
            className={slots.wrapper({
              class:
                "w-8 h-8 flex items-center justify-center rounded-lg bg-default-100 hover:bg-default-200",
            })}
          >
            {isSelected ? <MoonIcon /> : <SunIcon />}
          </div>
        </Component>
      </div>
    </>
  );
};

const Header = () => {
  //const { t } = useTranslation();
  const [activePage] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("es");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Recuperar la preferencia de modo oscuro desde el almacenamiento local
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode) {
      setDarkMode(storedDarkMode === "true");
    }
  }, []);

  // Guardar la preferencia de modo oscuro en el almacenamiento local y aplicar clase en el documento
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Función para cambiar el idioma y cerrar el menú en dispositivos móviles
  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const language = event.target.value;
    setSelectedLanguage(language);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        {/* Menú de navegación móvil */}
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          />
        </NavbarContent>

        {/* Marca del logo en la versión móvil */}
        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <p className="font-bold text-inherit">Mi Web</p>
          </NavbarBrand>
        </NavbarContent>

        {/* Elementos de navegación para pantallas grandes */}
        <NavbarContent className="hidden sm:flex gap-6" justify="center">
          {navItems.map((item) => (
            <NavbarItem key={item.label} isActive={activePage === item.url}>
              <Link
                href={item.url}
                aria-current={activePage === item.url ? "page" : undefined}
                className={`${
                  darkMode
                    ? "text-white hover:text-blue-300"
                    : "text-black hover:text-blue-400"
                } transition-colors duration-200`}
              >
                {item.title}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* Controles de idioma y tema */}
        <NavbarContent justify="end" className="flex items-center gap-4">
          {/* Selector de idioma */}
          <NavbarItem>
            <Select
              className="min-w-[150px] max-w-[200px]  dark:text-white"
              placeholder="Seleccione un idioma"
              value={selectedLanguage}
              onChange={handleLanguageChange}
              aria-label="Selector de idioma"
            >
              {languages.map((language) => (
                <SelectItem
                  key={language.value}
                  value={language.value}
                  startContent={
                    <Avatar
                      alt={language.label}
                      className="w-4 h-4 flex-shrink-0"
                      src={language.flag}
                    />
                  }
                  className={`${
                    selectedLanguage === language.value
                      ? "bg-blue-100 dark:bg-blue-600 text-black dark:text-white"
                      : "hover:bg-gray-100 dark:hover:bg-gray-600"
                  } transition duration-200 text-sm`}
                >
                  {language.label}
                </SelectItem>
              ))}
            </Select>
          </NavbarItem>

          {/* Switch de tema */}
          <NavbarItem>
            <ThemeSwitch
              isSelected={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
            />
          </NavbarItem>
        </NavbarContent>

        {/* Menú de navegación desplegable para pantallas pequeñas */}
        <NavbarMenu>
          {navItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === navItems.length - 1 ? "foreground" : "foreground"
                }
                href={item.url}
                size="lg"
              >
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default Header;
