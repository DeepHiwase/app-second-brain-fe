import type { ReactElement } from "react";
import { cn } from "../../utils/cn";

export interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick: () => void;
  fullWidth?: boolean;
  loading?: boolean;
}

const ButtonVariants = {
  primary: "bg-primary text-white",
  secondary: "bg-secondary text-white",
};

const sizeStyles = {
  sm: "py-1 px-2",
  md: "py-2 px-4",
  lg: "py-4 px-6",
};

const Button = ({
  variant,
  size,
  text,
  startIcon,
  endIcon,
  onClick,
  loading,
  fullWidth,
}: ButtonProps) => {
  return (
    <button
      className={cn(
        ButtonVariants[variant],
        sizeStyles[size],
        "rounded-2xl flex pr-2.5 cursor-pointer",
        `${fullWidth ? "w-full flex justify-center" : null}`
      )}
      onClick={onClick}
      disabled={loading ? true : false}
    >
      {startIcon} {text} {endIcon}
    </button>
  );
};

export default Button;
