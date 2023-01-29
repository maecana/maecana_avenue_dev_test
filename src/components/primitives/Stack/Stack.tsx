import { CSS, styled } from "@theme";
import { ResponsiveCSSUnit, SpacingProps } from "@types";

import { getLastDefinedItem } from "@theme/helpers";

const StyledDiv = styled("div", {
  display: "flex",
});

interface IProps extends SpacingProps {
  children?: React.ReactNode;
  direction?: ResponsiveCSSUnit;
  gap?: ResponsiveCSSUnit;
  css?: CSS;
  className?: string;
  passRef?: React.RefObject<any>;
  asProp?: any;
}

const Stack = ({
  direction = "column",
  gap,
  children,
  css,
  className,
  passRef,
  asProp,
  ...responsiveProps
}: IProps) => {
  const formatGapValue = (val: any): string =>
    Number.isInteger(val) ? `${val}px` : val;

  const passGap = (
    directionValue: ResponsiveCSSUnit,
    gapValue: ResponsiveCSSUnit | undefined
  ) => {
    const gapToPx = !gapValue ? "0px" : formatGapValue(gapValue);

    switch (directionValue) {
      case "column":
        return { margin: `${gapToPx} 0 0 0` };
      case "column-reverse":
        return { margin: `0 0 ${gapToPx} 0` };
      case "row":
        return { margin: `0 0 0 ${gapToPx}` };
      case "row-reverse":
        return { margin: `0 ${gapToPx} 0 0` };
      default:
        return {};
    }
  };

  const gapToDir = (direction: ResponsiveCSSUnit, gap: ResponsiveCSSUnit) => {
    if (Array.isArray(direction)) {
      return direction.map((direction, i) => {
        const closestGap = Array.isArray(gap)
          ? getLastDefinedItem(gap, i)
          : gap;
        return passGap(direction, closestGap);
      });
    }

    if (Array.isArray(gap)) {
      return gap.map((val, i) => {
        const closestGap = val || getLastDefinedItem(gap, i);
        return passGap(direction, closestGap);
      });
    }

    return [passGap(direction, gap)];
  };

  return (
    <StyledDiv
      className={className}
      ref={passRef}
      {...(asProp ? { as: asProp } : {})}
      css={{
        rp: {
          flexDirection: direction,
          "> * + *": gapToDir(direction, gap),
          ...responsiveProps,
        },
        ...css,
      }}
    >
      {children}
    </StyledDiv>
  );
};

export default Stack;
