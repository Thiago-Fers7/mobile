import React, { RefObject, useState } from "react";
import {
  BlurEvent,
  FocusEvent,
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
} from "react-native";
import MaskInput, { Mask } from "react-native-mask-input";

import { styles } from "./styles";

export type TextInputRef = NativeTextInput;

type InputProps = NativeTextInputProps & {
  ref?: RefObject<TextInputRef | null>;
  mask?: Mask;
};

export function Input({ ref, mask, ...props }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  function onFocus(event: FocusEvent) {
    setIsFocused(true);
    props.onFocus?.(event);
  }

  function onBlur(event: BlurEvent) {
    setIsFocused(false);
    props.onBlur?.(event);
  }

  const inputStyle = [styles.input, isFocused && styles.inputFocused, props.style];

  if (mask) {
    return (
      <MaskInput
        ref={ref}
        mask={mask}
        placeholderTextColor="#afafafff"
        {...props}
        style={inputStyle}
        onFocus={onFocus}
        onBlur={onBlur}
        onChangeText={(masked) => {
          props.onChangeText?.(masked);
        }}
      />
    );
  }

  return (
    <NativeTextInput
      ref={ref}
      placeholderTextColor="#afafafff"
      {...props}
      style={inputStyle}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
}
