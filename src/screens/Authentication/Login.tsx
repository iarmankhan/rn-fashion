import React from "react";
import SocialLogin from "src/components/Authentication/Login/SocialLogin";
import CheckBox from "src/components/Form/CheckBox";
import Button from "src/components/UI/Button";
import Container from "src/components/UI/Container";
import TextInput from "src/components/Form/TextInput";
import { Box, Text } from "src/theme/Theme";
import { Formik } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});

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

        <Formik
          validationSchema={LoginSchema}
          initialValues={{ email: "", password: "", remember: false }}
          onSubmit={(values) => console.log(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <Box>
              <Box marginBottom="m">
                <TextInput
                  icon="mail"
                  placeholder="Enter your email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  error={errors.email}
                  touched={touched.email}
                />
              </Box>

              <Box marginBottom="m">
                <TextInput
                  icon="lock"
                  placeholder="Enter your password"
                  secureTextEntry
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  error={errors.password}
                  touched={touched.password}
                />
              </Box>

              <Box flexDirection="row" justifyContent="space-between">
                <CheckBox
                  label="Remember me"
                  checked={values.remember}
                  onChange={(v) => setFieldValue("remember", v)}
                />
                <Button onPress={() => true} variant="transparent">
                  <Text color="primary">Forgot Password</Text>
                </Button>
              </Box>

              <Box alignItems="center" marginTop="m">
                <Button
                  onPress={handleSubmit}
                  variant="primary"
                  label="Login"
                />
              </Box>
            </Box>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Login;
