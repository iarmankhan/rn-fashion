import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

import CartContainer from "../../components/Cart/CartContainer";
import Header from "../../components/UI/Header";
import { HomeNavigationProps } from "../../types/navigation";
import { Box, Text } from "../../theme/Theme";
import CartItem from "../../components/Cart/CartItem";
import { aspectRatio, useTheme } from "../../theme";
import Checkout from "../../components/Cart/Checkout";

const height = 100 * aspectRatio;

const d = "M 0 0 A 50 50 0 0 0 50 50 H 325 A 50 50 0 0 1 375 100 V 0 Z";

const defaultItems = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

const Cart: React.FC<HomeNavigationProps<"Cart">> = ({ navigation }) => {
  const [items, setItems] = useState(defaultItems);
  const theme = useTheme();
  return (
    <CartContainer CheckoutComponent={Checkout}>
      <Box backgroundColor="primary">
        <Header
          dark
          left={{ icon: "arrow-left", onPress: () => navigation.goBack() }}
          title="Shopping Cart"
        />
      </Box>
      <Box flex={1}>
        <ScrollView
          style={{
            borderBottomLeftRadius: theme.borderRadii.xl,
            borderBottomRightRadius: theme.borderRadii.xl,
          }}
          contentContainerStyle={{
            paddingVertical: 50 * aspectRatio,
          }}
          showsVerticalScrollIndicator={false}
        >
          {items.map((item, index) => (
            <CartItem
              key={item.id}
              onDelete={() => {
                items.splice(index, 1);
                setItems(items.concat());
              }}
            />
          ))}
        </ScrollView>
        <Box
          style={{ position: "absolute", top: 0, left: 0, right: 0, height }}
        >
          <Svg style={StyleSheet.absoluteFill} viewBox="0 0 375 100">
            <Path d={d} fill={theme.colors.primary} />
          </Svg>
          <Text variant="title2" color="background" textAlign="center">
            3 Items Added
          </Text>
        </Box>
      </Box>
    </CartContainer>
  );
};

export default Cart;
