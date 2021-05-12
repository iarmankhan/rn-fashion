import React from "react";
import { View } from "react-native";
import SocialLogin from "src/components/Authentication/Login/SocialLogin";
import Container from "src/components/UI/Container";

const Login: React.FC = () => {
  return (
    <Container footer={<SocialLogin />}>
      <View />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Login;
