import React from "react";
import { StyleSheet } from "react-native";
import { useTheme } from "src/theme";
import { Box, Text } from "src/theme/Theme";
import { lerp } from "src/utils/linearInterpolation";

interface UnderlayProps {
  dates: number[];
  minY: number;
  maxY: number;
  step: number;
}

const formatter = Intl.DateTimeFormat("en", { month: "short" });

const ROW_HEIGHT = 16;
export const MARGIN = "xl";

const Underlay: React.FC<UnderlayProps> = ({ dates, step, minY, maxY }) => {
  const theme = useTheme();
  return (
    <Box style={StyleSheet.absoluteFill}>
      <Box flex={1} justifyContent="space-between">
        {[1, 0.66, 0.33, 0].map((t) => (
          <Box
            key={t}
            flexDirection="row"
            alignItems="center"
            height={ROW_HEIGHT}
            style={{
              // eslint-disable-next-line no-nested-ternary
              top: t === 0 ? ROW_HEIGHT / 2 : t === 1 ? -ROW_HEIGHT / 2 : 0,
            }}
          >
            <Box width={theme.spacing[MARGIN]} paddingRight="s">
              <Text color="darkGrey" textAlign="right">
                {Math.round(lerp(minY, maxY, t))}
              </Text>
            </Box>
            <Box zIndex={0} flex={1} height={1} backgroundColor="grey" />
          </Box>
        ))}
      </Box>
      <Box
        marginLeft={MARGIN}
        height={theme.spacing[MARGIN]}
        flexDirection="row"
        alignItems="center"
      >
        {dates.map((date, index) => (
          <Box width={step}>
            <Text key={index} color="darkGrey" textAlign="center">
              {formatter.format(date)}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Underlay;
