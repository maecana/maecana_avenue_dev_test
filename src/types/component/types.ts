import { CSS } from "@theme";

import * as icons from "@primitives/Icon/icons/_icons.export";

import { SizeProps, SpacingProps } from "../style/interfaces";

export type IconNameOptions = keyof typeof icons;

export type CTAProps = {
  label: string;
  href?: string;
  onClick?: () => void;
};

export type CTAImagePositionOptions =
  | "left"
  | "right"
  | "bottom"
  | "top"
  | [string]
  | [string, string];

export type BoxProps = {
  children?: React.ReactNode;
  className?: string;
  css?: CSS;
} & SpacingProps &
  SizeProps;

export type SelectOption =
  | {
      label: { option: { option: string } };
      value: { option: { option: string } };
    }
  | {
      label: string;
      value: string;
    }
  | string
  | any;

export type SelectOptions = SelectOption[];
