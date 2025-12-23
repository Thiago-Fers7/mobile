import { theme } from "@theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  contentContainer: {
    padding: 16,
    paddingTop: 0,
    gap: 12,
  },
  cardButton: {
    padding: 12,
    borderWidth: 1,
    borderColor: theme.colors.neutral[300],
    borderRadius: 8,

    display: "flex",
    justifyContent: "center",
  },
  cardButtonActive: {
    backgroundColor: theme.colors.neutral[200],
  },
});
