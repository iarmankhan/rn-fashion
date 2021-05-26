import React from "react";
import { Text } from "react-native";
import { Box } from "src/theme/Theme";

interface ProfileInfoProps {}

const PersonalInfo: React.FC<ProfileInfoProps> = () => {
  return (
    <Box flex={1}>
      <Text>ProfileInfo</Text>
    </Box>
  );
};

export default PersonalInfo;
