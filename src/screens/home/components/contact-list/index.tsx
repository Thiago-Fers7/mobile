import { useGetContacts } from "@hooks/queries/contacts/useGetContacts";
import { FlatList, Text, View } from "react-native";

import { ContactsListError } from "./error";
import { LoadingContactsList } from "./loading";
import { styles } from "./styles";

export function ContactList() {
  const { data: contacts, isLoading, isFetching, isError, refetch } = useGetContacts();

  if (isLoading || isFetching) {
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
      renderItem={({ item }) => (
        <View style={styles.listItem}>
          <Text>{item.name}</Text>
          <Text>{item.email}</Text>
        </View>
      )}
    />
  );
}
