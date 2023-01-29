import { ResponsiveCSSUnit } from "./types";

export interface MarginProps {
  margin?: ResponsiveCSSUnit;
  marginTop?: ResponsiveCSSUnit;
  marginRight?: ResponsiveCSSUnit;
  marginBottom?: ResponsiveCSSUnit;
  marginLeft?: ResponsiveCSSUnit;
  m?: ResponsiveCSSUnit;
  mt?: ResponsiveCSSUnit;
  mr?: ResponsiveCSSUnit;
  mb?: ResponsiveCSSUnit;
  ml?: ResponsiveCSSUnit;
  marginY?: ResponsiveCSSUnit;
  marginX?: ResponsiveCSSUnit;
}

export interface PaddingProps {
  padding?: ResponsiveCSSUnit;
  paddingTop?: ResponsiveCSSUnit;
  paddingRight?: ResponsiveCSSUnit;
  paddingBottom?: ResponsiveCSSUnit;
  paddingLeft?: ResponsiveCSSUnit;
  p?: ResponsiveCSSUnit;
  pt?: ResponsiveCSSUnit;
  pr?: ResponsiveCSSUnit;
  pb?: ResponsiveCSSUnit;
  pl?: ResponsiveCSSUnit;
  paddingY?: ResponsiveCSSUnit;
  paddingX?: ResponsiveCSSUnit;
}

export interface SpacingProps extends MarginProps, PaddingProps {}

export interface SizeProps {
  size?: ResponsiveCSSUnit;
  width?: ResponsiveCSSUnit;
  w?: ResponsiveCSSUnit;
  height?: ResponsiveCSSUnit;
  h?: ResponsiveCSSUnit;
  maxWidth?: ResponsiveCSSUnit;
  mw?: ResponsiveCSSUnit;
  maxHeight?: ResponsiveCSSUnit;
}

export interface FlexProps {
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
  flexWrap?: string;
  flexShrink?: string;
  flexGrow?: string;
}

export interface GridProps {
  gap?: ResponsiveCSSUnit;
  gridGap?: ResponsiveCSSUnit;
  gridRowGap?: ResponsiveCSSUnit;
  gridColumnGap?: ResponsiveCSSUnit;
  gridArea?: string;
  gridAutoColumns?: ResponsiveCSSUnit;
  gridAutoFlow?: ResponsiveCSSUnit;
  gridAutoRows?: ResponsiveCSSUnit;
  gridColumnEnd?: ResponsiveCSSUnit;
  gridColumnStart?: ResponsiveCSSUnit;
  gridColumn?: string;
  gridRow?: string;
  gridRowStart?: ResponsiveCSSUnit;
  gridRowEnd?: ResponsiveCSSUnit;
  gridTemplateAreas?: string;
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gridTemplate?: string;
  grid?: string;
}

export interface PositionProps {
  position?: string;
  top?: ResponsiveCSSUnit;
  right?: ResponsiveCSSUnit;
  bottom?: ResponsiveCSSUnit;
  left?: ResponsiveCSSUnit;
}

export interface TextProps {
  color?: ResponsiveCSSUnit;
  fontSize?: ResponsiveCSSUnit;
  fz?: ResponsiveCSSUnit;
  fs?: ResponsiveCSSUnit;
  fontWeight?: ResponsiveCSSUnit;
  fw?: ResponsiveCSSUnit;
}
