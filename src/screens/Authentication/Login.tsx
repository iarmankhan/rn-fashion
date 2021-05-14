import { useFormik } from "formik";
import React from "react";
import AuthFooter from "src/components/Authentication/AuthFooter";
import CheckBox from "src/components/Form/CheckBox";
import TextInput from "src/components/Form/TextInput";
import Button from "src/components/UI/Button";
import Container from "src/components/UI/Container";
import { Box, Text } from "src/theme/Theme";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});

const Login: React.FC = () => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: { email: "", password: "", remember: false },
    onSubmit: (data) => console.log(data),
  });

  return (
    <Container
      footer={
        <AuthFooter
          title="Don't have an account?"
          onPress={() => true}
          action="Sign up here"
        />
      }
    >
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome Back
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Use your credentials below and login to your account
        </Text>

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
            <Button onPress={handleSubmit} variant="primary" label="Login" />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
