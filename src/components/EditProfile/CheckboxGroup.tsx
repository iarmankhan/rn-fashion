import React, { useState } from "react";
import Button from "src/components/UI/Button";
import { useTheme } from "src/theme";
import { Box } from "src/theme/Theme";

interface CheckboxGroupProps {
  options: { value: string; label: string }[];
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ options }) => {
  const theme = useTheme();
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  return (
    <Box flexDirection="row" flexWrap="wrap" marginTop="s">
      {options.map(({ label, value }) => {
        const index = selectedValues.indexOf(value);
        const isSelected = index !== -1;
        return (
          <Button
            key={value}
            style={{
              width: "auto",
              height: "auto",
              paddingHorizontal: theme.spacing.m,
              paddingVertical: theme.spacing.s,
              marginBottom: theme.spacing.m,
              marginRight: theme.spacing.s,
            }}
            variant={isSelected ? "primary" : "default"}
            label={label}
            onPress={() => {
              if (isSelected) {
                setSelectedValues((prevValues) =>
                  prevValues.filter((v) => v !== value)
                );
              } else {
                setSelectedValues((prevValues) => [...prevValues, value]);
              }
            }}
          />
        );
      })}
    </Box>
  );
};

export default CheckboxGroup;
