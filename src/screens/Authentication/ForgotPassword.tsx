import { useFormik } from "formik";
import React from "react";
import { Linking } from "react-native";
import AuthFooter from "src/components/Authentication/AuthFooter";
import TextInput from "src/components/Form/TextInput";
import Button from "src/components/UI/Button";
import Container from "src/components/UI/Container";
import { Box, Text } from "src/theme/Theme";
import { AuthNavigationProps } from "src/types/navigation";
import * as Yup from "yup";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const ForgotPassword: React.FC<AuthNavigationProps<"ForgotPassword">> = ({
  navigation,
}) => {
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      validationSchema: ForgotPasswordSchema,
      initialValues: { email: "" },
      onSubmit: () => navigation.navigate("PasswordChanged"),
    });

  return (
    <Container
      pattern={2}
      footer={
        <AuthFooter
          title="Don't work?"
          onPress={() => Linking.openURL("mailto:help@support.com")}
          action="Try another way"
        />
      }
    >
      <Text variant="title1" textAlign="center" marginBottom="l">
        Forgot Password?
      </Text>
      <Text variant="body" textAlign="center" marginBottom="l">
        Enter the email address associated with your account
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
            returnKeyType="go"
            returnKeyLabel="go"
            onSubmitEditing={() => handleSubmit()}
          />
        </Box>

        <Box alignItems="center" marginTop="m">
          <Button
            onPress={handleSubmit}
            variant="primary"
            label="Reset Password"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
