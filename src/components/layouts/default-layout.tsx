import { SyncBar } from "@components/sync-bar";
import { useNetInfo } from "@react-native-community/netinfo";
import { useHeaderHeight } from "@react-navigation/elements";
import { ElementType, ReactNode } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleProp,
  TouchableWithoutFeedback,
  View,
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
  const headerHeight = useHeaderHeight();

  const Wrapper = (touchWithoutFeedback ? TouchableWithoutFeedback : View) as ElementType;

  const verticalOffset = hasHeader ? headerHeight : 0;

  return (
    <Wrapper {...(touchWithoutFeedback ? { onPress: Keyboard.dismiss, accessible: false } : {})}>
      <SafeAreaView style={[styles.mainContainer, style]} edges={["bottom", "left", "right"]}>
        <SyncBar visible={!isOnline} />

        <KeyboardAvoidingView
          style={[styles.container, layoutStyle]}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          keyboardVerticalOffset={verticalOffset}
          enabled
        >
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Wrapper>
  );
}
