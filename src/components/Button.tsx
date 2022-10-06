import { HTMLAttributes, ReactNode } from "react";
import classes from "../classes/Button.classes";
import classNames from "classnames";

export interface IButtonClasses {
  base: string;
  variant: {
    primary: string;
    secondary: string;
  };
  size: {
    sm: string;
    md: string;
  };
}

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: keyof IButtonClasses["variant"];
  size?: keyof IButtonClasses["size"];
  disabled?: boolean;
  name?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      type="submit"
      onClick={props.onClick}
      name="button"
      className={classNames(
        classes.base,
        classes.variant[props.variant === "primary" ? "primary" : "secondary"],
        classes.size[props.size === "sm" ? "sm" : "md"]
      )}
    >
      {props.children}
    </button>
  );
};
