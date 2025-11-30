import { DefaultLayout } from "@components/layouts/default-layout";
import { Typography } from "@components/typography";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp } from "@routes/types";
import { useEffect } from "react";

import { ContactList } from "./components/contact-list";
import { FavoritesContacts } from "./components/favorites-contacts";
import { LogoutButton } from "./components/logout-button";
import { styles } from "./styles";

const HeaderRight = () => <LogoutButton />;

export function Home() {
  const navigation = useNavigation<RootStackNavigationProp>();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerRight: HeaderRight,
    });
  }, [navigation]);

  return (
    <DefaultLayout>
      <Typography variant="heading" style={styles.title}>
        Favoritos
      </Typography>

      <FavoritesContacts />

      <Typography variant="heading" style={[styles.title]}>
        Todos os contatos
      </Typography>

      <ContactList />
    </DefaultLayout>
  );
}
