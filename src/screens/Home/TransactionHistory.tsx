import React from "react";
import Header from "src/components/UI/Header";
import { Box, Text } from "src/theme/Theme";
import { HomeNavigationProps } from "src/types/navigation";

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
        </Box>
      </Box>
    );
  };

export default TransactionHistory;
