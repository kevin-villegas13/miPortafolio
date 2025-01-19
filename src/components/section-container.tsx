import { SectionProps } from "@/interface/props/section.props";
import { FC } from "react";

const SectionContainer: FC<SectionProps> = ({ id, children }) => {
  return (
    <section id={id} data-section={id}>
      {children}
    </section>
  );
};

export default SectionContainer;
