import { theme } from "@theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: theme.spacing.s16,
    gap: theme.spacing.s12,
  },
  listItem: {
    padding: theme.spacing.s12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: theme.spacing.s8,
  },
});
