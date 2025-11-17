import { delay } from "@utils/delay";

export type Contact = {
  id: number;
  name: string;
  email: string;
};

const contacts: Contact[] = [
  { id: 1, name: "Alice Smith", email: "alice.smith@example.com" },
  { id: 2, name: "Bob Johnson", email: "bob.johnson@example.com" },
  { id: 3, name: "Charlie Brown", email: "charlie.brown@example.com" },
  { id: 4, name: "Diana Prince", email: "diana.prince@example.com" },
];

export async function getContacts() {
  await delay(1000);

  return contacts;
}
