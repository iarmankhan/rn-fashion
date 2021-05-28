import React, { useState } from "react";
import Button from "src/components/UI/Button";
import { Box } from "src/theme/Theme";

interface CheckboxGroupProps {
  options: { value: string; label: string }[];
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ options }) => {
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
              paddingHorizontal: 16,
              paddingVertical: 8,
              marginVertical: 4,
              marginRight: 4,
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
