import React, { useState } from "react";
import Button from "src/components/UI/Button";
import { Box } from "src/theme/Theme";

interface CheckboxGroupProps {
  options: { value: string; label: string }[];
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ options }) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  return (
    <Box flexDirection="row" flexWrap="wrap">
      {options.map(({ label, value }) => {
        const index = selectedValues.indexOf(value);
        const isSelected = index !== -1;
        return (
          <Button
            key={value}
            variant={isSelected ? "primary" : "default"}
            label={label}
            onPress={() => {
              if (isSelected) {
                setSelectedValues((prevValues) => prevValues.splice(index, 1));
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
