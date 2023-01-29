import { MainColumn } from "@primitives";
import { styled } from "@theme";

export const PageWrapper = styled(MainColumn, {
  paddingY: "24px",
  "@sm": {
    paddingY: "40px",
  },
  "@md": {
    paddingY: "80px",
  },
});

export const PostContainer = styled("div", {
  width: "100%",
  height: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "2rem 0px",
  inset: 0,
});

export const PostWrapper = styled("div", {
  width: "100%",
  boxSizing: 'border-box',
  display: 'grid',
  justifyItems: 'center',
  alignItems: 'start',
  gridAutoFlow: 'row',
  gap: '$4',

  "@sm": {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },

  "@md": {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },

  "@lg": {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
});
