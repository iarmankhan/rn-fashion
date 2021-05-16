import React from "react";
import Header from "src/components/UI/Header";
import { Box } from "src/theme/Theme";

const OutfitIdeas: React.FC = () => {
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        left={{ icon: "menu", onPress: () => true }}
        right={{ icon: "shopping-bag", onPress: () => true }}
        title="Outfit Ideas"
      />
    </Box>
  );
};

export default OutfitIdeas;
