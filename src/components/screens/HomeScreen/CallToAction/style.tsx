import { Image } from "@primitives";
import { styled } from "@theme";

export const Wrapper = styled("div", {
  background: "$gotham",
  position: "relative",
  display: "grid",
  cols: "1fr",

  "@md": {
    cols: "1fr 1fr",
  },
});

export const CTAImage = styled(Image, {
  overflow: "hidden",
  aspectRatio: 1.44,
  img: { transition: "750ms" },

  "@sm": {
    aspectRatio: 2.27,
  },

  [`${Wrapper}:hover &`]: {
    img: {
      transform: "scale(1.1 )",
    },
  },
});

export const TextWrapper = styled("div", {
  padding: "32px 24px 40px 24px",
  display: "flex",
  flexDirection: "column",

  "@md": {
    padding: "96px",
  },
});
