import React from "react";
import SocialLogin from "src/components/Authentication/Login/SocialLogin";
import CheckBox from "src/components/Form/CheckBox";
import Button from "src/components/UI/Button";
import Container from "src/components/UI/Container";
import TextInput from "src/components/Form/TextInput";
import { Box, Text } from "src/theme/Theme";

const emailValidator = (email: string) =>
  // eslint-disable-next-line max-len
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

const passwordValidator = (password: string) => password.length >= 6;

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
        <Text variant="body" textAlign="center" marginBottom="l">
          Use your credentials below and login to your account
        </Text>
        <Box marginBottom="m">
          <TextInput
            icon="mail"
            placeholder="Enter your email"
            validator={emailValidator}
          />
        </Box>

        <Box marginBottom="m">
          <TextInput
            icon="lock"
            placeholder="Enter your password"
            validator={passwordValidator}
            secureTextEntry
          />
        </Box>

        <Box flexDirection="row" justifyContent="space-between">
          <CheckBox label="Remember me" />
          <Button onPress={() => true} variant="transparent">
            <Text color="primary">Forgot Password</Text>
          </Button>
        </Box>

        <Box alignItems="center" marginTop="m">
          <Button onPress={() => true} variant="primary" label="Login" />
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
