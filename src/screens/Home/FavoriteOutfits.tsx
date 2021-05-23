import React, { useRef, useState } from "react";
import { Dimensions, ScrollView } from "react-native";
import Footer from "src/components/FavoriteOutfits/Footer";
import Outfit from "src/components/FavoriteOutfits/Outfit";
import TopCurve from "src/components/FavoriteOutfits/TopCurve";
import Header from "src/components/UI/Header";
import { useTheme } from "src/theme";
import { Box } from "src/theme/Theme";
import { HomeNavigationProps } from "src/types/navigation";
import {
  Transitioning,
  Transition,
  TransitioningView,
} from "react-native-reanimated";

const defaultOutfits = [
  {
    id: 1,
    color: "#BFEAF5",
    aspectRatio: 1,
    selected: false,
  },
  {
    id: 2,
    color: "#BEECC4",
    aspectRatio: 200 / 145,
    selected: false,
  },
  {
    id: 3,
    color: "#FFE4D9",
    aspectRatio: 180 / 145,
    selected: false,
  },
  {
    id: 4,
    color: "#FFDDDD",
    aspectRatio: 180 / 145,
    selected: false,
  },
  {
    id: 5,
    color: "#BFEAF5",
    aspectRatio: 1,
    selected: false,
  },
  {
    id: 6,
    color: "#F3F0EF",
    aspectRatio: 120 / 145,
    selected: false,
  },
  {
    id: 7,
    color: "#D5C3BB",
    aspectRatio: 210 / 145,
    selected: false,
  },
  {
    id: 8,
    color: "#DEEFC4",
    aspectRatio: 160 / 145,
    selected: false,
  },
];

const { width: wWidth } = Dimensions.get("window");

const FavoriteOutfits: React.FC<HomeNavigationProps<"FavoriteOutfits">> = ({
  navigation,
}) => {
  const transition = (
    <Transition.Together>
      <Transition.Out type="fade" />
      <Transition.In type="fade" />
    </Transition.Together>
  );
  const theme = useTheme();
  const width = (wWidth - theme.spacing.m * 3) / 2;

  const [outfits, setOutfits] = useState(defaultOutfits);
  const [footerHeight, setFooterHeight] = useState(0);

  const list = useRef<TransitioningView>(null);

  return (
    <Box flex={1} backgroundColor="background">
      <Header
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "shopping-bag", onPress: () => true }}
        title="Favorite Outfits"
      />
      <Box flex={1}>
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: theme.spacing.m,
            paddingBottom: footerHeight,
            paddingTop: theme.spacing.s,
          }}
        >
          <Transitioning.View ref={list} {...{ transition }}>
            <Box flexDirection="row">
              <Box>
                {outfits
                  .filter((_, i) => i % 2 !== 0)
                  .map((outfit) => (
                    <Outfit key={outfit.id} {...{ outfit, width }} />
                  ))}
              </Box>
              <Box marginLeft="m">
                {outfits
                  .filter((_, i) => i % 2 === 0)
                  .map((outfit) => (
                    <Outfit key={outfit.id} {...{ outfit, width }} />
                  ))}
              </Box>
            </Box>
          </Transitioning.View>
        </ScrollView>
        <TopCurve {...{ footerHeight }} />
        <Box
          position="absolute"
          left={0}
          right={0}
          bottom={0}
          onLayout={({
            nativeEvent: {
              layout: { height },
            },
          }) => setFooterHeight(height)}
        >
          <Footer
            onPress={() => {
              list.current?.animateNextTransition();
              setOutfits(outfits.filter((outfit) => !outfit.selected));
            }}
            label="Add to favorites"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FavoriteOutfits;
