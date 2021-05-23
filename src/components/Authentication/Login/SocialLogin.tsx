import React from "react";
import { TouchableOpacity } from "react-native";
import Apple from "src/components/svgs/Apple";
import Facebook from "src/components/svgs/Facebook";
import Google from "src/components/svgs/Google";
import { useTheme } from "src/theme";
import { Box } from "src/theme/Theme";

const SocialIcon = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  const SIZE = theme.borderRadii.l * 2;
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <Box
        backgroundColor="background"
        width={SIZE}
        height={SIZE}
        borderRadius="l"
        justifyContent="center"
        alignItems="center"
        marginHorizontal="s"
      >
        {children}
      </Box>
    </TouchableOpacity>
  );
};

const SocialLogin: React.FC = () => {
  return (
    <Box flexDirection="row" justifyContent="center">
      <SocialIcon>
        <Facebook />
      </SocialIcon>
      <SocialIcon>
        <Google />
      </SocialIcon>
      <SocialIcon>
        <Apple />
      </SocialIcon>
    </Box>
  );
};

export default SocialLogin;
