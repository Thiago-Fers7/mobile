import { theme } from "@theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  categoriesContainer: {
    maxHeight: 40,
    alignSelf: "center",
  },
  categoriesContentContainer: {
    gap: theme.spacing.s8,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryItem: {
    paddingVertical: theme.spacing.s8,
    paddingHorizontal: theme.spacing.s16,
    borderRadius: 20,
    backgroundColor: theme.colors.neutral[300],
  },
});
