import React from "react";
import CloseButtonFooter from "src/components/CloseButtonFooter";
import Button from "src/components/UI/Button";
import Container from "src/components/UI/Container";
import { Box, Text } from "src/theme/Theme";
import { Routes, StackNavigationProps } from "src/types/navigation";
import { Feather as Icon } from "@expo/vector-icons";

const SIZE = 80;

const PasswordChanged: React.FC<
  StackNavigationProps<Routes, "PasswordChanged">
> = ({ navigation }) => {
  return (
    <Container
      footer={
        <Box flexDirection="row" justifyContent="center">
          <CloseButtonFooter onPress={() => navigation.pop()} />
        </Box>
      }
    >
      <Box padding="xl" justifyContent="center" alignItems="center" flex={1}>
        <Box
          alignItems="center"
          justifyContent="center"
          backgroundColor="primaryLight"
          width={SIZE}
          height={SIZE}
          style={{ borderRadius: SIZE / 2 }}
          marginBottom="xl"
        >
          <Text color="primary" textAlign="center">
            <Icon name="check" size={32} />
          </Text>
        </Box>
        <Text variant="title1" textAlign="center" marginBottom="l">
          Your password was successfully changed
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Enter the email address associated with your account
        </Text>

        <Box alignItems="center" marginTop="m">
          <Button
            onPress={() => navigation.navigate("Login")}
            variant="primary"
            label="Reset Password"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default PasswordChanged;
