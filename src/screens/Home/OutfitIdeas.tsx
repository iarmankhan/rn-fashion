import React, { useState } from "react";
import Background from "src/components/OutfitIdeas/Background";
import Card from "src/components/OutfitIdeas/Card";
import Categories from "src/components/OutfitIdeas/Categories";
import Header from "src/components/UI/Header";
import { Box } from "src/theme/Theme";
import { HomeNavigationProps } from "src/types/navigation";
import { useTiming } from "react-native-redash";

const cards = [
  {
    index: 3,
    source: require("../../../assets/4.png"),
  },
  {
    index: 2,
    source: require("../../../assets/3.png"),
  },
  {
    index: 1,
    source: require("../../../assets/2.png"),
  },
  {
    index: 0,
    source: require("../../../assets/1.png"),
  },
];

const step = 1 / (cards.length - 1);

// TODO: add buttons bottom bar
const OutfitIdeas: React.FC<HomeNavigationProps<"OutfitIdeas">> = ({
  navigation,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const aIndex = useTiming(currentIndex);

  return (
    <Box flex={1} backgroundColor="background">
      <Header
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "shopping-bag", onPress: () => true }}
        title="Outfit Ideas"
      />
      <Categories />
      <Box flex={1}>
        <Background />
        {cards.map(
          ({ index, source }) =>
            currentIndex < index * step + step && (
              <Card
                key={index}
                aIndex={aIndex}
                index={index}
                onSwipe={() => setCurrentIndex((prevIndex) => prevIndex + step)}
                {...{ source, step }}
              />
            )
        )}
      </Box>
    </Box>
  );
};

export default OutfitIdeas;
