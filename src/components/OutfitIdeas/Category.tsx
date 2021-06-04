import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Box, Text } from "src/theme/Theme";
import { CategoryItem } from "src/types";
import { BorderlessButton } from "react-native-gesture-handler";

const INNER_RADIUS = 30;
const OUTER_RADIUS = 34;

interface CategoryProps {
  category: CategoryItem;
}

const Category: React.FC<CategoryProps> = ({
  category: { color: backgroundColor, label },
}) => {
  const [selected, setSelected] = useState(false);
  return (
    <BorderlessButton onPress={() => setSelected((prev) => !prev)}>
      <Box marginHorizontal="s" marginTop="s" alignItems="center">
        <Box
          justifyContent="center"
          alignItems="center"
          width={OUTER_RADIUS * 2}
          height={OUTER_RADIUS * 2}
        >
          {selected && (
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                borderRadius: OUTER_RADIUS,
                backgroundColor: "background",
                borderColor: backgroundColor,
                borderWidth: 1,
              }}
            />
          )}
          <View
            style={{
              width: INNER_RADIUS * 2,
              height: INNER_RADIUS * 2,
              borderRadius: INNER_RADIUS,
              backgroundColor,
            }}
          />
        </Box>
        <Text textAlign="center" marginTop="s">
          {label}
        </Text>
      </Box>
    </BorderlessButton>
  );
};

export default Category;
