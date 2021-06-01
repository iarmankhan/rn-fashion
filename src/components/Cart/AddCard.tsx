import React from "react";
import { Feather } from "@expo/vector-icons";

import { Box } from "../../theme/Theme";

import CardLayout from "./CardLayout";

const AddCard: React.FC = () => {
  return (
    <CardLayout onPress={() => true} backgroundColor="secondary">
      <Box
        justifyContent="center"
        alignItems="center"
        flex={1}
        borderRadius="m"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
      >
        <Feather name="plus" color="#fff" size={32} />
      </Box>
    </CardLayout>
  );
};

export default AddCard;
