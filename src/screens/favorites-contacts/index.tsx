import { EmptyList } from "@components/empty-list";
import { ErrorSection } from "@components/error-section";
import { DefaultLayout } from "@components/layouts/default-layout";
import { LoadingSection } from "@components/loading-section";
import { SyncBar } from "@components/sync-bar";
import { Typography } from "@components/typography";
import { useGetFavoritesContacts } from "@hooks/queries/contacts/useGetFavoritesContacts";
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp } from "@routes/types";
import { memo, useCallback } from "react";
import { FlatList, ListRenderItemInfo, Pressable, View } from "react-native";
import { Contact } from "src/@types/contacts";

import { styles } from "./styles";

type ContactItemProps = {
  contact: Contact;
};

function ContactItem({ contact }: ContactItemProps) {
  const navigation = useNavigation<RootStackNavigationProp>();

  function navigateToContactDetails() {
    navigation.navigate("ContactDetails", { contactId: contact.id.toString() });
  }

  return (
    <Pressable
      style={({ pressed }) => [styles.cardButton, pressed && styles.cardButtonActive]}
      onPress={navigateToContactDetails}
    >
      <Typography variant="body">{contact.name}</Typography>
      <Typography variant="caption">{contact.email}</Typography>
    </Pressable>
  );
}

const MemoizedContactItem = memo(ContactItem);

export function FavoritesContacts() {
  const { data: contacts, isLoading, isError, isFetching } = useGetFavoritesContacts();

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Contact>) => <MemoizedContactItem contact={item} />,
    []
  );

  if (isLoading) {
    return (
      <View style={styles.container}>
        <LoadingSection message="Carregando contatos favoritos..." />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.container}>
        <ErrorSection message="Ocorreu um erro buscar os contatos favoritos." />
      </View>
    );
  }

  return (
    <DefaultLayout>
      <SyncBar visible={isFetching} />

      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.contentContainer}
        ListEmptyComponent={<EmptyList message="Você não possui contatos favoritos." />}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </DefaultLayout>
  );
}
