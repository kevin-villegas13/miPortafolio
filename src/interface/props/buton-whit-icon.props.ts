import { ReactNode } from "react";

export interface ButtonWithIconProps {
  href: string;
  icon?: ReactNode;
  text: string;
  iconPosition?: "left" | "right";
}
