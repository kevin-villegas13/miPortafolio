import { Avatar } from "@heroui/avatar";
import { Select, SelectItem } from "@heroui/select";
import { ChangeEvent, useState } from "react";

const languages = [
  { value: "es", label: "Español", flag: "https://flagcdn.com/es.svg" },
  { value: "en", label: "English", flag: "https://flagcdn.com/gb.svg" },
];

const SelectLanguage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("es");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const language = event.target.value;
    setSelectedLanguage(language);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
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
  );
};

export default SelectLanguage;
