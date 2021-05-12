import React from "react";
import Apple from "src/components/svgs/Apple";
import Facebook from "src/components/svgs/Facebook";
import Google from "src/components/svgs/Google";
import theme from "src/theme";
import { Box } from "src/theme/Theme";

const SIZE = theme.borderRadii.l * 2;

const SocialIcon = ({ children }: { children: React.ReactNode }) => (
  <Box
    backgroundColor="white"
    width={SIZE}
    height={SIZE}
    borderRadius="l"
    justifyContent="center"
    alignItems="center"
  >
    {children}
  </Box>
);

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
