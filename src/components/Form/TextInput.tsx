import { Feather as Icon } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import theme from "src/theme";
import { Box } from "src/theme/Theme";

interface TextInputProps extends RNTextInputProps {
  icon: string;
  validator: (input: string) => boolean;
}

const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine;

const SIZE = theme.borderRadii.m * 2;

const TextInput: React.FC<TextInputProps> = ({ icon, validator, ...props }) => {
  const [input, setInput] = useState("");
  const [state, setState] = useState<InputState>(Pristine);
  const reColor =
    state === Pristine ? "text" : state === Valid ? "primary" : "danger";
  const color = theme.colors[reColor];

  const onChangeText = (text: string) => {
    setInput(text);
    if (state !== Pristine) {
      validate();
    }
  };

  const validate = () => {
    const valid = validator(input);
    setState(valid);
  };

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
          onBlur={validate}
          {...{ onChangeText }}
          {...props}
        />
      </Box>
      {(state === Valid || state === Invalid) && (
        <Box
          borderRadius="l"
          height={SIZE}
          width={SIZE}
          backgroundColor={state === Valid ? "primary" : "danger"}
          alignItems="center"
          justifyContent="center"
        >
          <Icon
            name={state === Valid ? "check" : "x"}
            size={16}
            color="white"
          />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;
