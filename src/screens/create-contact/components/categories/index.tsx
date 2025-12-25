import { Typography } from "@components/typography";
import { useEffect, useState } from "react";
import { Pressable, ScrollView } from "react-native";

import { styles } from "./styles";

const categories = [
  { label: "Pessoal", value: "personal", color: "#ffae00" },
  { label: "Família", value: "family", color: "#ff00e6" },
  { label: "Amigos", value: "friends", color: "#0f5ab4" },
  { label: "Trabalho", value: "work", color: "#ff5900" },
  { label: "Outros", value: "others", color: "#1a8d16" },
];

type CategoriesProps = {
  onChange?: (selectedCategories: string[] | null) => void;
};

export function Categories({ onChange }: CategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string[] | null>(null);

  function handleSelectCategory(categoryValue: string) {
    setSelectedCategory((prevState) => {
      const cat = prevState ? [...prevState] : [];

      if (cat.includes(categoryValue)) {
        return cat.filter((item) => item !== categoryValue);
      }

      return [...cat, categoryValue];
    });
  }

  function isCategorySelected(categoryValue: string) {
    return selectedCategory?.includes(categoryValue);
  }

  useEffect(() => {
    onChange?.(selectedCategory);
  }, [onChange, selectedCategory]);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.categoriesContainer}
      contentContainerStyle={styles.categoriesContentContainer}
      alwaysBounceHorizontal={false}
    >
      {categories.map((category) => (
        <Pressable
          key={category.value}
          onPress={() => handleSelectCategory(category.value)}
          style={[
            styles.categoryItem,
            isCategorySelected(category.value) && { backgroundColor: category.color + "50" },
          ]}
        >
          <Typography variant="body">{category.label}</Typography>
        </Pressable>
      ))}
    </ScrollView>
  );
}
