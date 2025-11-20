import { Button } from "@components/button";
import { DefaultLayout } from "@components/layouts/default-layout";
import { Typography } from "@components/typography";
import { useAuth } from "@contexts/AuthContext";
import { contactsKeys } from "@hooks/queries/contacts/contactsKeys";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { View } from "react-native";

import { ContactList } from "./components/contact-list";
import { styles } from "./styles";

export function Home() {
  const { signOut } = useAuth();
  const queryClient = useQueryClient();

  const [isLoadingSignOut, setIsLoadingSignOut] = useState(false);

  async function handleLogout() {
    setIsLoadingSignOut(true);

    await signOut();

    queryClient.removeQueries({
      queryKey: contactsKeys.all,
    });

    setIsLoadingSignOut(false);
  }

  const logoutText = isLoadingSignOut ? "Saindo..." : "Sair";

  return (
    <DefaultLayout>
      <Typography variant="heading" style={styles.title}>
        Lista de contatos
      </Typography>

      <View style={styles.container}>
        <ContactList />
      </View>

      <View style={styles.footer}>
        <Button onPress={handleLogout} disabled={isLoadingSignOut}>
          {logoutText}
        </Button>
      </View>
    </DefaultLayout>
  );
}
