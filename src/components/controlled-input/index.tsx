import { Input, TextInputRef } from "@components/input";
import React, { RefObject } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Text, TextInputProps, View } from "react-native";

import { styles } from "./styles";

interface ControlledInputProps<T extends FieldValues> extends TextInputProps {
  control: Control<T>;
  name: Path<T>;
  error?: string;
  ref?: RefObject<TextInputRef | null>;
}

export function ControlledInput<T extends FieldValues>({
  control,
  name,
  error,
  ref,
  ...textInputProps
}: ControlledInputProps<T>) {
  return (
    <View>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            style={[error && styles.inputError]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            ref={ref}
            {...textInputProps}
          />
        )}
      />

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}
