import React from "react";
import { ScrollView, View } from "react-native";
import Category from "src/components/OutfitIdeas/Category";
import { CategoryItem } from "src/types";

const categories: CategoryItem[] = [
  {
    id: "new_in",
    label: "New In",
    color: "#FFE8E9",
  },
  {
    id: "summer",
    label: "Summer",
    color: "#F1E0FF",
  },
  {
    id: "active_wear",
    label: "Active Wear",
    color: "#BFEAF5",
  },
  {
    id: "outlet",
    label: "Outlet",
    color: "#F1E0FF",
  },
  {
    id: "accessories",
    label: "Accessories",
    color: "#FFE8E9",
  },
];

const Categories: React.FC = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category) => (
          <Category key={category.id} {...{ category }} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
