import { Feather as Icon } from "@expo/vector-icons";
import React from "react";
import { Theme } from "src/theme";
import { Box, Text } from "src/theme/Theme";

export interface RoundedIconProps {
  name: string;
  size: number;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"];
  iconRatio?: number;
}

const RoundedIcon: React.FC<RoundedIconProps> = ({
  name,
  size,
  color,
  backgroundColor,
  iconRatio,
}) => {
  const iconSize = size * (iconRatio ?? 0.7);
  return (
    <Box
      height={size}
      width={size}
      alignItems="center"
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
