import React from "react";
import { Image, View } from "react-native";

import { Text } from "../../theme/Theme";

import CardLayout from "./CardLayout";

export enum CardTypes {
  VISA,
  MASTERCARD,
}

export interface CardModel {
  id: number;
  type: CardTypes;
  last4Digits: number;
  expiration: string;
}

interface CardProps {
  card: CardModel;
  selected: boolean;
  onSelect: () => void;
}

const Card: React.FC<CardProps> = ({ card, selected, onSelect }) => {
  return (
    <CardLayout
      onPress={onSelect}
      backgroundColor={selected ? "primary" : "background"}
    >
      <View style={{ flex: 0.6 }}>
        <Image
          style={{
            width: 50,
            height: 20,
            resizeMode: card.type === CardTypes.VISA ? "cover" : "contain",
          }}
          source={
            card.type === CardTypes.VISA
              ? require("../../../assets/visa.png")
              : require("../../../assets/mastercard_PNG16.png")
          }
        />
      </View>
      <Text
        variant="title3"
        marginTop="m"
        marginBottom="s"
        color={selected ? "background" : "text"}
      >
        ****{card.last4Digits}
      </Text>
      <Text opacity={0.5} marginBottom="s">
        Expiration
      </Text>
      <Text color={selected ? "background" : "text"}>{card.expiration}</Text>
    </CardLayout>
  );
};

export default Card;
