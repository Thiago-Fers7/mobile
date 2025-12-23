import { DefaultLayout } from "@components/layouts/default-layout";
import { Typography } from "@components/typography";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp } from "@routes/types";
import { useEffect } from "react";

import { FooterButtons } from "./components/footer-buttons";
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
        Aniversariantes do Mês
      </Typography>

      <FooterButtons />
    </DefaultLayout>
  );
}
