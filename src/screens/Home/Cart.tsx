import React from "react";
import { ScrollView } from "react-native";

import CartContainer from "../../components/Cart/CartContainer";
import Header from "../../components/UI/Header";
import { HomeNavigationProps } from "../../types/navigation";
import { Box } from "../../theme/Theme";
import CartItem from "../../components/Cart/CartItem";

const Cart: React.FC<HomeNavigationProps<"Cart">> = ({ navigation }) => {
  return (
    <CartContainer>
      <Box backgroundColor="primary">
        <Header
          left={{ icon: "arrow-left", onPress: () => navigation.goBack() }}
          title="Shopping Cart"
        />
      </Box>
      <ScrollView>
        <CartItem />
      </ScrollView>
    </CartContainer>
  );
};

export default Cart;
