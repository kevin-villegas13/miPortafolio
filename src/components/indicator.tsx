import CountUp from "react-countup";

import { IndicadorProps } from "@/interface/props/indicador.props";

const Indicator = ({ end, label, subLabel }: IndicadorProps) => {
  return (
    <div className="flex items-center gap-4 animate-fade-in text-black dark:text-white">
      <p className="text-7xl font-bold lg:text-8xl">
        <CountUp end={end} duration={2.5} enableScrollSpy />
      </p>
      <div>
        <p className="text-black dark:text-white text-lg font-medium">
          {label}
        </p>
        <p className="text-gray-500 dark:text-gray-300 text-sm">{subLabel}</p>
      </div>
    </div>
  );
};

export default Indicator;
