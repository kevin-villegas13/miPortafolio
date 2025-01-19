import { redesSociales } from "@/config/red-social";
import ModalCorreo from "./modal-correo";
import SocialPill from "./social-pill";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="dark:bg-black text-black dark:text-white opacity-80 m-4 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-10 flex flex-col md:flex-row justify-between items-center py-4">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <span className="text-sm">
            © {currentYear}
            <a
              href="https://github.com/kevin-villegas13"
              className="hover:underline text-black dark:text-white"
            >
              Kevin Villegas
            </a>
            . Derechos de autor reservados.
          </span>
        </div>

        <nav className="flex flex-wrap justify-center gap-4 mt-8">
          {redesSociales.map((red, index) => (
            <SocialPill
              key={index}
              href={red.href}
              label={red.label}
              icono={red.icono}
            />
          ))}
          <ModalCorreo />
        </nav>
      </footer>
    </>
  );
};

export default Footer;
