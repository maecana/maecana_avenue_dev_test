import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";

import { colors, media, radii, shadows, sizes, space } from "./theme.config";
// eslint-disable-next-line import/no-cycle
import { fonts } from "./typography";
import { utils } from "./utils";

const ourConfig: any = {
  theme: {
    colors,
    fonts,
    space,
    sizes,
    shadows,
    radii,
  },
  utils,
  media,
};

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
  keyframes,
} = createStitches(ourConfig);

export type CSS = Stitches.CSS<typeof ourConfig>;
