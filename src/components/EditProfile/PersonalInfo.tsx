import React from "react";
import { ScrollView } from "react-native";
import { Box, Text } from "src/theme/Theme";

import TextInput from "../Form/TextInput";

import CheckboxGroup from "./CheckboxGroup";

const genders = [
  {
    value: "male",
    label: "Male",
  },
  {
    value: "female",
    label: "Female",
  },
];

const PersonalInfo: React.FC = () => {
  return (
    <ScrollView>
      <Box padding="m">
        <Text variant="body">Account information</Text>

        <Box marginVertical="m">
          <TextInput
            icon="user"
            placeholder="Name "
            autoCompleteType="name"
            autoCapitalize={"none"}
          />
        </Box>

        <Box marginBottom="m">
          <TextInput
            icon="lock"
            placeholder="Password"
            secureTextEntry
            autoCompleteType="password"
            autoCapitalize="none"
          />
        </Box>
        <Box marginBottom="m">
          <TextInput
            icon="map-pin"
            placeholder="Address"
            autoCompleteType="street-address"
            autoCapitalize={"none"}
          />
        </Box>
        <Box marginBottom="s">
          <CheckboxGroup options={genders} radio />
        </Box>
      </Box>
    </ScrollView>
  );
};

export default PersonalInfo;
