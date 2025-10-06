import { useAuth } from "@contexts/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, View } from "react-native";

import { AppRoutes } from "./app-routes";
import { AuthRoutes } from "./auth-routes";

export function Routes() {
  const { isLoggedIn, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <NavigationContainer>{isLoggedIn ? <AppRoutes /> : <AuthRoutes />}</NavigationContainer>;
}
