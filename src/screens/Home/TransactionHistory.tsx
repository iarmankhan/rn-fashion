import React from "react";
import { Dimensions, ScrollView } from "react-native";
import Graph, { Point } from "src/components/TransactionHistory/Graph";
import Transaction from "src/components/TransactionHistory/Transaction";
import Header from "src/components/UI/Header";
import { Box, Text } from "src/theme/Theme";
import { HomeNavigationProps } from "src/types/navigation";

import ScrollableContent from "../../components/UI/ScrollableContent";

const startDate = new Date("2020-10-01").getTime();
const numberOfMonths = 6;

const data: Point[] = [
  {
    date: new Date("2020-11-01").getTime(),
    value: 112.2,
    color: "graph1",
    id: 221345,
  },
  {
    date: new Date("2021-01-01").getTime(),
    value: 234.5,
    color: "graph2",
    id: 232445,
  },
  {
    date: new Date("2021-03-01").getTime(),
    value: 213.2,
    color: "secondary",
    id: 343323,
  },
];

const footerHeight = Dimensions.get("window").width / 3;

const TransactionHistory: React.FC<HomeNavigationProps<"TransactionHistory">> =
  ({ navigation }) => {
    return (
      <ScrollableContent>
        <Box flex={1}>
          <Header
            left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
            right={{ icon: "share", onPress: () => true }}
            title="Transaction History"
          />
          <Box padding="m" flex={1}>
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
            <Graph
              data={data}
              numberOfMonths={numberOfMonths}
              startDate={startDate}
            />
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: footerHeight }}
            >
              {data.map((transaction, index) => (
                <Transaction key={index} transaction={transaction} />
              ))}
            </ScrollView>
          </Box>
        </Box>
      </ScrollableContent>
    );
  };

export default TransactionHistory;
