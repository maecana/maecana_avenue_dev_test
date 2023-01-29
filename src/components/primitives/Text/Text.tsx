import { CSS, styled } from "@theme";
import { SpacingProps, TextProps } from "@types";

import { typography } from "@theme/typography";

const defaultMarkup = "p";

const styleToMarkupMap: any = {
  eyebrow: "h2",
  bodyLarge: "p",
  bodySmall: "p",
  footnote: "p",
  link: "a",
};

const StyledText = styled(defaultMarkup, {
  variants: {
    textStyle: typography,
  },

  defaultVariants: {
    textStyle: defaultMarkup,
  },
});

interface IProps extends TextProps, SpacingProps {
  children?: React.ReactNode;
  css?: CSS;
  as?: keyof typeof typography;
  textStyle?: keyof typeof typography;
  href?: string;
  className?: string;
  onClick?: () => void;
}

const Text = ({
  children,
  as,
  href,
  onClick,
  textStyle,
  css,
  className,
  ...styleProps
}: IProps) => {
  return (
    <StyledText
      css={{
        rp: styleProps,
        ...css,
      }}
      as={(as && styleToMarkupMap[as]) || as}
      href={href}
      onClick={onClick}
      textStyle={textStyle || as}
      className={`${className} text--${as}`}
    >
      {children}
    </StyledText>
  );
};

export default Text;
