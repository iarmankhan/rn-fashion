import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { useTheme } from "src/theme";
import { Box, Text } from "src/theme/Theme";

interface RoundedCheckboxGroupProps {
  options: { value: string }[];
  valueIsColor?: boolean;
}

const RoundedCheckboxGroup: React.FC<RoundedCheckboxGroupProps> = ({
  options,
  valueIsColor,
}) => {
  const theme = useTheme();
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  return (
    <Box flexDirection="row" flexWrap="wrap" marginTop="s">
      {options.map(({ value }) => {
        const index = selectedValues.indexOf(value);
        const isSelected = index !== -1;

        const backgroundColor = isSelected
          ? theme.colors.primary
          : theme.colors.background2;
        return (
          <BorderlessButton
            key={value}
            onPress={() => {
              if (isSelected) {
                setSelectedValues((prevValues) =>
                  prevValues.filter((v) => v !== value)
                );
              } else {
                setSelectedValues((prevValues) => [...prevValues, value]);
              }
            }}
            style={{
              marginBottom: theme.spacing.m,
              marginRight: theme.spacing.s,
            }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                justifyContent: "center",
                alignItems: "center",

                borderWidth: valueIsColor && isSelected ? 1 : 0,
                borderColor: valueIsColor && isSelected ? value : "",
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: !valueIsColor ? backgroundColor : value,

                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {!valueIsColor && (
                  <Text
                    textAlign="center"
                    variant="header"
                    color={isSelected ? "background" : "secondary"}
                  >
                    {value.toUpperCase()}
                  </Text>
                )}
                {valueIsColor && isSelected && (
                  <Feather color="white" size={16} name="check" />
                )}
              </View>
            </View>
          </BorderlessButton>
        );
      })}
    </Box>
  );
};

export default RoundedCheckboxGroup;
