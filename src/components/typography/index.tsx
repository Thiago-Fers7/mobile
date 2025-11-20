import { ReactNode } from "react";
import { Text, TextProps } from "react-native";

import { styles, Variants } from "./styles";

type TypographyProps = {
  variant: Variants;
  children: ReactNode;
  style?: TextProps["style"];
};

export function Typography({ variant, children, style }: TypographyProps) {
  const combinedStyle = [styles[variant], style];

  return <Text style={combinedStyle}>{children}</Text>;
}
