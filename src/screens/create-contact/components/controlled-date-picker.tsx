import { ControlledInput } from "@components/controlled-input";
import { TextInputRef } from "@components/input";
import { useRef, useState } from "react";
import { Control, Controller } from "react-hook-form";
import NativeDatePicker from "react-native-date-picker";

import { CreateContactFormData } from "..";

type DatePickerProps = {
  control: Control<CreateContactFormData>;
  errorMessage?: string;
};

export function ControlledDatePicker({ control, errorMessage }: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<TextInputRef>(null);

  function handleOpen() {
    setOpen(true);
  }

  return (
    <Controller
      control={control}
      name="dateOfBirth"
      render={({ field: { onChange, value } }) => (
        <>
          <ControlledInput
            control={control}
            name="dateOfBirth"
            error={errorMessage}
            value={value ? value.toLocaleDateString() : ""}
            placeholder="Selecione"
            onKeyPress={() => {}}
            onFocus={() => {
              handleOpen();
              inputRef.current?.blur();
            }}
            showSoftInputOnFocus={false}
            ref={inputRef}
          />

          <NativeDatePicker
            modal
            open={open}
            date={value || new Date()}
            mode="date"
            title="Data de nascimento"
            confirmText="Confirmar"
            cancelText="Cancelar"
            onConfirm={(date) => {
              onChange(date);
              setOpen(false);
            }}
            onCancel={() => {
              setOpen(false);
            }}
            locale="pt-BR"
          />
        </>
      )}
    />
  );
}
