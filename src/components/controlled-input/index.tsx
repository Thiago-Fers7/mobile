import { Input } from "@components/input";
import React from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Text, TextInputProps, View } from "react-native";

import { styles } from "./styles";

interface ControlledInputProps<T extends FieldValues> extends TextInputProps {
  control: Control<T>;
  name: Path<T>; // Garante que o nome seja uma chave válida do schema
  error?: string;
}

export function ControlledInput<T extends FieldValues>({
  control,
  name,
  error,
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
            onBlur={(e) => {
              console.log("onBlur called");
              onBlur();
            }}
            value={value}
            {...textInputProps}
          />
        )}
      />

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}
