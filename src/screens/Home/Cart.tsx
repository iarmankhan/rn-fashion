import React from "react";
import { Dimensions, ScrollView, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

import CartContainer from "../../components/Cart/CartContainer";
import Header from "../../components/UI/Header";
import { HomeNavigationProps } from "../../types/navigation";
import { Box, Text } from "../../theme/Theme";
import CartItem from "../../components/Cart/CartItem";
import { aspectRatio, useTheme } from "../../theme";

const { width } = Dimensions.get("window");
const height = 100 * aspectRatio;

const d = "M 0 0 A 50 50 0 0 0 50 50 H 325 A 50 50 0 0 1 375 100 V 0 Z";

const Cart: React.FC<HomeNavigationProps<"Cart">> = ({ navigation }) => {
  const theme = useTheme();
  return (
    <CartContainer>
      <Box backgroundColor="primary">
        <Header
          dark
          left={{ icon: "arrow-left", onPress: () => navigation.goBack() }}
          title="Shopping Cart"
        />
      </Box>
      <Box width={width} height={height}>
        <Svg style={StyleSheet.absoluteFill} viewBox="0 0 375 100">
          <Path d={d} fill={theme.colors.primary} />
        </Svg>
        <Text variant="title2" color="background" textAlign="center">
          3 Items Added
        </Text>
      </Box>
      <ScrollView
        style={{
          borderBottomLeftRadius: theme.borderRadii.xl,
          borderBottomRightRadius: theme.borderRadii.xl,
        }}
        showsVerticalScrollIndicator={false}
      >
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </ScrollView>
    </CartContainer>
  );
};

export default Cart;
