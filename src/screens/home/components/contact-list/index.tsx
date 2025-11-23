import { EmptyList } from "@components/empty-list";
import { ErrorSection } from "@components/error-section";
import { LoadingSection } from "@components/loading-section";
import { Typography } from "@components/typography";
import { useGetContacts } from "@hooks/queries/contacts/useGetContacts";
import { memo, useCallback } from "react";
import { FlatList, ListRenderItemInfo, View } from "react-native";
import type { Contact } from "src/@types/contacts";

import { styles } from "./styles";

type ContactItemProps = {
  contact: Contact;
};

const ContactItem = ({ contact }: ContactItemProps) => {
  return (
    <View style={[styles.listItem, contact.favorite && styles.favoriteItem]}>
      <Typography variant="body">{contact.name}</Typography>
      <Typography variant="caption">{contact.email}</Typography>
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
    return <LoadingSection message="Carregando contatos..." />;
  }

  if (isError) {
    return (
      <ErrorSection
        message="Ocorreu um erro ao carregar os contatos."
        description="Verifique sua conexão com a internet e tente novamente."
        onRetry={refetch}
      />
    );
  }

  return (
    <View style={styles.container}>
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
    </View>
  );
}
