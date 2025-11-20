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
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  layoutStyle?: StyleProp<ViewStyle>;
  touchWithoutFeedback?: boolean;
};

export function DefaultLayout({
  children,
  style,
  layoutStyle,
  touchWithoutFeedback = true,
}: DefaultLayoutProps) {
  const content = (
    <SafeAreaView style={[styles.mainContainer, style]}>
      <KeyboardAvoidingView
        style={[styles.container, layoutStyle]}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );

  if (touchWithoutFeedback) {
    return content;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      {content}
    </TouchableWithoutFeedback>
  );
}
