import { EmptyList } from "@components/empty-list";
import { ErrorSection } from "@components/error-section";
import { DefaultLayout } from "@components/layouts/default-layout";
import { LoadingSection } from "@components/loading-section";
import { Typography } from "@components/typography";
import { useGetContacts } from "@hooks/queries/contacts/useGetContacts";
import { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  InteractionManager,
  ListRenderItemInfo,
  View,
} from "react-native";
import type { Contact } from "src/@types/contacts";

import { MemoizedContactItem } from "./contact-item";
import { styles } from "./styles";

export function AllContacts() {
  console.log("🚀 ~ ContactList rendered");
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

  // esse trecho de código faz com que a tela só seja renderizada
  // depois que a animação de navegação terminar
  // const [isReady, setIsReady] = useState(false);

  // useEffect(() => {
  //   // Essa função só roda depois que a animação de navegação terminar
  //   const task = InteractionManager.runAfterInteractions(async () => {
  //     // await new Promise((resolve) => setTimeout(resolve, 100));
  //     setIsReady(true);
  //   });

  //   return () => task.cancel(); // Boa prática de limpeza
  // }, []);

  // if (!isReady) {
  //   // Renderize algo muito leve aqui para não travar a transição
  //   console.log("🚀 ~ Navigation animation in progress...");
  //   return null;
  // }

  // final render após a animação de navegação

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
