import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Button from "src/components/UI/Button";
import { Box } from "src/theme/Theme";

interface FooterProps {
  label: string;
  onPress: () => void;
}

const Footer: React.FC<FooterProps> = ({ label, onPress }) => {
  const insets = useSafeAreaInsets();
  return (
    <Box backgroundColor="secondary" padding="l" borderTopLeftRadius="xl">
      <Box alignItems="center" style={{ paddingBottom: insets.bottom }}>
        <Button variant="primary" {...{ label, onPress }} />
      </Box>
    </Box>
  );
};

export default Footer;
