import { CardProps } from "@/interface/props/card.props";
import {
  Card as HeroCard,
  CardHeader,
  CardBody,
  CardFooter,
} from "@heroui/card";
import { Image } from "@heroui/image";
import Icono from "./icon/icono";
import ButtonWithIcon from "./icon/button-with.icon";
import { ExternalLinkIcon, PenTool } from "lucide-react";

const CustomCard = ({ title, image, urlPage, iconos, label }: CardProps) => {
  return (
    <HeroCard className="p-4 pb-6 flex flex-col justify-between rounded-lg shadow-md max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full">
      <CardHeader className="pb-0 pt-2 px-4 flex-col">
        <Image
          isBlurred
          src={image}
          alt="Imagen del Proyecto"
          className="w-full h-auto rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
        />
      </CardHeader>

      <CardBody>
        <h3 className="my-4 text-xl font-bold text-center text-white">
          {title}
        </h3>

        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {iconos.map((icono, index) => (
            <Icono label={label[index]} icono={icono} key={icono} />
          ))}
        </div>
      </CardBody>

      <CardFooter className="flex flex-col gap-4 justify-between md:flex-row">
        {/* Botones de la tarjeta: Ajuste en el tamaño y disposición de los botones */}
        <ButtonWithIcon
          href={urlPage}
          text="Proyecto"
          icon={<ExternalLinkIcon />}
          iconPosition="left"
        />

        <ButtonWithIcon
          href="#descripcion"
          text="Descripción"
          icon={<PenTool />}
          iconPosition="left"
        />
      </CardFooter>
    </HeroCard>
  );
};

export default CustomCard;
