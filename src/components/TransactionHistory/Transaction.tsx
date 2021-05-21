import moment from "moment";
import React from "react";
import { Point } from "src/components/TransactionHistory/Graph";
import { Box, Text } from "src/theme/Theme";

interface TransactionProps {
  transaction: Point;
}

const Transaction: React.FC<TransactionProps> = ({ transaction }) => {
  return (
    <Box
      marginTop="l"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <Box flexDirection="row" alignItems="center" marginBottom="s">
          <Box
            backgroundColor={transaction.color}
            width={10}
            height={10}
            marginRight="s"
            style={{ borderRadius: 5 }}
          />
          <Text variant="title3">{`#${transaction.id}`}</Text>
        </Box>
        <Text color="darkGrey">{`$${transaction.value} - ${moment(
          transaction.date
        ).format("D MMMM, YYYY")}`}</Text>
      </Box>
      <Box>
        <Text color="secondary" variant="button">
          See more
        </Text>
      </Box>
    </Box>
  );
};

export default Transaction;
