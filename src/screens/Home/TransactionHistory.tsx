import React from "react";
import { ScrollView } from "react-native";
import Graph, { Point } from "src/components/TransactionHistory/Graph";
import Transaction from "src/components/TransactionHistory/Transaction";
import Header from "src/components/UI/Header";
import { Box, Text } from "src/theme/Theme";
import { HomeNavigationProps } from "src/types/navigation";

const minDate = new Date("2020-10-01").getTime();
const maxDate = new Date("2021-04-01").getTime();

const data: Point[] = [
  {
    date: new Date("2020-11-01").getTime(),
    value: 112.2,
    color: "orange",
    id: 221345,
  },
  {
    date: new Date("2021-01-01").getTime(),
    value: 234.5,
    color: "yellow",
    id: 232445,
  },
  {
    date: new Date("2021-03-01").getTime(),
    value: 213.2,
    color: "secondary",
    id: 343323,
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
            <Box backgroundColor="primaryLight" borderRadius="l" padding="s">
              <Text color="primary">All Time</Text>
            </Box>
          </Box>
          <Graph {...{ data, minDate, maxDate }} />
          <ScrollView>
            {data.map((transaction) => (
              <Transaction key={transaction.id} transaction={transaction} />
            ))}
          </ScrollView>
        </Box>
      </Box>
    );
  };

export default TransactionHistory;
