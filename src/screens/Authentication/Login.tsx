import React from "react";
import { View } from "react-native";
import SocialLogin from "src/components/Authentication/Login/SocialLogin";
import Button from "src/components/UI/Button";
import Container from "src/components/UI/Container";
import { Box, Text } from "src/theme/Theme";

const Login: React.FC = () => {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button variant="transparent" onPress={() => true}>
          <Box flexDirection="row">
            <Text variant="button" color="white">
              Don't have an account?
            </Text>
            <Text marginLeft="s" variant="button" color="primary">
              Sign Up here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );
  return (
    <Container {...{ footer }}>
      <View />
    </Container>
  );
};

export default Login;
