import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import SocialLogin from "src/components/Authentication/Login/SocialLogin";
import { Box, Text } from "src/theme/Theme";

interface AuthFooterProps {
  title: string;
  onPress: () => void;
  action: string;
}

const AuthFooter: React.FC<AuthFooterProps> = ({ action, onPress, title }) => (
  <>
    <SocialLogin />
    <Box alignItems="center" marginTop="m">
      <TouchableWithoutFeedback onPress={onPress}>
        <Text variant="button" color="white">
          <Text color="white">{`${title} `}</Text>
          <Text variant="button" color="primary">
            {action}
          </Text>
        </Text>
      </TouchableWithoutFeedback>
    </Box>
  </>
);

export default AuthFooter;
