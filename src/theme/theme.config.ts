export const colors = {
  // primary
  bright: "#8581F1",
  ocean: "#5CC9E2",
  surfGreen: "#09D698",
  // secondary
  sunrise: "#FFA450",
  ruby: "#E63A81",
  gotham: "#2C3355",
  purple: "#6864BF",
  myst: "#2C92BE",
  // ui
  dark: "#202020",
  charcoal: "#5A5B65",
  steel: "#888A93",
  silver: "#DDE3EA",
  pearl: "#F3F7FB",
  white: "#FFFFFF",
  ivory: "#FBEFE5",
  lavender: "#FAEDF2",
  leaf: "#EAF8F4",
  ice: "#E9F7FB",

  // utility colors
  // these are common color aliases that will be re-used across the site
  primary: "$bright",
  secondary: "$ocean",
  primaryBackground: "$gotham",
  heading: "$gotham",
  body: "$charcoal",
  bodyLarge: "$myst",
  bodyDark: "$dark",
  bodyLight: "$steel",
  link: "$myst",
  linkHover: "$ocean",
  line: "$silver",
  grey: "$steel",

  // form
  checkmark: "$myst",
  formError: "$ruby",
  formGreen: "$surfGreen",
};

export const space = {
  1: "8px",
  2: "16px",
  3: "24px",
  4: "32px",
  5: "40px",
  6: "48px",
  7: "56px",
  8: "64px",
  9: "72px",
  10: "80px",
};

export const sizes = {
  // global layout
  initGutter: "24px",
  smGutter: "32px",
  mainColumnWidth: "1352px",
  edgeToMainColumn: "calc((100vw - $sizes$mainColumn) / 2)",
  // grid gaps
  gridGapInit: "15px",
  gridGapSm: "24px",
  gridGapMd: "24px",
  gridGapLg: "40px",
  ...space,
};

// below here stays pretty consistent throughout projects
export const media = {
  init: "(min-width: 0px)",
  sm: "(min-width: 700px)",
  md: "(min-width: 1024px)",
  lg: "(min-width: 1280px)",
  bg: "(min-width: 1536px)",
  vbg: "(min-width: 1920px)",
  huge: "(min-width: 2400px)",
};

export const shadows = {
  subtle: "0px 1px 2px rgba(44, 51, 85, 0.1)",
  soft: "0px 10px 35px rgba(44, 51, 85, 0.15)",
  strong: "0px 15px 50px rgba(44, 51, 85, 0.25)",
};

export const radii = {
  subtle: "3px",
  soft: "16px",
  strong: "24px",
};
