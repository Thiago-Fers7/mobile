import { theme } from "@theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  heading: theme.textVariants.heading,
  body: theme.textVariants.body,
  caption: theme.textVariants.caption,
});

export type Variants = keyof typeof styles;
