import { ReactNode } from "react";
import { Pressable, PressableProps, Text, View, ViewProps } from "react-native";

import { button_ripple_color, ButtonLabelSize, ButtonSize, labelSizes, styles } from "./styles";

type ButtonProps = PressableProps & {
  children: ReactNode;
  disabled?: boolean;
  size?: ButtonSize;
  containerStyle?: ViewProps["style"];
};

export function Button({
  children,
  disabled = false,
  size = "md",
  containerStyle,
  ...props
}: ButtonProps) {
  const sizeStyle = styles[size];
  const fontSizeStyle = labelSizes[`label${size}` as ButtonLabelSize];

  return (
    <View style={[styles.buttonContainer, containerStyle]}>
      <Pressable
        disabled={disabled}
        android_ripple={{ color: button_ripple_color }}
        {...props}
        style={(state) => [
          styles.button,
          state.pressed && styles.buttonActive,
          disabled && styles.buttonDisabled,
          sizeStyle,
          typeof props.style === "function" ? props.style(state) : props.style,
        ]}
      >
        <Text style={[styles.buttonLabel, disabled && styles.buttonLabelDisabled, fontSizeStyle]}>
          {children}
        </Text>
      </Pressable>
    </View>
  );
}
