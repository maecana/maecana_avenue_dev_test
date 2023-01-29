import { CSS } from "@theme";
import { CSSUnit } from "@types";

import { CSSPropertyKey, cssAliases } from "./cssAliases";
import { media } from "./theme.config";

export const prevNonNull = (list: Array<CSSUnit>): CSSUnit => {
  if (list.length === 0) return "none";
  const lastItem = list[list.length - 1];
  return lastItem === 0 ? 0 : lastItem || prevNonNull(list.slice(0, -1));
};

export const getLastDefinedItem = (
  list: Array<CSSUnit>,
  index: number
): CSSUnit =>
  list[index] === undefined || list[index] === null
    ? prevNonNull(list.slice(0, index))
    : list[index];

export const responsivePropsGenerator = (
  props: { [s: string]: unknown } | ArrayLike<unknown>
): CSS => {
  if (!props) return {};

  const breakpoints = Object.keys(media);
  const responsiveCss = breakpoints.reduce((css, breakpoint, index) => {
    const isObject = (val: any, bpIndex: number): any => {
      if (typeof val === "object") {
        const entries = Object.entries(val);
        return Object.fromEntries(
          entries.map(([key, val]) => {
            const finalVal = Array.isArray(val)
              ? getLastDefinedItem(val, bpIndex)
              : isObject(val, bpIndex);
            return [key, finalVal];
          })
        );
      }
      return val;
    };

    const newCss = {
      ...css,
      [`@${breakpoint}`]: {
        ...Object.fromEntries(
          Object.entries(props).map(([key, val]: [string, any]) => {
            const keyString = key as CSSPropertyKey;
            const finalKey = cssAliases[keyString] || key;
            const finalValue = Array.isArray(val)
              ? getLastDefinedItem(val, index)
              : isObject(val, index);
            return [finalKey, finalValue];
          })
        ),
      },
    };
    return newCss;
  }, {});

  return responsiveCss;
};

export const reshapeArrayProps = (
  value: any,
  modifyingFn: (v: any) => void
) => {
  if (!value) return "";
  if (Array.isArray(value)) {
    return value.map((v) => (!v ? null : modifyingFn(v)));
  }
  return modifyingFn(value);
};
