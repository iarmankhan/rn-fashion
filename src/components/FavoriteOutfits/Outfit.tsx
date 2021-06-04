import React, { useState } from "react";
import RoundedIcon from "src/components/UI/RoundedIcon";
import { Box } from "src/theme/Theme";
import { BorderlessButton } from "react-native-gesture-handler";

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
    <BorderlessButton
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
    </BorderlessButton>
  );
};

export default Outfit;
