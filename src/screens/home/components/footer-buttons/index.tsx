import { Button } from "@components/button";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp } from "@routes/types";
import { theme } from "@theme";
import { Plus, StarIcon, UsersRoundIcon } from "lucide-react-native";
import { Text, View } from "react-native";

import { styles } from "./styles";

type ButtonTextProps = {
  children: string;
};

function ButtonText({ children }: ButtonTextProps) {
  return <Text style={{ alignSelf: "center", color: theme.colors.primary[500] }}>{children}</Text>;
}

export function FooterButtons() {
  const navigation = useNavigation<RootStackNavigationProp>();

  function handleNavigateToAllContacts() {
    navigation.navigate("AllContacts");
  }

  return (
    <View style={styles.buttonsContainer}>
      <Button
        onPress={handleNavigateToAllContacts}
        containerStyle={styles.lateralButtonContainer}
        style={styles.lateralButton}
        variant="tertiary"
      >
        <UsersRoundIcon size={20} color={theme.colors.primary[500]} />

        <ButtonText>Contatos</ButtonText>
      </Button>

      <Button onPress={handleNavigateToAllContacts} style={styles.centralButton}>
        <Plus size={20} color="#FFFFFF" />
      </Button>

      <Button
        onPress={handleNavigateToAllContacts}
        containerStyle={styles.lateralButtonContainer}
        style={styles.lateralButton}
        variant="tertiary"
      >
        <StarIcon size={20} color={theme.colors.primary[500]} />
        <ButtonText>Favoritos</ButtonText>
      </Button>
    </View>
  );
}
