import React from "react";
import { Box } from "src/theme/Theme";

interface OutfitProps {
  outfit: {
    color: string;
    id: number;
    aspectRatio: number;
  };
}

const Outfit: React.FC<OutfitProps> = ({ outfit: { color } }) => {
  return <Box style={{ backgroundColor: color }} />;
};

export default Outfit;
