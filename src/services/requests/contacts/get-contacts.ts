import { delay } from "@utils/delay";

export type Contact = {
  id: number;
  name: string;
  email: string;
};

const contacts: Contact[] = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  name: `Contact ${index + 1}`,
  email: `contact${index + 1}@example.com`,
}));

export async function getContacts() {
  await delay(1000);

  return contacts;
}
