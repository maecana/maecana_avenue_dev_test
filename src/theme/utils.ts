import { generateCssAliasUtils } from "./cssAliases";
import { responsivePropsGenerator } from "./helpers";
import { sizes } from "./theme.config";

export const utils = {
  size: (value: any) => ({
    height: value,
    width: value,
  }),
  aspectRatio: (value: number) => ({
    paddingTop: `calc(100% / ${value})`,
  }),
  imageAspectRatio: (value: number) => ({
    "> span:first-child": {
      paddingTop: `calc(100% / ${value}) !important`,
    },
  }),
  objectFit: (value: string) => ({
    objectFit: value,
  }),
  marginX: (value: any) => ({
    marginLeft: value,
    marginRight: value,
  }),
  marginY: (value: any) => ({
    marginTop: value,
    marginBottom: value,
  }),

  paddingX: (value: any) => ({
    paddingLeft: value,
    paddingRight: value,
  }),

  paddingY: (value: any) => ({
    paddingTop: value,
    paddingBottom: value,
  }),

  pushWidth: (value: any) => ({
    $$amount: value,
    width: "calc(100% + 2*$$amount)",
    marginLeft: "-$$amount",
  }),

  rp: (props: { [s: string]: unknown } | ArrayLike<unknown>) =>
    responsivePropsGenerator(props),

  absoluteFull: (value: boolean) => {
    if (value !== true) return false;
    return {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    };
  },
  absoluteCentered: (value: boolean) => {
    if (value !== true) return false;
    return {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate3d(-50%,-50%,0)",
    };
  },
  absoluteCenteredX: (value: boolean) => {
    if (value !== true) return false;
    return {
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
    };
  },

  expandPseudo: (value: boolean) => {
    if (value !== true) return false;
    return {
      "&:before": {
        content: "",
        zIndex: 2,
        absoluteFull: true,
      },
    };
  },

  hoverOpacity: (value: boolean | number) => {
    const isNumber = typeof value === "number";
    if (value !== true && !isNumber) return false;
    const opacity = isNumber ? value : 0.6;
    return {
      transition: "opacity 150ms",
      "&:hover": {
        opacity,
      },
    };
  },

  hoverColor: (value: boolean | string) => {
    const isString = typeof value === "string";
    if (value !== true && !isString) return false;
    const color = isString ? value : "$link";
    return {
      transition: "color 150ms",
      "> *": {
        transition: "color 150ms",
      },
      "&:hover": {
        color,
        "> *": {
          color,
        },
      },
    };
  },

  themeGridGaps: (value: boolean) => {
    if (!value) return false;

    return {
      gridColumnGap: "$sizes$gridGapInit",
      "@sm": {
        gridColumnGap: "$sizes$gridGapSm",
      },

      "@md": {
        gridColumnGap: "$sizes$gridGapMd",
      },
      "@lg": {
        gridColumnGap: "$sizes$gridGapLg",
      },
    };
  },

  cardGridGaps: (value: boolean) => {
    if (!value) return false;

    return {
      gap: "$sizes$gridGapSm",

      "@lg": {
        gap: "$sizes$gridGapLg",
      },
    };
  },
  cardGridColumns: (value: boolean) => {
    if (!value) return false;

    return {
      cols: "1fr",
      "@sm": { cols: "1fr 1fr" },

      "@md": {
        cols: "1fr 1fr 1fr",
      },
    };
  },
  cardsGrid: (value: boolean) => {
    if (!value) return false;

    return {
      display: "grid",
      cardGridGaps: true,
      cardGridColumns: true,
    };
  },
  // usefull to force an item inside of mainColumn to be fullwidth
  forceFullWidth: (value: boolean) => {
    if (!value) return false;

    const mainColumnPlusGutterWidth =
      parseInt(sizes.mainColumnWidth, 10) + 2 * parseInt(sizes.smGutter, 10);

    return {
      maxWidth: "100vw",
      width: "100vw",
      $$negativeMargin: "-$sizes$initGutter",
      marginX: "$$negativeMargin",
      "@sm": {
        $$negativeMargin: "-$sizes$smGutter",
      },

      [`@media(min-width:${mainColumnPlusGutterWidth}px)`]: {
        $$negativeMargin: "calc((100vw - $sizes$mainColumnWidth) / -2)",
      },
    };
  },

  hideMobile: (value: boolean) => {
    if (!value) return false;
    return {
      display: "none",
      "@md": {
        display: "block",
      },
    };
  },

  displayAt: (value: string) => {
    if (!value) return false;

    return {
      display: "none",
      [`@${value}`]: {
        display: "block",
      },
    };
  },

  hideAt: (value: string) => {
    if (!value) return false;

    return {
      [`@${value}`]: {
        display: "none",
      },
    };
  },

  ...generateCssAliasUtils(),
};
