import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

const Apple = () => {
  return (
    <Svg viewBox="0 0 13.802 13.802" width={20} height={20}>
      <G fill="#030104">
        <Path d="M10.668 7.333c-.018-1.749 1.426-2.586 1.49-2.628-.811-1.185-2.073-1.348-2.524-1.366-1.073-.11-2.096.632-2.642.632-.544 0-1.386-.617-2.277-.601-1.172.018-2.251.682-2.855 1.73-1.217 2.112-.312 5.24.874 6.955.58.838 1.272 1.779 2.179 1.746.874-.035 1.204-.566 2.261-.566s1.354.566 2.278.549c.941-.018 1.536-.855 2.111-1.695.666-.973.94-1.916.957-1.963-.022-.012-1.833-.705-1.852-2.793zM8.93 2.204c.481-.583.807-1.395.718-2.204-.695.028-1.534.461-2.033 1.045-.447.517-.836 1.342-.732 2.135.774.061 1.566-.394 2.047-.976z" />
      </G>
    </Svg>
  );
};

export default Apple;