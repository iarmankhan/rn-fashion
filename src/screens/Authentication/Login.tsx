import { useFormik } from "formik";
import React, { useRef } from "react";
import { TextInput as RNTextInput } from "react-native";
import AuthFooter from "src/components/Authentication/AuthFooter";
import CheckBox from "src/components/Form/CheckBox";
import TextInput from "src/components/Form/TextInput";
import Button from "src/components/UI/Button";
import Container from "src/components/UI/Container";
import LinkButton from "src/components/UI/LinkButton";
import { Box, Text } from "src/theme/Theme";
import { AuthNavigationProps } from "src/types/navigation";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});

const Login: React.FC<AuthNavigationProps<"Login">> = ({ navigation }) => {
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
    onSubmit: () => navigation.navigate("Home"),
  });
  const password = useRef<RNTextInput>(null);

  return (
    <Container
      pattern={0}
      footer={
        <AuthFooter
          title="Don't have an account?"
          onPress={() => navigation.navigate("SignUp")}
          action="Sign up here"
        />
      }
    >
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
            autoCompleteType="email"
            autoCapitalize={"none"}
            returnKeyType="next"
            returnKeyLabel="next"
            onSubmitEditing={() => password.current?.focus()}
          />
        </Box>

        <Box marginBottom="m">
          <TextInput
            ref={password}
            icon="lock"
            placeholder="Enter your password"
            secureTextEntry
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            error={errors.password}
            touched={touched.password}
            autoCompleteType="password"
            autoCapitalize="none"
            returnKeyType="done"
            returnKeyLabel="go"
            onSubmitEditing={() => handleSubmit()}
          />
        </Box>

        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <CheckBox
            label="Remember me"
            checked={values.remember}
            onChange={(v) => setFieldValue("remember", v)}
          />
          <LinkButton
            onPress={() => navigation.navigate("ForgotPassword")}
            label="Forgot Password"
            color="primary"
          />
        </Box>

        <Box alignItems="center" marginTop="l">
          <Button
            onPress={handleSubmit}
            variant="primary"
            label="Log into your account"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
