import { Theme } from "src/theme";

export interface DrawerItemType {
  icon: string;
  color: keyof Theme["colors"];
  label: string;
  screen: string;
  id: string;
}
