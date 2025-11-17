import { Contact } from "@services/requests/contacts/getContacts";
import { use } from "react";
import { Text, View } from "react-native";

type ListProps = {
  getContactsPromise: Promise<Contact[]>;
};

export function List({ getContactsPromise }: ListProps) {
  const contacts = use(getContactsPromise);

  return (
    <View>
      {contacts.map((contact) => (
        <View key={contact.id}>
          <Text>{contact.name}</Text>
          <Text>{contact.email}</Text>
        </View>
      ))}
    </View>
  );
}
