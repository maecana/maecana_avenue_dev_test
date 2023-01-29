import { globalCss } from "@theme";

import { typography } from "@theme/typography";

const globalStyles = globalCss({
  "@import": "/resets.css",
  body: {
    ...typography.body,
  },
  html: {},
  "html, body, body > div:first-child, div#__next, div#__next > div": {
    height: "100%",
  },
});

export default globalStyles;
