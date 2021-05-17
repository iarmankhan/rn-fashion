import React from "react";
import { ScrollView } from "react-native";
import Footer from "src/components/FavoriteOutfits/Footer";
import Outfit from "src/components/FavoriteOutfits/Outfit";
import Header from "src/components/UI/Header";
import { Box } from "src/theme/Theme";
import { HomeNavigationProps } from "src/types/navigation";

const outfits = [
  {
    id: 1,
    color: "#BFEAF5",
    aspectRatio: 1,
  },
  {
    id: 2,
    color: "#BEECC4",
    aspectRatio: 200 / 145,
  },
  {
    id: 3,
    color: "#FFE4D9",
    aspectRatio: 180 / 145,
  },
  {
    id: 4,
    color: "#FFDDDD",
    aspectRatio: 180 / 145,
  },
  {
    id: 5,
    color: "#BFEAF5",
    aspectRatio: 1,
  },
  {
    id: 6,
    color: "#F3F0EF",
    aspectRatio: 120 / 145,
  },
  {
    id: 7,
    color: "#D5C3BB",
    aspectRatio: 210 / 145,
  },
  {
    id: 8,
    color: "#D5C3BB",
    aspectRatio: 160 / 145,
  },
];

const FavoriteOutfits: React.FC<HomeNavigationProps<"FavoriteOutfits">> = ({
  navigation,
}) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "shopping-bag", onPress: () => true }}
        title="Favorite Outfits"
      />
      <ScrollView>
        <Box flexDirection="row">
          <Box>
            {outfits
              .filter((_, i) => i % 2 !== 0)
              .map((outfit) => (
                <Outfit key={outfit.id} {...{ outfit }} />
              ))}
          </Box>
          <Box>
            {outfits
              .filter((_, i) => i % 2 === 0)
              .map((outfit) => (
                <Outfit key={outfit.id} {...{ outfit }} />
              ))}
          </Box>
        </Box>
      </ScrollView>
      <Footer onPress={() => true} label="Add more to favorites" />
    </Box>
  );
};

export default FavoriteOutfits;
