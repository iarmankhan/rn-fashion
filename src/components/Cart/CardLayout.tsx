import React from "react";
import { BoxProps } from "@shopify/restyle";

import BorderlessTap from "../UI/BorderlessTap";
import { Box } from "../../theme/Theme";
import { Theme } from "../../theme";

interface CardLayoutProps {
  children: React.ReactNode;
  onPress: () => void;
  backgroundColor: BoxProps<Theme>["backgroundColor"];
}

const CardLayout: React.FC<CardLayoutProps> = ({
  children,
  backgroundColor,
  onPress,
}) => {
  return (
    <BorderlessTap onPress={onPress}>
      <Box
        width={120}
        height={160}
        borderRadius="m"
        padding="s"
        marginLeft="m"
        backgroundColor={backgroundColor}
      >
        {children}
      </Box>
    </BorderlessTap>
  );
};

export default CardLayout;
