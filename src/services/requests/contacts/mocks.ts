import { Contact } from "src/@types/contacts";

export const contacts: Contact[] = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  name: `Contact ${index + 1}`,
  email: `contact${index + 1}@example.com`,
  favorite: (index + 1) % 5 === 0,
}));
