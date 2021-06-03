import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

import { Box, Text } from "../../theme/Theme";
import { useTheme } from "../../theme";
import Button from "../UI/Button";

import Card, { CardModel, CardTypes } from "./Card";
import AddCard from "./AddCard";

interface CheckoutProps {
  minHeight: number;
}

const CARDS: CardModel[] = [
  { id: 0, type: CardTypes.VISA, last4Digits: 5467, expiration: "05/24" },
  { id: 1, type: CardTypes.MASTERCARD, last4Digits: 3456, expiration: "03/22" },
];

interface LineItemProps {
  label: string;
  value: number;
}

const LineItem = ({ label, value }: LineItemProps) => (
  <Box flexDirection="row" paddingVertical="s">
    <Box flex={1}>
      <Text variant="title3" color="background">
        {label}
      </Text>
    </Box>
    <Box>
      <Text color="primary" variant="title3">
        ${value}
      </Text>
    </Box>
  </Box>
);

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
        <Box>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
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
        <Box marginTop="xl">
          <Text color="background" variant="title3">
            Delivery address
          </Text>
          <Box flexDirection="row" opacity={0.5} paddingVertical="m">
            <Box flex={1}>
              <Text color="background">23, Bakers st., tef av, new york</Text>
            </Box>
            <Box justifyContent="center" alignItems="center">
              <Text color="background">Change</Text>
            </Box>
          </Box>

          <LineItem label="Total Items (3)" value={189.94} />
          <LineItem label="Standard Delivery" value={12} />
          <LineItem label="Total Payment" value={201.84} />
        </Box>

        <Box
          paddingVertical="l"
          alignItems="center"
          flex={1}
          justifyContent="flex-end"
        >
          <Button
            label="Swipe to pay $201.84"
            onPress={() => true}
            variant="primary"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;
