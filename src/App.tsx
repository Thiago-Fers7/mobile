import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { QueryProvider } from "@services/query/queryProvider";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";

import { AuthProvider } from "./contexts/AuthContext";
import { initDB } from "./database/client";
import { Routes } from "./routes";

export default function App() {
  useEffect(() => {
    initDB();
  }, []);

  return (
    <QueryProvider>
      <KeyboardProvider>
        <AuthProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
              <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

              <Routes />
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </AuthProvider>
      </KeyboardProvider>
    </QueryProvider>
  );
}
