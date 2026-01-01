import { theme } from "@theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardButton: {
    padding: theme.spacing.s12,
    height: 80,

    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardButtonActive: {
    backgroundColor: theme.colors.neutral[200],
  },
  contactInfoContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.s12,
  },
  contactInfo: {
    flex: 1,
    justifyContent: "center",
    gap: theme.spacing.s4,
  },
  categoriesContentContainer: {
    flexDirection: "row",
    gap: theme.spacing.s8,
    alignItems: "center",
    overflow: "hidden",
  },
  categoryItem: {
    paddingVertical: theme.spacing.s4,
    paddingHorizontal: theme.spacing.s8,
    borderRadius: 20,
    backgroundColor: theme.colors.neutral[300],
  },
  categoryText: {
    color: theme.colors.neutral[800],
    fontSize: 10,
  },
  toggleFavoriteButtonActive: {
    opacity: 0.6,
  },
});
