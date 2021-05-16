import React, { useState } from "react";
import { sub } from "react-native-reanimated";
import { useTransition } from "react-native-redash/lib/module/v1";
import Background from "src/components/OutfitIdeas/Background";
import Card from "src/components/OutfitIdeas/Card";
import Header from "src/components/UI/Header";
import { Box } from "src/theme/Theme";
import { HomeNavigationProps } from "src/types/navigation";

const cards = [
  {
    index: 3,
  },
  {
    index: 2,
  },
  {
    index: 1,
  },
  {
    index: 0,
  },
];

const step = 1 / (cards.length - 1);

const OutfitIdeas: React.FC<HomeNavigationProps<"OutfitIdeas">> = ({
  navigation,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const aIndex = useTransition(currentIndex);
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "shopping-bag", onPress: () => true }}
        title="Outfit Ideas"
      />
      <Box flex={1}>
        <Background />

        {cards.map(
          ({ index }) =>
            currentIndex < index * step + step && (
              <Card
                key={index}
                position={sub(index * step, aIndex)}
                onSwipe={() => setCurrentIndex((prevIndex) => prevIndex + step)}
              />
            )
        )}
      </Box>
    </Box>
  );
};

export default OutfitIdeas;
