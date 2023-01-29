export type CSSAliases = {
  [key: string]: string;
};

export type CSSPropertyKey = keyof CSSAliases;

export const cssAliases: CSSAliases = {
  m: "margin",
  mt: "marginTop",
  mb: "marginBottom",
  ml: "marginLeft",
  mr: "marginRight",
  p: "padding",
  pt: "paddingTop",
  pb: "paddingBottom",
  pl: "paddingLeft",
  pr: "paddingRight",
  flow: "gridAutoFlow",
  gap: "gridGap",
  rowGap: "gridRowGap",
  colGap: "gridColumnGap",
  cols: "gridTemplateColumns",
  rows: "gridTemplateRows",
  pc: "placeContent",
  direction: "flexDirection",
  dir: "flexDirection",
  jc: "justifyContent",
  ji: "justifyItems",
  ac: "alignContent",
  ai: "alignItems",
  font: "fontFamily",
  fs: "fontSize",
  fz: "fontSize",
  fw: "fontWeight",
  ta: "textAlign",
  lh: "lineHeight",
  bg: "background",
  mw: "maxWidth",
  h: "height",
  w: "width",
  br: "borderRadius",
};

export const generateCssAliasUtils = () => {
  let newUtils = {};

  Object.keys(cssAliases).map((key) => {
    newUtils = {
      ...newUtils,
      [key]: (value: any) => ({
        [cssAliases[key]]: value,
      }),
    };

    return null;
  });

  return newUtils;
};
