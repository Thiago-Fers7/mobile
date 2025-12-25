import { theme } from "@theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.s16,
  },
  formContainer: {
    gap: theme.spacing.s24,
    flex: 1,
  },
  photoContainer: {
    alignSelf: "center",
  },
  inputItem: {
    gap: theme.spacing.s4,
  },
  doubleInputContainer: {
    flexDirection: "row",
    gap: theme.spacing.s16,
    justifyContent: "space-between",
  },
  doubleInputItem: {
    flex: 1,
    gap: theme.spacing.s4,
  },
});
