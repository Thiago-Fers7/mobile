import { theme } from "@theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
    padding: theme.spacing.s16,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "auto",
    gap: theme.spacing.s12,
    paddingHorizontal: theme.spacing.s16,
    borderTopWidth: 1,
    borderTopColor: theme.colors.neutral[300],
    paddingVertical: theme.spacing.s16,
  },
  lateralButton: {
    flex: 1,
    width: "100%",
  },
  centralButton: {
    borderRadius: 9999,
    height: 56,
    width: 56,
    padding: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
