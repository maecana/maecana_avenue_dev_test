import { CSS, styled } from "@theme";
import { SizeProps, SpacingProps } from "@types";

const StyledLine = styled("hr", {
  opacity: "1",
  border: "none",
});

interface IProps extends SpacingProps, SizeProps {
  color?: string;
  css?: CSS;
}

const Line = ({
  color = "$line",
  height = "1px",
  css,
  ...responsiveProps
}: IProps) => {
  return (
    <StyledLine
      css={{
        background: color,
        rp: {
          height,
          ...responsiveProps,
        },
        ...css,
      }}
    />
  );
};

export default Line;
