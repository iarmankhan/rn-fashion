import React from "react";

import { Box } from "../../theme/Theme";
import { palette } from "../../theme";

const CartItem: React.FC = () => {
  return (
    <Box padding="m" flexDirection="row">
      <Box
        width={120}
        height={120}
        borderRadius="m"
        style={{ backgroundColor: palette.yellow }}
      />
    </Box>
  );
};
export default CartItem;
