import React from "react";
import RoundedIcon, { RoundedIconProps } from "src/components/UI/RoundedIcon";
import { BorderlessButton } from "react-native-gesture-handler";

interface RoundedIconButtonProps extends RoundedIconProps {
  onPress: () => void;
}

const RoundedIconButton: React.FC<RoundedIconButtonProps> = ({
  onPress,
  ...props
}) => {
  return (
    <BorderlessButton
      style={{
        borderRadius: props.size / 2,
        width: props.size,
        height: props.size,
      }}
      {...{ onPress }}
    >
      <RoundedIcon {...props} />
    </BorderlessButton>
  );
};

export default RoundedIconButton;
