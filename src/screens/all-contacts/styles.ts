import { theme } from "@theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: theme.spacing.s16,
    gap: theme.spacing.s12,
  },
  cardButton: {
    padding: theme.spacing.s12,
    height: 60,
    borderWidth: 1,
    borderColor: theme.colors.neutral[300],
    borderRadius: 8,

    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardButtonActive: {
    backgroundColor: theme.colors.neutral[200],
  },
  toggleFavoriteButtonActive: {
    opacity: 0.6,
  },
});
