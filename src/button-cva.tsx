import { cva, VariantProps } from "class-variance-authority";
import { button_styles } from "./components/button_styles";
import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";


interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof button_styles> {
  children: React.ReactNode;
  loading?: boolean;
}

export const Button = ({
  children,
  variant,
  modifier,
  size,
  fullWidth,
  disabled,
  loading,
}: ButtonProps) => {
  return (
    <button
      className={button_styles({ variant, modifier, size, fullWidth, disabled })}
    >
      <span
        className={classNames(
          "leading-[1.25rem]",
          loading && "text-transparent"
        )}
      >
        {children}
      </span>
      {loading && (
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block w-4 h-4">
          <svg
            className="animate-spin"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-current"
              d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"
            ></path>
          </svg>
          <span className="sr-only">Loading</span>
        </span>
      )}
    </button>
  );
};
