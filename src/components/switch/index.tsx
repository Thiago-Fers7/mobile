import { useState } from "react";
import { Switch as NativeSwtich, SwitchProps as NativeSwitchProps } from "react-native";

type SwitchProps = NativeSwitchProps;

export function Switch({ ...rest }: SwitchProps) {
  const [isActive, setIsActive] = useState(false);

  function toggleSwitch() {
    setIsActive((previousState) => !previousState);
  }

  return (
    <NativeSwtich
      value={isActive}
      onValueChange={toggleSwitch}
      thumbColor={isActive ? "blue" : "gray"}
      trackColor={{ false: "#b7b7b7", true: "#7989ff" }}
      ios_backgroundColor={"#b7b7b7"}
      {...rest}
    />
  );
}
