// eslint-disable-next-line import/no-cycle
import { CSS } from "@theme";

export const fonts = {
  heading: `Raleway, Arial, sans-serif`,
  body: `Open Sans, Arial, sans-serif`,
};

// headings styles
const fontSmoothingStyles: CSS = {
  "-moz-osx-font-smoothing": "grayscale",
  "font-smoothing": "antialiase",
  "-webkit-font-smoothing": "antialiased",
};

const baseHeadingStyles: CSS = {
  fontFamily: fonts.heading,
  color: "$heading",
  lineHeight: 1.1,
  fontWeight: 300,

  "-moz-osx-font-smoothing": "auto",
  "font-smoothing": "auto",
  "-webkit-font-smoothing": "auto",
};

const h1: CSS = {
  ...baseHeadingStyles,
  fontSize: "38px",

  "@md": {
    fontSize: "60px",
  },
};

const h2: CSS = {
  ...baseHeadingStyles,
  fontSize: "34px",

  "@lg": {
    fontSize: "48px",
  },
};

const h3: CSS = {
  ...baseHeadingStyles,
  fontSize: "30px",
  lineHeight: 1.15,
  "@lg": {
    fontSize: "42px",
  },
};

const h4: CSS = {
  ...baseHeadingStyles,
  fontSize: "26px",
  lineHeight: 1.15,

  "@lg": {
    fontSize: "34px",
    lineHeight: 1.2,
  },
};

const h5: CSS = {
  ...baseHeadingStyles,
  fontSize: "22px",
  lineHeight: 1.3,

  "@lg": {
    fontSize: "28px",
    lineHeight: 1.2,
  },
};

const h6: CSS = {
  ...baseHeadingStyles,
  fontSize: "18px",
  lineHeight: 1.3,

  "@lg": {
    fontSize: "22px",
    lineHeight: 1.5,
  },
};

const eyebrow: CSS = {
  fontSize: "10px",
  lineHeight: 1.5,
  textTransform: "uppercase",
  letterSpacing: "0.5em",
  color: "$bodyLight",
  "@lg": {
    fontSize: "14px",
  },
};

// body styles
const bodyLarge: CSS = {
  fontFamily: fonts.heading,
  color: "$bodyLarge",
  lineHeight: 1.4,
  fontWeight: 600,
  fontSize: "20px",

  "@lg": {
    fontSize: "22px",
  },
};

const link: CSS = {
  fontSize: "inherit",
  display: "inline",
  color: "$link",
  fontWeight: 600,
  backgroundImage: "linear-gradient(to right, $linkHover, $linkHover)",
  backgroundPosition: "0 90%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 1px",
  transition: "120ms",

  "&:hover": {
    color: "$linkHover",
    backgroundSize: "100% 0px",
  },
};

const nestedLinkStyles: CSS = {
  "> a": {
    ...link,
    color: "inherit",
    backgroundImage: "linear-gradient(to right, currentColor, currentColor)",
    "&:hover": {
      color: "inherit",
      backgroundSize: "100% 0px",
    },
  },
};

const body: CSS = {
  fontFamily: fonts.body,
  color: "$body",
  lineHeight: 1.5,
  fontSize: "16px",
  fontWeight: 400,

  "@lg": {
    fontSize: "18px",
  },

  ...fontSmoothingStyles,
};

const bodySmall: CSS = {
  fontSize: "14px",
  "@lg": {
    fontSize: "16px",
  },

  ...nestedLinkStyles,
};

const footnote: CSS = {
  lineHeight: 1.3,
  fontSize: "12px",
  color: "$bodyLight",

  "& strong": {
    color: "$body",
  },
  "@lg": {
    fontSize: "14px",
  },

  ...nestedLinkStyles,
};

export const typography = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  eyebrow,
  //
  bodyLarge,
  p: body,
  body,
  bodySmall,
  footnote,
  link,
};
