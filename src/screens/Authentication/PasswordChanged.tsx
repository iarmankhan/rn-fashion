import React from "react";
import Button from "src/components/UI/Button";
import Container from "src/components/UI/Container";
import RoundedIcon from "src/components/UI/RoundedIcon";
import RoundedIconButton from "src/components/UI/RoundedIconButton";
import { Box, Text } from "src/theme/Theme";
import {
  AuthenticationRoutes,
  StackNavigationProps,
} from "src/types/navigation";

const SIZE = 80;

const PasswordChanged: React.FC<
  StackNavigationProps<AuthenticationRoutes, "PasswordChanged">
> = ({ navigation }) => {
  return (
    <Container
      pattern={0}
      footer={
        <Box flexDirection="row" justifyContent="center">
          <RoundedIconButton
            onPress={() => navigation.pop()}
            name="x"
            size={70}
            backgroundColor="white"
            color="secondary"
          />
        </Box>
      }
    >
      <Box padding="xl" justifyContent="center" alignItems="center" flex={1}>
        <Box marginBottom="xl">
          <RoundedIcon
            name="check"
            size={SIZE}
            color="primary"
            backgroundColor="primaryLight"
          />
        </Box>
        <Text variant="title1" textAlign="center" marginBottom="l">
          Your password was successfully changed
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Close this window and login again
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
