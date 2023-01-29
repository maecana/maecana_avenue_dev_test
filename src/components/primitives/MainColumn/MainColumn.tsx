import { CSS, styled } from "@theme";
import { BoxProps, CSSUnit } from "@types";
import React from "react";

export interface IProps extends BoxProps {
  css?: CSS;
  maxWidth?: CSSUnit;
  children?: React.ReactNode;
  desktopOnly?: boolean;
}

const StyledDiv = styled("div", {
  marginRight: "auto !important",
  marginLeft: "auto !important",
  width: "calc(100% - 2*$initGutter)",
  "@sm": {
    width: "calc(100% - 2*$smGutter)",
  },

  variants: {
    desktopOnly: {
      true: {
        width: "100%",
        "@md": {
          width: "calc(100% - 2*$smGutter)",
        },
      },
      false: {},
    },
  },
});

const MainColumn = ({
  css,
  maxWidth,
  children,
  desktopOnly,
  className,
  ...rest
}: IProps) => {
  return (
    <StyledDiv
      className={className}
      css={{
        maxWidth: maxWidth || "$sizes$mainColumnWidth",
        ...css,
        rp: { ...rest },
      }}
      desktopOnly={desktopOnly}
    >
      {children}
    </StyledDiv>
  );
};

export default MainColumn;
