import { Feather as Icon } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import theme from "src/theme";
import { Box } from "src/theme/Theme";

interface TextInputProps extends RNTextInputProps {
  icon: string;
  touched?: boolean;
  error?: string;
}

const SIZE = theme.borderRadii.m * 2;

const TextInput: React.FC<TextInputProps> = ({
  icon,
  touched,
  error,
  ...props
}) => {
  const reColor = touched ? "text" : error ? "danger" : "primary";
  const color = theme.colors[reColor];

  return (
    <Box
      flexDirection="row"
      height={48}
      alignItems="center"
      borderRadius="s"
      borderColor={reColor}
      borderWidth={StyleSheet.hairlineWidth}
      paddingHorizontal="s"
    >
      <Box padding="s">
        <Icon name={icon as never} size={16} {...{ color }} />
      </Box>
      <Box flex={1}>
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholderTextColor={color}
          {...props}
        />
      </Box>
      {touched && (
        <Box
          borderRadius="l"
          height={SIZE}
          width={SIZE}
          backgroundColor={!error ? "primary" : "danger"}
          alignItems="center"
          justifyContent="center"
        >
          <Icon name={!error ? "check" : "x"} size={16} color="white" />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;
