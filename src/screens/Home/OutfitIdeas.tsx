import React from "react";
import Background from "src/components/OutfitIdeas/Background";
import Card from "src/components/OutfitIdeas/Card";
import Header from "src/components/UI/Header";
import { Box } from "src/theme/Theme";
import { HomeNavigationProps } from "src/types/navigation";

const OutfitIdeas: React.FC<HomeNavigationProps<"OutfitIdeas">> = ({
  navigation,
}) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "shopping-bag", onPress: () => true }}
        title="Outfit Ideas"
      />
      <Box flex={1}>
        <Background />

        <Card position={1} />
        <Card position={0.5} />
        <Card position={0} />
      </Box>
    </Box>
  );
};

export default OutfitIdeas;
