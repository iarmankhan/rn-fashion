import React, { useState } from "react";
import BorderlessTap from "src/components/UI/BorderlessTap";
import RoundedIcon from "src/components/UI/RoundedIcon";
import { Box } from "src/theme/Theme";

interface OutfitProps {
  outfit: {
    color: string;
    id: number;
    aspectRatio: number;
    selected: boolean;
  };
  width: number;
}

const Outfit: React.FC<OutfitProps> = ({ outfit, width }) => {
  const [selected, setSelected] = useState(false);
  return (
    <BorderlessTap
      onPress={() => {
        setSelected((s) => !s);
        outfit.selected = !outfit.selected;
      }}
    >
      <Box
        borderRadius="m"
        marginBottom="m"
        alignItems="flex-end"
        padding="s"
        style={{
          backgroundColor: outfit.color,
          width,
          height: width * outfit.aspectRatio,
        }}
      >
        {selected && (
          <RoundedIcon
            name="check"
            size={22}
            color="background"
            backgroundColor="primary"
          />
        )}
      </Box>
    </BorderlessTap>
  );
};

export default Outfit;
