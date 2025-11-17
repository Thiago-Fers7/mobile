import { ReactNode } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleProp,
  TouchableWithoutFeedback,
  ViewStyle,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./styles";

type DefaultLayoutProps = {
  readonly children: ReactNode;
  readonly style?: StyleProp<ViewStyle>;
  readonly layoutStyle?: StyleProp<ViewStyle>;
};

export function DefaultLayout({ children, style, layoutStyle }: DefaultLayoutProps) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={[styles.mainContainer, style]}>
        <KeyboardAvoidingView
          style={[styles.container, layoutStyle]}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
