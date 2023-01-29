import { CSS, styled } from "@theme";
import { MarginProps, SizeProps } from "@types";
import Img from "next/future/image";
import React, { useState } from "react";

import { reshapeArrayProps } from "@theme/helpers";

export const ImageWrapper = styled("figure", {
  display: "flex",
  position: "relative",

  flexDirection: "column",
  transition: "opacity 2s ease-in-out",
});

export interface IProps extends SizeProps, MarginProps {
  css?: CSS;
  aspectRatio?: any;
  className?: string;
  objectFit?: string;
  mediaDetails?: any;
  children?: any;
  //
  src?: string;
  alt?: string;
  priority?: boolean;
  quality?: number;
  onLoadingComplete?: any;
  sizes?: string;
  fadeInOnLoad?: any;
}

function Image({
  css,
  aspectRatio: passedAspectRatio,
  className,
  objectFit = "cover",
  children,
  mediaDetails,
  height: passedHeight,
  width: passedWidth,
  //
  src = "/images/avenue-old-placeholder.png",
  alt = "",
  quality,
  onLoadingComplete,
  priority = false,
  sizes,
  fadeInOnLoad,
  ...responsiveProps
}: IProps) {
  const [opacity, setOpacity] = useState(fadeInOnLoad ? 0 : 1);
  const aspectRatio = mediaDetails
    ? mediaDetails.width / mediaDetails.height
    : passedAspectRatio;

  const width =
    passedWidth || reshapeArrayProps(passedHeight, (v: any) => v * aspectRatio);

  return (
    <ImageWrapper
      className={`${className} avImage`}
      css={{
        "> span": {
          position: "static",
          size: "100%",
          paddingTop: `calc(100% / ${aspectRatio})`,
          aspectRatio,
        },

        img: {
          objectFit,
        },
        opacity,
        rp: {
          height: passedHeight,
          width,
          ...responsiveProps,
        },

        ...css,
      }}
    >
      <span>
        <Img
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          quality={quality}
          onLoadingComplete={
            fadeInOnLoad ? () => setOpacity(1) : onLoadingComplete
          }
        />
      </span>

      {children}
    </ImageWrapper>
  );
}

export default Image;
