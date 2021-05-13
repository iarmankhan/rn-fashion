import React, { useState } from "react";
import theme from "src/theme";
import { Box } from "src/theme/Theme";
import { Feather as Icon } from "@expo/vector-icons";
import { TextInput as RNTextInput } from "react-native";

interface TextInputProps {
  placeholder: string;
  icon: string;
  validator: (input: string) => boolean;
}

const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine;

const SIZE = theme.borderRadii.m * 2;

const TextInput: React.FC<TextInputProps> = ({ icon, placeholder }) => {
  const [state, setState] = useState<InputState>(Pristine);
  const reColor =
    state === Pristine ? "darkGray" : state === Valid ? "primary" : "danger";
  const color = theme.colors[reColor];
  return (
    <Box
      flexDirection="row"
      height={48}
      alignItems="center"
      borderRadius="s"
      borderColor={reColor}
      borderWidth={1}
    >
      <Box padding="s">
        <Icon name={icon as never} size={16} {...{ color }} />
      </Box>
      <RNTextInput
        underlineColorAndroid="transparent"
        placeholderTextColor={color}
        {...{ placeholder }}
      />
      {(state === Valid || state === Invalid) && (
        <Box borderRadius="m" height={SIZE} width={SIZE}>
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
