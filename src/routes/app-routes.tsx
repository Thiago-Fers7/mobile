import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { AllContacts } from "@screens/all-contacts";
import { ContactDetails } from "@screens/contact-details";
import { Home } from "@screens/home";

import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppRoutes() {
  const headerOptions: NativeStackNavigationOptions = {
    headerShown: true,
    headerBackButtonMenuEnabled: true,
    headerBackButtonDisplayMode: "minimal",
    headerTitleAlign: "center",
  };

  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={headerOptions}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: true, title: "Meus Contatos" }}
      />

      <Stack.Screen
        name="AllContacts"
        component={AllContacts}
        options={{ headerShown: true, title: "Todos os contatos" }}
      />

      <Stack.Screen
        name="ContactDetails"
        component={ContactDetails}
        options={{ headerShown: true, title: "Detalhes do contato" }}
      />
    </Stack.Navigator>
  );
}
