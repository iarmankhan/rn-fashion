import React from "react";
import { ScrollView } from "react-native";
import CheckboxGroup from "src/components/EditProfile/CheckboxGroup";
import { Box, Text } from "src/theme/Theme";

const outfitTypes = [
  { value: "men", label: "For men" },
  { value: "women", label: "For women" },
  { value: "both", label: "For both" },
];

const brands = [
  { value: "adidas", label: "Adidas" },
  { value: "nike", label: "Nike" },
  { value: "converse", label: "Converse" },
  { value: "tommy-hillfiger", label: "Tommy Hilfiger" },
  { value: "billionaire-boys-club", label: "Billionaire Boys Club" },
  { value: "jordan", label: "Jordan" },
  { value: "le-coq-sportif", label: "Le Coq Sportif" },
];

interface ConfigurationProps {}

const Configuration: React.FC<ConfigurationProps> = () => {
  return (
    <ScrollView>
      <Box padding="m">
        <Text variant="body">What type of outfit you usually wear?</Text>
      </Box>
      <CheckboxGroup options={outfitTypes} />

      <Box padding="m">
        <Text variant="body">My preferred brands</Text>
      </Box>
      <CheckboxGroup options={brands} />
    </ScrollView>
  );
};

export default Configuration;
