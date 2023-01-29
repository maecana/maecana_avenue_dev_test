import { CSS, styled } from "@theme";
import { SizeProps, SpacingProps } from "@types";
import React from "react";

export const Wrapper = styled("div");

export interface BoxProps extends SpacingProps, SizeProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  css?: CSS;
  as?: string;
}
const Box = ({ children, className, as, css, ...styleProps }: BoxProps) => {
  return (
    <Wrapper className={className} css={{ rp: styleProps, ...css }}>
      {children}
    </Wrapper>
  );
};

export default Box;
