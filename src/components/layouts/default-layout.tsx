import { SyncBar } from "@components/sync-bar";
import { useNetInfo } from "@react-native-community/netinfo";
import { ReactNode } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./styles";

type DefaultLayoutProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
};

export function DefaultLayout({ children, style, contentStyle }: DefaultLayoutProps) {
  const { isConnected } = useNetInfo();

  return (
    <SafeAreaView style={[styles.mainContainer, style]} edges={["bottom", "left", "right"]}>
      <View style={[styles.container, contentStyle]}>
        <SyncBar visible={!isConnected} />
        {children}
      </View>
    </SafeAreaView>
  );
}
