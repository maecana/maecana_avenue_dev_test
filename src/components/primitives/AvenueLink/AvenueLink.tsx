import { CSS, styled } from "@theme";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  prefetch?: boolean;
  children?: React.ReactNode;
  css?: CSS;
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
}

const StyledLink = styled("a", {});

const AvenueLink = React.forwardRef(
  (
    { href, prefetch, children, css, className, ariaLabel, onClick }: IProps,
    ref: any
  ) => {
    const [isExternalLink, setIsExternalLink] = useState(false);

    useEffect(() => {
      const tmp: any = document.createElement("a");

      if (tmp) {
        tmp.href = href;
      }

      if (tmp.host !== window.location.host) {
        setIsExternalLink(true);
      }
    }, [href]);

    if (!href?.length) {
      return (
        <StyledLink
          as="span"
          className={className}
          css={css}
          ref={ref}
          aria-label={ariaLabel}
          onClick={onClick}
        >
          {children}
        </StyledLink>
      );
    }

    if (isExternalLink) {
      return (
        <StyledLink
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          ref={ref}
          css={css}
          className={className}
          aria-label={ariaLabel}
        >
          {children}
        </StyledLink>
      );
    }

    return (
      <Link href={href} prefetch={prefetch} passHref>
        <StyledLink
          ref={ref}
          css={css}
          className={className}
          aria-label={ariaLabel}
        >
          {children}
        </StyledLink>
      </Link>
    );
  }
);

export default AvenueLink;
