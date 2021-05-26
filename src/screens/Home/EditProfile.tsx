import React from "react";
import { Dimensions } from "react-native";
import Tabs from "src/components/EditProfile/Tabs";
import Header from "src/components/UI/Header";
import { useTheme } from "src/theme";
import { Box, Text } from "src/theme/Theme";
import { HomeNavigationProps } from "src/types/navigation";

const { width } = Dimensions.get("window");

const tabs = [
  {
    id: "configuration",
    title: "Configuration",
  },
  {
    id: "info",
    title: "Personal Info",
  },
];

const EditProfile: React.FC<HomeNavigationProps<"EditProfile">> = ({
  navigation,
}) => {
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor="background">
      <Box flex={0.2} backgroundColor="background">
        <Box
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
          borderBottomRightRadius="xl"
          backgroundColor="secondary"
        >
          <Header
            left={{
              icon: "menu",
              onPress: () => navigation.openDrawer(),
            }}
            title="Edit Profile"
            dark
          />
        </Box>
      </Box>
      <Box>
        <Box
          position="absolute"
          top={-50}
          bottom={0}
          left={width / 2 - 50}
          right={0}
          backgroundColor="primary"
          width={100}
          height={100}
          style={{ borderRadius: 50 }}
        />
        <Box marginVertical="l" style={{ marginTop: 50 + theme.spacing.m }}>
          <Text variant="title1" textAlign="center">
            Arman Khan
          </Text>
          <Text variant="body" textAlign="center">
            arman@gmail.com
          </Text>
        </Box>
      </Box>

      <Tabs tabs={tabs} />
    </Box>
  );
};

export default EditProfile;
