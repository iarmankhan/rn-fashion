import React from "react";
import BorderlessTap from "src/components/UI/BorderlessTap";
import RoundedIcon, { RoundedIconProps } from "src/components/UI/RoundedIcon";

interface RoundedIconButtonProps extends RoundedIconProps {
  onPress: () => void;
}

const RoundedIconButton: React.FC<RoundedIconButtonProps> = ({
  onPress,
  ...props
}) => {
  return (
    <BorderlessTap
      style={{
        borderRadius: props.size / 2,
        width: props.size,
        height: props.size,
      }}
      {...{ onPress }}
    >
      <RoundedIcon {...props} />
    </BorderlessTap>
  );
};

export default RoundedIconButton;
