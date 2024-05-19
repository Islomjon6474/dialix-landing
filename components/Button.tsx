import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";
import cx from "classnames";

const button = tv({
  base: "py-2.5 px-5 flex justify-center h-full items-center w-full md:w-auto flex-shrink-0 font-medium font-sans relative z-[1] cursor-pointer overflow-hidden",
  variants: {
    disabled: {
      true: "opacity-100 cursor-default pointer-events-none border !bg-black border-opacity-100",
    },
    variant: {
      primary:
        "text-white bg-primary rounded-full border border-transparent hover:border-white transition-border ease-in-out duration-300",
      white:
        "text-primary bg-white border border-white hover:border-primary transition-border rounded-full ease-in-out duration-300",
      gradient: "text-white",
      outline:
        "text-white !bg-black group-hover:bg-gradient-to-tr group-hover:from-[#3F9CFB] -from-[10%] group-hover:to-[#B856F3] to-[139%] disabled:bg-dark",
      "outline-white":
        "text-white border border-white group-hover:bg-white group-hover:text-[#2AC3FC]",
      "outline-white-2": "text-[#2AC3FC] bg-white border border-white",
      text: "text-white border-none",
      transparent: "text-white bg-transparent border-none",
      plainPrimary: "text-white bg-primary rounded-full",
      disabled: "text-white !bg-black",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type variants = VariantProps<typeof button>;

type IProps = {
  icon?: ReactNode;
  loading?: boolean;
  containerClassName?: string;
  buttonType?: "dark" | "light";
} & (React.ComponentProps<"button"> & variants);

/**
 * Renders a button component with customizable properties.
 *
 * @param {IProps} ButtonProps - The properties of the button component.
 * @param {React.ReactNode} ButtonProps.children - The content of the button.
 * @param {Function} ButtonProps.onClick - The function to be called when the button is clicked.
 * @param {string} ButtonProps.className - The additional class name for the button.
 * @param {string} ButtonProps.type - The type of the button.
 * @param {boolean} ButtonProps.disabled - Indicates if the button is disabled.
 * @param {boolean} ButtonProps.loading - Indicates if the button is in a loading state.
 * @param {React.ReactNode} ButtonProps.icon - The icon to be displayed in the button.
 * @param {string} ButtonProps.variant - The variant style of the button.
 * @return {JSX.Element} - The rendered button component.
 */
const Button: React.ForwardRefExoticComponent<any> = React.forwardRef<
  HTMLDivElement,
  IProps
>(
  (
    {
      children,
      onClick,
      className,
      type,
      disabled,
      loading,
      icon,
      variant,
      buttonType = "dark",
      containerClassName,
      ...props
    }: IProps,
    ref,
  ) => {
    const disabledOrLoading = disabled || loading;
    const buttonClassName = twMerge(
      button({ variant, disabled: disabledOrLoading }),
      className,
    );

    return buttonType === "dark" ? (
      <div
        className={twMerge(
          "group p-[1px] rounded-full !overflow-hidden ",
          containerClassName,
        )}
        style={
          containerClassName?.includes("bg-transparent")
            ? { background: "transparent", border: "1px solid gray" }
            : {}
        }
        {...(props as unknown as React.HTMLAttributes<HTMLDivElement>)}
        ref={ref}
      >
        <button
          className={buttonClassName}
          onClick={onClick}
          type={type}
          disabled={disabledOrLoading}
        >
          {loading ? <div className="loader mr-2" /> : icon}
          {children}
        </button>
      </div>
    ) : (
      <button
        className={cx(
          twMerge(
            "py-[15px] px-[30px] text-white inline-block font-medium text-base rounded-full relative z-[1] cursor-pointer overflow-hidden bg-main disabled:opacity-70 disabled:cursor-default",
            className,
          ),
          {
            "opacity-80 !cursor-default": disabledOrLoading,
          },
        )}
        onClick={onClick}
        type={type}
        disabled={disabled}
        style={
          containerClassName?.includes("bg-transparent")
            ? { color: "white" }
            : {}
        }
      >
        {loading ? <div className="loader mr-2" /> : icon}
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
