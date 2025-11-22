import { EmptyList } from "@components/empty-list";
import { useGetContacts } from "@hooks/queries/contacts/useGetContacts";
import { Contact } from "@services/requests/contacts/get-contacts";
import { memo, useCallback } from "react";
import { FlatList, ListRenderItemInfo, Text, View } from "react-native";

import { ContactsListError } from "./error";
import { LoadingContactsList } from "./loading";
import { styles } from "./styles";

type ContactItemProps = {
  contact: Contact;
};

const ContactItem = ({ contact }: ContactItemProps) => {
  return (
    <View style={styles.listItem}>
      <Text>{contact.name}</Text>
      <Text>{contact.email}</Text>
    </View>
  );
};

export const MemoizedContactItem = memo(ContactItem);

export function ContactList() {
  const { data: contacts, isLoading, isFetching, isError, refetch } = useGetContacts();

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Contact>) => <MemoizedContactItem contact={item} />,
    []
  );

  function getItemLayout(_: unknown, index: number) {
    return {
      index,
      length: styles.listItem.height + styles.listItem.padding * 2 + styles.contentContainer.gap,
      offset:
        (styles.listItem.height + styles.listItem.padding * 2 + styles.contentContainer.gap) *
        index,
    };
  }

  if (isLoading) {
    return <LoadingContactsList />;
  }

  if (isError) {
    return <ContactsListError onRetry={refetch} />;
  }

  return (
    <FlatList
      data={contacts}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.contentContainer}
      ListEmptyComponent={<EmptyList message="Nenhum contato encontrado." />}
      renderItem={renderItem}
      getItemLayout={getItemLayout}
      refreshing={isFetching}
      onRefresh={refetch}
    />
  );
}
