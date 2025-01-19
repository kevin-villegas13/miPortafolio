import { IconoProps } from "@/interface/props/icono.props";
import { Tooltip } from "@heroui/tooltip";

const Icono = ({ icono, label }: IconoProps) => {
  return (
    <Tooltip content={label} placement="top">
      <img
        src={`icons/icon-${icono}.svg`}
        alt={icono}
        className="w-14 h-14 block p-2 rounded-full border-primary-color border-2 hover:scale-125 transition-all duration-300"
      />
    </Tooltip>
  );
};

export default Icono;
