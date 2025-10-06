import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/home";

import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Home} />
    </Stack.Navigator>
  );
}
