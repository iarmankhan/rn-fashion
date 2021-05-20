import moment from "moment";
import React from "react";
import { StyleSheet } from "react-native";
import { useTheme } from "src/theme";
import { Box, Text } from "src/theme/Theme";
import { lerp } from "src/utils/linearInterpolation";

interface UnderlayProps {
  minY: number;
  maxY: number;
  step: number;
  startDate: number;
  numberOfMonths: number;
}

const ROW_HEIGHT = 16;
export const MARGIN = "xl";

const Underlay: React.FC<UnderlayProps> = ({
  step,
  minY,
  maxY,
  startDate,
  numberOfMonths,
}) => {
  const theme = useTheme();
  const minDate = moment(startDate);
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
        {new Array(numberOfMonths)
          .fill(0)
          .map((_, i) => moment(minDate.clone().add(i, "month")))
          .map((date, index) => (
            <Box key={index} width={step}>
              <Text color="darkGrey" textAlign="center">
                {moment(date).format("MMM")}
              </Text>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default Underlay;
