import { Typography } from "@components/typography";
import { useGetCategories } from "@hooks/queries/categories/useGetCategories";
import { useEffect, useState } from "react";
import { Pressable, ScrollView } from "react-native";

import { styles } from "./styles";

const LENGTH_SKELETON_CATEGORIES = 5;

type CategoriesProps = {
  onChange?: (selectedCategories: string[] | null) => void;
};

export function Categories({ onChange }: CategoriesProps) {
  const { data: categories, isFetching } = useGetCategories();

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

  const hasCategories = categories && categories.length > 0;
  const skeletonCategories = Array.from({ length: LENGTH_SKELETON_CATEGORIES }).fill(null);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.categoriesContainer}
      contentContainerStyle={styles.categoriesContentContainer}
      alwaysBounceHorizontal={false}
    >
      {isFetching &&
        skeletonCategories.map((_, index) => (
          <ScrollView key={index} style={styles.skeletonCategoryItem} />
        ))}

      {hasCategories &&
        categories.map((category) => (
          <Pressable
            key={category.id}
            onPress={() => handleSelectCategory(category.id)}
            style={[
              styles.categoryItem,
              isCategorySelected(category.id) && { backgroundColor: category.color + "50" },
            ]}
          >
            <Typography variant="body">{category.name}</Typography>
          </Pressable>
        ))}
    </ScrollView>
  );
}
