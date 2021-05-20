import React from "react";
import { Point } from "src/components/TransactionHistory/Graph";
import { Box, Text } from "src/theme/Theme";

interface TransactionProps {
  transaction: Point;
}

const Transaction: React.FC<TransactionProps> = ({ transaction }) => {
  return (
    <Box>
      <Box>
        <Box flexDirection="row" alignItems="center">
          <Box
            backgroundColor={transaction.color}
            width={10}
            height={10}
            marginRight="s"
            style={{ borderRadius: 5 }}
          />
          <Text variant="title3">{`#${transaction.id}`}</Text>
        </Box>
        <Text>{`$${transaction.value} - ${new Date(
          transaction.date
        ).toLocaleDateString()}`}</Text>
      </Box>
      <Box>
        <Text color="secondary">See more</Text>
      </Box>
    </Box>
  );
};

export default Transaction;
