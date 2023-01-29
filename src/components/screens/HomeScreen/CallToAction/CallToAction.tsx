import { handleWpLink } from "@helpers/handleWpLink";
import { AvenueLink, Button, Stack, Text } from "@primitives";
import { WpImageProps, WpLinkProps } from "@types";
import React from "react";

import { CTAImage, TextWrapper, Wrapper } from "./style";

export interface CallToActionProps {
  image?: WpImageProps;
  subheading?: string;
  heading?: string;
  description?: string;
  link?: WpLinkProps;
}

const CallToAction = ({
  image,
  subheading,
  heading,
  description,
  link,
}: CallToActionProps) => {
  if (!heading && !image) return null;

  return (
    <Wrapper>
      <CTAImage src={image?.sourceUrl} alt={image?.altText || ""} />

      <TextWrapper>
        <Stack gap="$2">
          {subheading && (
            <Text as="eyebrow" color="$primary">
              {subheading}
            </Text>
          )}
          {heading && (
            <AvenueLink>
              <Text as="h2" color="white">
                {heading}
              </Text>
            </AvenueLink>
          )}
          {description && <Text color="$ice">{description}</Text>}
          {link && (
            <Button
              ariaLabel={`Click to read more about ${heading}`}
              href={handleWpLink(link)}
              css={{
                alignSelf: "flex-start",
                "@md": {
                  marginTop: "$4",
                },
                expandPseudo: true,
              }}
            >
              {link?.text}
            </Button>
          )}
        </Stack>
      </TextWrapper>
    </Wrapper>
  );
};

export default CallToAction;
