import { ReactNode } from "react";
import { Pressable, PressableProps, Text, View } from "react-native";

import { button_ripple_color, styles } from "./styles";

type ButtonProps = PressableProps & {
  children: ReactNode;
  disabled?: boolean;
};

export function Button({ children, disabled = false, ...props }: ButtonProps) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        disabled={disabled}
        android_ripple={{ color: button_ripple_color }}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonActive,
          disabled && styles.buttonDisabled,
        ]}
        {...props}
      >
        <Text style={[styles.buttonLabel, disabled && styles.buttonLabelDisabled]}>{children}</Text>
      </Pressable>
    </View>
  );
}
