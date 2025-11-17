import { Button } from "@components/button";
import { DefaultLayout } from "@components/layouts/default-layout";
import { useAuth } from "@contexts/AuthContext";
import { useState } from "react";
import { Text } from "react-native";

import { ContactList } from "./components/contact-list";

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
    <DefaultLayout>
      <Text>Bem-vindo ao aplicativo!</Text>

      <Text>Lista de contatos</Text>

      <ContactList />

      <Button onPress={handleLogout} disabled={isLoadingSignOut}>
        {logoutText}
      </Button>
    </DefaultLayout>
  );
}
