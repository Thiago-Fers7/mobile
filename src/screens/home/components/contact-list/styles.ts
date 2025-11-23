import { theme } from "@theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: theme.spacing.s16,
    gap: theme.spacing.s12,
  },
  listItem: {
    padding: theme.spacing.s12,
    height: 60,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: theme.spacing.s8,
  },
  favoriteItem: {
    backgroundColor: "#fdd7000e",
    borderColor: "#fdd700ff",
  },
});
