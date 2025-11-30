import { Contact } from "src/@types/contacts";

export const contacts: Contact[] = Array.from({ length: 1000 }, (_, index) => ({
  id: String(index + 1),
  name: `Contact ${index + 1}`,
  email: `contact${index + 1}@example.com`,
  favorite: false,
}));

export function editContactFavoriteStatus(
  contactId: string,
  favoriteStatus: boolean
): Contact | null {
  const contactIndex = contacts.findIndex((contact) => contact.id === contactId);

  if (contactIndex === -1) {
    return null;
  }

  contacts[contactIndex].favorite = favoriteStatus;

  return contacts[contactIndex];
}
