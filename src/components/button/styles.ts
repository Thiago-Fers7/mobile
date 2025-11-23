import { theme } from "@theme";
import { StyleSheet } from "react-native";

export const labelSizes = StyleSheet.create({
  // Label size variants
  labelsm: {
    fontSize: 12,
  },
  labelmd: {
    fontSize: 14,
  },
  labellg: {
    fontSize: 14,
  },
});

export type ButtonLabelSize = keyof typeof labelSizes;

const buttonSizes = StyleSheet.create({
  // Size variants
  sm: {
    padding: 8,
  },
  md: {
    padding: 12,
  },
  lg: {
    padding: 16,
  },
});

export type ButtonSize = keyof typeof buttonSizes;

export const styles = StyleSheet.create({
  buttonContainer: {
    overflow: "hidden",
    borderRadius: 8,
  },
  button: {
    backgroundColor: theme.colors.primary[500],
    width: "100%",
  },
  buttonActive: {
    opacity: 0.7,
  },
  buttonDisabled: {
    backgroundColor: theme.colors.neutral[400],
  },
  buttonLabel: {
    color: theme.colors.neutral[100],
    textAlign: "center",
  },
  buttonLabelDisabled: {
    color: theme.colors.neutral[300],
  },
  ...buttonSizes,
  ...labelSizes,
});

export const button_ripple_color = theme.colors.primary[800];
