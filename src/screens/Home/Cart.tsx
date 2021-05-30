import React from "react";

import CartContainer from "../../components/Cart/CartContainer";
import Header from "../../components/UI/Header";
import { HomeNavigationProps } from "../../types/navigation";

const Cart: React.FC<HomeNavigationProps<"Cart">> = ({ navigation }) => {
  return (
    <CartContainer>
      <Header
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        title="Cart"
        right={{ icon: "share", onPress: () => true }}
      />
    </CartContainer>
  );
};

export default Cart;
