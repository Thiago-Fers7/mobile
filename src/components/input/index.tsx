import { RefObject, useState } from "react";
import {
  BlurEvent,
  FocusEvent,
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
} from "react-native";

import { styles } from "./styles";

type InputProps = NativeTextInputProps & {
  ref?: RefObject<NativeTextInput | null>;
};

export function Input({ ref, ...props }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  function onFocus(event: FocusEvent) {
    setIsFocused(true);

    props.onFocus?.(event);
  }

  function onBlur(event: BlurEvent) {
    setIsFocused(false);

    props.onBlur?.(event);
  }

  return (
    <NativeTextInput
      ref={ref}
      style={[styles.input, isFocused && styles.inputFocused]}
      placeholderTextColor="#afafafff"
      {...props}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
}
