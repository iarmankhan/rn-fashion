import React from "react";
import { Box } from "src/theme/Theme";

interface OutfitProps {
  outfit: {
    color: string;
    id: number;
    aspectRatio: number;
  };
  width: number;
}

const Outfit: React.FC<OutfitProps> = ({
  outfit: { color: backgroundColor, aspectRatio },
  width,
}) => {
  return (
    <Box
      borderRadius="m"
      marginBottom="m"
      style={{ backgroundColor, width, height: width * aspectRatio }}
    />
  );
};

export default Outfit;
