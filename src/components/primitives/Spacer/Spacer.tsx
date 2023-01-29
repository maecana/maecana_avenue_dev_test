import { styled } from "@theme";
import { ResponsiveCSSUnit } from "@types";

const StyledDiv = styled("div", {
  display: "block",
  variants: {
    devMode: {
      true: {
        border: "1px dashed teal",
      },
    },
  },
});

interface IProps {
  height?: ResponsiveCSSUnit;
  width?: ResponsiveCSSUnit;
  devMode?: boolean;
}

const Spacer = ({ height = 0, width = "100%", devMode = false }: IProps) => {
  return (
    <StyledDiv
      css={{
        rp: {
          height,
          width,
        },
      }}
      devMode={devMode}
    />
  );
};

export default Spacer;
