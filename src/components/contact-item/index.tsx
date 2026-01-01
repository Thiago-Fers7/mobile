import { Typography } from "@components/typography";
import { UserAvatar } from "@components/user-avatar";
import { useAddFavoriteContact } from "@hooks/queries/contacts/useAddFavoriteContact";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp } from "@routes/types";
import { ContactWithCategories } from "@typings/contacts";
import { Star } from "lucide-react-native";
import { memo } from "react";
import { ActivityIndicator, Pressable, View } from "react-native";

import { styles } from "./styles";

type ContactItemProps = {
  contact: ContactWithCategories;
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
      <View style={styles.contactInfoContainer}>
        <UserAvatar name={contact.name} size={50} />

        <View style={styles.contactInfo}>
          <Typography variant="body">{contact.name}</Typography>

          {!!contact.categories?.length && (
            <View style={styles.categoriesContentContainer}>
              {contact.categories.map((category) => (
                <View
                  key={category.id}
                  style={[styles.categoryItem, { backgroundColor: category.color + "50" }]}
                >
                  <Typography variant="caption" style={styles.categoryText}>
                    {category.name}
                  </Typography>
                </View>
              ))}
            </View>
          )}
        </View>
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
