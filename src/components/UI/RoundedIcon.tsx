import { Feather as Icon } from "@expo/vector-icons";
import React from "react";
import { Theme } from "src/theme";
import { Box, Text } from "src/theme/Theme";

export interface RoundedIconProps {
  name: string;
  size: number;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"] | undefined;
  iconRatio?: number;
  align?: "center" | "flex-start" | "flex-end";
}

const RoundedIcon: React.FC<RoundedIconProps> = ({
  name,
  size,
  color,
  backgroundColor,
  iconRatio,
  align = "center",
}) => {
  const iconSize = size * (iconRatio ?? 0.7);
  return (
    <Box
      height={size}
      width={size}
      alignItems={align}
      justifyContent="center"
      style={{ borderRadius: size / 2 }}
      {...{ backgroundColor }}
    >
      <Text
        textAlign="center"
        style={{ width: iconSize, height: iconSize }}
        {...{ color }}
      >
        <Icon size={iconSize} name={name as never} />
      </Text>
    </Box>
  );
};

export default RoundedIcon;
