import { ReactNode } from "react";
import { Pressable, PressableProps, Text, View, ViewProps } from "react-native";

import {
  button_ripple_color,
  ButtonLabelSize,
  ButtonSize,
  ButtonVariant,
  buttonVariants,
  labelColors,
  labelSizes,
  styles,
} from "./styles";

type ButtonProps = PressableProps & {
  children: ReactNode;
  disabled?: boolean;
  size?: ButtonSize;
  containerStyle?: ViewProps["style"];
  variant?: ButtonVariant;
};

export function Button({
  children,
  disabled = false,
  size = "md",
  variant = "primary",
  containerStyle,
  ...props
}: ButtonProps) {
  const sizeStyle = styles[size];
  const fontSizeStyle = labelSizes[`label${size}` as ButtonLabelSize];
  const variantStyle = buttonVariants[variant];
  const labelColorStyle = labelColors[variant];

  const isStringChild = typeof children === "string";

  return (
    <View style={[styles.buttonContainer, containerStyle]}>
      <Pressable
        disabled={disabled}
        android_ripple={{ color: button_ripple_color }}
        {...props}
        style={(state) => [
          styles.button,
          variantStyle,
          state.pressed && styles.buttonActive,
          disabled && styles.buttonDisabled,
          sizeStyle,
          typeof props.style === "function" ? props.style(state) : props.style,
        ]}
      >
        {isStringChild && (
          <Text
            style={[
              styles.buttonLabel,
              disabled && styles.buttonLabelDisabled,
              fontSizeStyle,
              labelColorStyle,
            ]}
          >
            {children}
          </Text>
        )}

        {!isStringChild && children}
      </Pressable>
    </View>
  );
}
