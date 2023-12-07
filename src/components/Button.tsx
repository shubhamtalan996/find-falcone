import React, { FC, ReactNode } from "react";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      type="button"
      className={`font-sans relative text-xs tracking-[2px] uppercase text-starwars cursor-pointer px-[1rem] py-[0.25rem] mx-[1rem] select-none touch-manipulation ${className}`}
      style={{
        border: "3px solid",
        boxShadow:
          "1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px",
      }}
      {...{ ...props }}
    >
      {children}
    </button>
  );
};

export default Button;
