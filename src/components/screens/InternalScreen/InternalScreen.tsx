import { Button, MainColumn, Spacer, Text } from "@primitives";
import { styled } from "@theme";
import React from "react";

interface IProps {
  title?: string;
}

export const PageWrapper = styled(MainColumn, {
  paddingY: 40,
});

const InternalScreen = ({ title }: IProps) => {
  return (
    <PageWrapper>
      <Button href="/">Go Back </Button>
      <Spacer height={20} />
      <Text as="h1" color="$primary">
        {title}
      </Text>
    </PageWrapper>
  );
};

export default InternalScreen;
