import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { QueryProvider } from "@services/query/queryProvider";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { AuthProvider } from "./contexts/AuthContext";
import { initDB } from "./database/client";
import { Routes } from "./routes";

export default function App() {
  useEffect(() => {
    initDB();
  }, []);

  return (
    <QueryProvider>
      <AuthProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <Routes />
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </AuthProvider>
    </QueryProvider>
  );
}
