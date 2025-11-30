import { theme } from "@theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  iconButton: {
    height: 36,
    width: 36,
    borderRadius: 10234,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    gap: theme.spacing.s16,
    padding: theme.spacing.s16,
    paddingBottom: theme.spacing.s32,
  },
});
