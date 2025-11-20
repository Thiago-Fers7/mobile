import { QueryClient } from "@tanstack/react-query";
import { focusManager, onlineManager } from "@tanstack/react-query";
import { AppState, Platform } from "react-native";

// Gerencia o status online/offline
onlineManager.setOnline(true);
// (Você pode adicionar um listener de NetInfo aqui se quiser)

// Gerencia o foco da tela/app
focusManager.setFocused(true);

if (Platform.OS !== "web") {
  AppState.addEventListener("change", (status) => {
    focusManager.setFocused(status === "active");
  });
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: "always",
      staleTime: 1000 * 60 * 5, // 5 minutos
      retry: 3,
    },
  },
});
