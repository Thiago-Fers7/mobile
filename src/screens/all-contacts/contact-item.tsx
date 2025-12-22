import { Typography } from "@components/typography";
import { useAddFavoriteContact } from "@hooks/queries/contacts/useAddFavoriteContact";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp } from "@routes/types";
import { Star } from "lucide-react-native";
import { memo } from "react";
import { ActivityIndicator, Pressable, View } from "react-native";
import { Contact } from "src/@types/contacts";

import { styles } from "./styles";

type ContactItemProps = {
  contact: Contact;
};

function ContactItem({ contact }: ContactItemProps) {
  const { mutate, isPending } = useAddFavoriteContact();
  const navigation = useNavigation<RootStackNavigationProp>();

  function navigateToContactDetails() {
    navigation.navigate("ContactDetails", { contactId: contact.id.toString() });
  }

  function handleAddFavorite() {
    mutate({ contactId: contact.id, isFavorite: !contact.isFavorite });
  }

  return (
    <Pressable
      style={({ pressed }) => [styles.cardButton, pressed && styles.cardButtonActive]}
      onPress={navigateToContactDetails}
    >
      <View>
        <Typography variant="body">{contact.name}</Typography>
        <Typography variant="caption">{contact.email}</Typography>
      </View>

      <Pressable
        onPress={isPending ? undefined : handleAddFavorite}
        style={({ pressed }) => [pressed && styles.toggleFavoriteButtonActive]}
        hitSlop={10}
      >
        {isPending && <ActivityIndicator />}

        {!isPending && <Star color={contact.isFavorite ? "#fdd700ff" : "#898989"} size={24} />}
      </Pressable>
    </Pressable>
  );
}

export const MemoizedContactItem = memo(ContactItem);
