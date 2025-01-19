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

        <nav className="flex flex-wrap items-center text-sm font-medium">
          <ul className="flex flex-wrap items-center space-x-4">
            <li>
              <a
                href="/#sobre-mi"
                className="hover:underline text-black dark:text-white"
              >
                Sobre mí
              </a>
            </li>
            <li>
              <a
                href="mailto:kevinvilleperez@gmail.com"
                className="hover:underline text-black dark:text-white"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
