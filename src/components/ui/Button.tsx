import type { ReactElement } from "react";
import { cn } from "../../utils/cn";

export interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick: () => void;
}

const ButtonVariants = {
  primary: "bg-primary text-white",
  secondary: "bg-secondary text-white",
};

const sizeStyles = {
  "sm": "py-1 px-2",
  "md": "py-2 px-4",
  "lg": "py-4 px-6",
}

const Button = ({
  variant,
  size,
  text,
  startIcon,
  endIcon,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={cn(ButtonVariants[variant], sizeStyles[size], "rounded-2xl flex pr-2.5 cursor-pointer")}
      onClick={onClick}
    >
      {startIcon} {text} {endIcon}
    </button>
  );
};

export default Button;
