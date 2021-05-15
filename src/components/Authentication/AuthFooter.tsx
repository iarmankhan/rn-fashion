import React from "react";
import { BorderlessButton } from "react-native-gesture-handler";
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
      <BorderlessButton rippleColor="transparent" onPress={onPress}>
        <Text variant="button" color="white">
          <Text color="white">{`${title} `}</Text>
          <Text variant="button" color="primary">
            {action}
          </Text>
        </Text>
      </BorderlessButton>
    </Box>
  </>
);

export default AuthFooter;
