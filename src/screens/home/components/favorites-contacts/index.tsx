import { EmptyList } from "@components/empty-list";
import { ErrorSection } from "@components/error-section";
import { LoadingSection } from "@components/loading-section";
import { Typography } from "@components/typography";
import { useGetFavoritesContacts } from "@hooks/queries/contacts/useGetFavoritesContacts";
import { memo, useCallback } from "react";
import { FlatList, ListRenderItemInfo, View } from "react-native";
import { Contact } from "src/@types/contacts";

import { styles } from "./styles";

type ContactItemProps = {
  contact: Contact;
};

const ContactItem = ({ contact }: ContactItemProps) => {
  return (
    <View style={styles.listItem}>
      <Typography variant="body">{contact.name}</Typography>
      <Typography variant="caption">{contact.email}</Typography>
    </View>
  );
};

const MemoizedContactItem = memo(ContactItem);

export function FavoritesContacts() {
  const { data: contacts, isLoading, isError } = useGetFavoritesContacts();

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
    <View style={styles.container}>
      <FlatList
        horizontal
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.contentContainer}
        ListEmptyComponent={<EmptyList message="Você não possui contatos favoritos." />}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
