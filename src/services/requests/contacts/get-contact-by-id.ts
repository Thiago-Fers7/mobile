import { contacts } from "./mocks";

export function getContactById(contactId: string) {
  console.log(`Fetched contact by id: ${contactId}`);

  return contacts.find((contact) => contact.id.toString() === contactId);
}
