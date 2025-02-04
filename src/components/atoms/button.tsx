import React, { ReactNode } from "react";
import classNames from "classnames";

type ButtonProps = {
  children: ReactNode;  // Use children to pass the content inside the button
  classnames?: string;
  variant: "primary" | "secondary" | "outline" | "ghost";
};

const Button = ({ children, classnames = "", variant }: ButtonProps) => {
  // Base styles
  const baseStyles = "px-4 py-2 rounded-md font-medium transition";

  // Conditional styles based on variant
  const buttonClassNames = classNames(
    baseStyles,
    {
      "bg-primary text-white hover:bg-primary/80": variant === "primary",
      "bg-gray-500 text-white hover:bg-gray-600": variant === "secondary",
      "border border-primary text-primary hover:bg-primary/10": variant === "outline",
      "text-primary hover:bg-primary/10": variant === "ghost",
    },
    classnames // Add any extra class names passed via props
  );

  return <button className={buttonClassNames}>{children}</button>;  // Render children here
};

export default Button;
