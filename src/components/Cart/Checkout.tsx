import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

import { Box } from "../../theme/Theme";
import { useTheme } from "../../theme";

import Card, { CardModel, CardTypes } from "./Card";
import AddCard from "./AddCard";

interface CheckoutProps {
  minHeight: number;
}

const CARDS: CardModel[] = [
  { id: 0, type: CardTypes.VISA, last4Digits: 5467, expiration: "05/24" },
  { id: 1, type: CardTypes.MASTERCARD, last4Digits: 3456, expiration: "03/22" },
];

const Checkout: React.FC<CheckoutProps> = ({ minHeight }) => {
  const theme = useTheme();
  const [selectedCard, setSelectedCard] = useState(CARDS[0].id);
  return (
    <Box
      flex={1}
      backgroundColor="secondary"
      style={{ paddingTop: minHeight + theme.spacing.m }}
    >
      <Box flex={1} padding="m">
        <ScrollView horizontal>
          <AddCard />
          {CARDS.map((card) => (
            <Card
              key={card.id}
              card={card}
              selected={selectedCard === card.id}
              onSelect={() => setSelectedCard(card.id)}
            />
          ))}
        </ScrollView>
      </Box>
    </Box>
  );
};

export default Checkout;
