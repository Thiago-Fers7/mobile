import { SyncBar } from "@components/sync-bar";
import { useNetInfo } from "@react-native-community/netinfo";
import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./styles";

type DefaultLayoutProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  layoutStyle?: StyleProp<ViewStyle>;
  hasHeader?: boolean;
  touchWithoutFeedback?: boolean;
};

export function DefaultLayout({ children, style }: DefaultLayoutProps) {
  const { isConnected } = useNetInfo();

  return (
    <SafeAreaView style={[styles.mainContainer, style]} edges={["bottom", "left", "right"]}>
      <SyncBar visible={!isConnected} />
      {children}
    </SafeAreaView>
  );
}
