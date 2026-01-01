import { EmptyList } from "@components/empty-list";
import { ErrorSection } from "@components/error-section";
import { DefaultLayout } from "@components/layouts/default-layout";
import { LoadingSection } from "@components/loading-section";
import { useGetContacts } from "@hooks/queries/contacts/useGetContacts";
import type { Contact } from "@typings/contacts";
import { useCallback } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";

import { MemoizedContactItem } from "./contact-item";
import { styles } from "./styles";

export function AllContacts() {
  const { data: contacts, isLoading, isFetching, isError, refetch } = useGetContacts();

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Contact>) => <MemoizedContactItem contact={item} />,
    []
  );

  function getItemLayout(_: unknown, index: number) {
    return {
      index,
      length: styles.cardButton.height + styles.contentContainer.gap,
      offset: (styles.cardButton.height + styles.contentContainer.gap) * index,
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
    <DefaultLayout layoutStyle={styles.container}>
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
    </DefaultLayout>
  );
}
