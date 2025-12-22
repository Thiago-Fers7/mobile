import { Button } from "@components/button";
import { DefaultLayout } from "@components/layouts/default-layout";
import { Typography } from "@components/typography";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp } from "@routes/types";
import { Plus } from "lucide-react-native";
import { useEffect } from "react";
import { StatusBar, View } from "react-native";

import { FavoritesContacts } from "./components/favorites-contacts";
import { LogoutButton } from "./components/logout-button";
import { styles } from "./styles";

const HeaderRight = () => <LogoutButton />;

export function Home() {
  const navigation = useNavigation<RootStackNavigationProp>();

  function handleNavigateToAllContacts() {
    navigation.navigate("AllContacts");
  }

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

      <View style={styles.buttonsContainer}>
        <Button onPress={handleNavigateToAllContacts} containerStyle={styles.lateralButton}>
          Contatos
        </Button>

        <Button onPress={handleNavigateToAllContacts} style={styles.centralButton}>
          <Plus size={20} color="#FFFFFF" />
        </Button>

        <Button onPress={handleNavigateToAllContacts} containerStyle={styles.lateralButton}>
          Favoritos
        </Button>
      </View>
    </DefaultLayout>
  );
}
