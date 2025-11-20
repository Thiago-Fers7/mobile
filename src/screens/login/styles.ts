import { theme } from "@theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.s16,
  },
  headerTitle: {
    marginBottom: 20,
    textAlign: "center",
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    gap: 10,
  },
});
