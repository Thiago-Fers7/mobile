import { MemoizedContactItem } from "@components/contact-item";
import { styles as itemStyles } from "@components/contact-item/styles";
import { EmptyList } from "@components/empty-list";
import { ErrorSection } from "@components/error-section";
import { DefaultLayout } from "@components/layouts/default-layout";
import { LoadingSection } from "@components/loading-section";
import { useGetContacts } from "@hooks/queries/contacts/useGetContacts";
import { theme } from "@theme";
import type { ContactWithCategories } from "@typings/contacts";
import { useCallback } from "react";
import { FlatList, ListRenderItemInfo, View } from "react-native";

import { styles } from "./styles";

const marginVerticalSeparator = theme.spacing.s12;

const ItemSeparatorComponent = () => (
  <View
    style={{
      height: 1,
      backgroundColor: theme.colors.neutral[300],
      marginVertical: marginVerticalSeparator,
    }}
  />
);

export function AllContacts() {
  const { data: contacts, isLoading, isFetching, isError, refetch } = useGetContacts();

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<ContactWithCategories>) => <MemoizedContactItem contact={item} />,
    []
  );

  function getItemLayout(_: unknown, index: number) {
    return {
      index,
      length: itemStyles.cardButton.height + marginVerticalSeparator * 2,
      offset: (itemStyles.cardButton.height + marginVerticalSeparator * 2) * index,
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
    <DefaultLayout contentStyle={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentContainer}
        ListEmptyComponent={<EmptyList message="Nenhum contato encontrado." />}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        ItemSeparatorComponent={ItemSeparatorComponent}
        refreshing={isFetching}
        onRefresh={refetch}
      />
    </DefaultLayout>
  );
}
