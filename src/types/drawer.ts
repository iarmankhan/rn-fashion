import { useNavigation } from "@react-navigation/native";
import { Theme } from "src/theme";
import { HomeRoutes } from "src/types/navigation";

export interface BaseDrawerItem {
  icon: string;
  color: keyof Theme["colors"];
  label: string;
  id: string;
}

export interface ScreenDrawerItem extends BaseDrawerItem {
  screen: keyof HomeRoutes;
}
export interface OnPressDrawerItem extends BaseDrawerItem {
  onPress: (navigation: ReturnType<typeof useNavigation>) => void;
}

export type DrawerItemType = ScreenDrawerItem | OnPressDrawerItem;
