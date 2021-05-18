import React from "react";
import Graph, { Point } from "src/components/TransactionHistory/Graph";
import Header from "src/components/UI/Header";
import { Box, Text } from "src/theme/Theme";
import { HomeNavigationProps } from "src/types/navigation";

const data: Point[] = [
  {
    date: new Date("2020-09-01").getTime(),
    value: 0,
    color: "primary",
  },
  {
    date: new Date("2020-11-01").getTime(),
    value: 112.2,
    color: "orange",
  },
  {
    date: new Date("2020-12-01").getTime(),
    value: 0,
    color: "violet",
  },
  {
    date: new Date("2021-01-01").getTime(),
    value: 234.5,
    color: "yellow",
  },
  {
    date: new Date("2021-02-01").getTime(),
    value: 0,
    color: "lightBlue",
  },
  {
    date: new Date("2021-03-01").getTime(),
    value: 213.2,
    color: "secondary",
  },
  {
    date: new Date("2021-04-01").getTime(),
    value: 0,
    color: "primaryLight",
  },
];

const TransactionHistory: React.FC<HomeNavigationProps<"TransactionHistory">> =
  ({ navigation }) => {
    return (
      <Box flex={1}>
        <Header
          left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
          right={{ icon: "share", onPress: () => true }}
          title="Transaction History"
        />
        <Box padding="m">
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Box>
              <Text
                variant="header"
                color="secondary"
                opacity={0.3}
                textTransform="uppercase"
              >
                Total Spent
              </Text>
              <Text variant="title1">$122,19</Text>
            </Box>
            <Box backgroundColor="primaryLight" borderRadius="m" padding="s">
              <Text color="primary">All Time</Text>
            </Box>
          </Box>
          <Graph {...{ data }} />
        </Box>
      </Box>
    );
  };

export default TransactionHistory;
