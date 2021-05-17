import { Theme } from "src/theme";

// TODO: screen type fix
export interface DrawerItemType {
  icon: string;
  color: keyof Theme["colors"];
  label: string;
  screen: string;
  id: string;
}
