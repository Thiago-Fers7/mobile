import { SyncBar } from "@components/sync-bar";
import { useNetInfo } from "@react-native-community/netinfo";
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
  hasHeader?: boolean;
  touchWithoutFeedback?: boolean;
};

export function DefaultLayout({
  children,
  style,
  layoutStyle,
  hasHeader = true,
  touchWithoutFeedback = true,
}: DefaultLayoutProps) {
  const isOnline = useNetInfo().isConnected;

  const content = (
    <SafeAreaView
      style={[styles.mainContainer, style]}
      edges={hasHeader ? ["bottom", "left", "right"] : undefined}
    >
      <KeyboardAvoidingView
        style={[styles.container, layoutStyle]}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <SyncBar visible={!isOnline} />
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
