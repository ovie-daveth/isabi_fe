import React, { ReactNode } from "react";
import classNames from "classnames";
import { Button } from "../ui/button";
import { MdArrowOutward } from "react-icons/md";
import { cn } from "@/lib/utils";

type ButtonProps = {
  title: string;  // Use children to pass the content inside the button
  classnames?: string;
  variant: "primary" | "secondary";
  isIcon?: boolean,
  fn?: () => void;
};

const CustomButton = ({ isIcon, title, classnames = "", variant, fn }: ButtonProps) => {

  // Conditional styles based on variant
  const buttonClassNames = classNames(
    {
      "bg-primary hover:bg-primary/80": variant === "primary",
      "bg-black hover:bg-black/80": variant === "secondary",
    },
    classnames // Add any extra class names passed via props
  );

  return  <Button onClick={fn} type={fn ? "button" : "submit"} className={cn(`w-full flex flex-row-reverse items-center sm:gap-5 sm:h-16 h-12 rounded-full ${!isIcon ? "justify-between" : "justify-center"} ${buttonClassNames}`)}>
    {
      !isIcon &&  <span className={`bg-white sm:w-[3.8rem] sm:h-[3.8rem] h-[3rem] w-[3rem] rounded-full flex items-center justify-center -mr-3`}>
      <MdArrowOutward  className={`text-primary`} />
      </span>
    }
  <span className={`sm:ml-2 font-bold lg:text-lg`}>{title}</span>
</Button>
};

export default CustomButton;
