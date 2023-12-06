import React, { FC, ReactNode } from "react";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      type="button"
      style={{
        fontFamily: `"Open Sans", sans-serif`,
        fontSize: "12px",
        letterSpacing: "2px",
        textDecoration: "none",
        textTransform: "uppercase",
        color: "#feda4a",
        cursor: "pointer",
        border: "3px solid",
        padding: "0.25rem 1rem",
        margin: "0 1rem",
        boxShadow:
          "1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px",
        position: "relative",
        userSelect: "none",
        touchAction: "manipulation",
      }}
      {...{ ...props }}
    >
      {children}
    </button>
  );
};

export default Button;
