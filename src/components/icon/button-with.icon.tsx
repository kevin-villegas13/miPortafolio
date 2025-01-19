import { ButtonWithIconProps } from "@/interface/props/buton-whit-icon.props";

const ButtonWithIcon = ({
  href,
  icon,
  text,
  iconPosition = "left",
}: ButtonWithIconProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 px-4 py-2 text-base text-white transition bg-gray-800 border border-gray-600 hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
    >
      {iconPosition === "left" && icon}
      <span>{text}</span>
      {iconPosition === "right" && icon}
    </a>
  );
};

export default ButtonWithIcon;
