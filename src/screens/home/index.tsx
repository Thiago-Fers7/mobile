import { Button } from "@components/button";
import { useAuth } from "@contexts/AuthContext";
import { useState } from "react";
import { Text, View } from "react-native";

export function Home() {
  const { signOut } = useAuth();

  const [isLoadingSignOut, setIsLoadingSignOut] = useState(false);

  async function handleLogout() {
    setIsLoadingSignOut(true);

    await signOut();

    setIsLoadingSignOut(false);
  }

  const logoutText = isLoadingSignOut ? "Saindo..." : "Sair";

  return (
    <View>
      <Text>Home Screen</Text>

      <Button onPress={handleLogout} disabled={isLoadingSignOut}>
        {logoutText}
      </Button>
    </View>
  );
}
