import React from "react";
import SocialLogin from "src/components/Authentication/Login/SocialLogin";
import Button from "src/components/UI/Button";
import Container from "src/components/UI/Container";
import TextInput from "src/components/Form/TextInput";
import { Box, Text } from "src/theme/Theme";

const emailValidator = (email: string) =>
  // eslint-disable-next-line max-len
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

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
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome Back
        </Text>
        <Text variant="body" textAlign="center">
          Use your credentials below and login to your account
        </Text>
        <TextInput
          icon="mail"
          placeholder="Enter your email"
          validator={emailValidator}
        />
      </Box>
    </Container>
  );
};

export default Login;
