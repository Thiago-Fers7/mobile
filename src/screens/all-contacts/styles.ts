import { theme } from "@theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: theme.spacing.s16,
  },
  itemSeparator: {
    height: 1,
    backgroundColor: theme.colors.neutral[300],
    marginVertical: theme.spacing.s12,
  },
});
