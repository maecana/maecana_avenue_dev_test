import { AvenueLink } from "@primitives";
import type * as Stitches from "@stitches/react";
import { CSS, styled } from "@theme";
import React from "react";

import { typography } from "@theme/typography";

const { body } = typography;

const StyledButton = styled("button", {
  $$btnColorPrimary: "$colors$bright",
  $$btnColorSecondary: "$colors$ocean",
  $$btnColorTertiary: "$colors$myst",
  $$btnColorQuartenary: "$colors$purple",
  $$textLinkHoverColor: "$colors$surfGreen",

  // defaultStyling
  all: "unset",
  boxSizing: "border-box",
  alignItems: "center",
  userSelect: "none",
  cursor: "pointer",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  display: "inline-flex",
  flexShrink: 0,
  justifyContent: "center",
  transitionDuration: "160ms",

  "&:disabled": {
    cursor: "not-allowed",
    pointerEvents: "none",
  },

  "&:focus-visible": {
    boxShadow: "$$btnColorSecondary 0px 1px 4px 3px",
  },

  // textStyling
  ...body,
  fontWeight: "bold",

  variants: {
    variant: {
      primary: {
        color: "white",
        backgroundColor: "$$btnColorPrimary",
        "&:hover": {
          backgroundColor: "$$btnColorSecondary",
        },

        "&:active": {
          backgroundColor: "$$btnColorTertiary",
        },

        "&:disabled": {
          opacity: 0.3,
        },
      },

      secondary: {
        color: "$$btnColorQuartenary",
        boxShadow: "inset 0px 0px 0px 2px $$btnColorPrimary",
        "&:hover": {
          color: "white",
          boxShadow: "none",
          backgroundColor: "$$btnColorPrimary",
        },

        "&:active": {
          color: "white",
          backgroundColor: "$$btnColorQuartenary",
          boxShadow: "inset 0px 0px 0px 2px $$btnColorQuartenary",
        },

        "&:disabled": {
          color: "white",
          boxShadow: "inset 0px 0px 0px 2px white",
        },
      },

      tertiary: {
        color: "white",
        boxShadow: "inset 0px 0px 0px 2px white",
        "&:hover": {
          boxShadow: "none",
          backgroundColor: "$$btnColorSecondary",
        },

        "&:active": {
          backgroundColor: "$$btnColorTertiary",
          boxShadow: "inset 0px 0px 0px 2px $$btnColorTertiary",
        },

        "&:disabled": {
          color: "white",
          boxShadow: "inset 0px 0px 0px 2px white",
          opacity: 0.3,
        },
      },

      textLink: {
        padding: "0 !important",
        color: "$$btnColorTertiary",
        transition: "110ms",
        textDecorationLine: "underline",

        "&:hover": {
          color: "$$textLinkHoverColor",
          textDecorationLine: "unset",
        },

        "&:active": {
          color: "$$btnColorSecondary",
        },

        "&:disabled": {
          color: "white",
        },
      },
    },
    size: {
      small: {
        paddingY: "$1",
        paddingX: "$2",
        fontSize: "16px",
      },
      standard: {
        paddingY: "$1",
        paddingX: "$2",
        "@md": {
          paddingY: "18px",
          paddingX: "$3",
        },
      },
      big: {
        paddingY: "$1",
        paddingX: "$2",
        "@md": {
          paddingY: "$2",
          paddingX: "$3",
        },
      },
    },
    rounded: {
      true: {
        borderRadius: "60px",
      },
    },
    iconPosition: {
      left: {
        flexDirection: "row-reverse",
        justifyContent: "flex-end",
        [`& svg`]: {
          marginRight: "$1",
          "@md": { marginRight: "$2" },
        },
      },
      right: {
        flexDirection: "row",
        [`& svg`]: {
          marginLeft: "$1",
          "@md": { marginLeft: "$2" },
        },
      },
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "standard",
    rounded: true,
    iconPosition: "right",
  },
});

export type ButtonVariants = Stitches.VariantProps<typeof StyledButton>;

type IProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string | null;
  type?: string;
  ariaLabel?: string;
  css?: CSS;
  className?: string;
  [x: string]: any;
} & ButtonVariants;

const Button = React.forwardRef(
  (
    {
      children,
      onClick,
      href,
      type,
      icon,
      css,
      className,
      ariaLabel,
      ...rest
    }: IProps,
    ref: any
  ) => {
    const renderAsLink = !onClick && type !== "submit";
    if (!children) return null;
    return (
      <StyledButton
        ref={ref}
        as={renderAsLink ? AvenueLink : "button"}
        onClick={onClick}
        iconPosition={icon?.position}
        css={css}
        className={`${className} focus-visible`}
        {...rest}
        href={href || "#"}
        aria-label={ariaLabel}
      >
        {children}
      </StyledButton>
    );
  }
);

export default Button;
