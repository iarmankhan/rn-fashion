import React from "react";
import { RectButton } from "react-native-gesture-handler";
import RoundedIcon, { RoundedIconProps } from "src/components/UI/RoundedIcon";

interface RoundedIconButtonProps extends RoundedIconProps {
  onPress: () => void;
}

const RoundedIconButton: React.FC<RoundedIconButtonProps> = ({
  onPress,
  ...props
}) => {
  return (
    <RectButton
      style={{
        borderRadius: props.size / 2,
        width: props.size,
        height: props.size,
      }}
      {...{ onPress }}
    >
      <RoundedIcon {...props} />
    </RectButton>
  );
};

export default RoundedIconButton;
