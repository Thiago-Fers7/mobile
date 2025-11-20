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
  { id: 5, name: "Ethan Hunt", email: "ethan.hunt@example.com" },
  { id: 6, name: "Fiona Gallagher", email: "fiona.gallagher@example.com" },
  { id: 7, name: "George Clooney", email: "george.clooney@example.com" },
  { id: 8, name: "Hannah Montana", email: "hannah.montana@example.com" },
  { id: 9, name: "Ian Somerhalder", email: "ian.somerhalder@example.com" },
  { id: 10, name: "Jessica Alba", email: "jessica.alba@example.com" },
  { id: 11, name: "Kevin Hart", email: "kevin.hart@example.com" },
  { id: 12, name: "Laura Croft", email: "laura.croft@example.com" },
  { id: 13, name: "Michael Scott", email: "michael.scott@example.com" },
  { id: 14, name: "Nina Dobrev", email: "nina.dobrev@example.com" },
  { id: 15, name: "Oscar Isaac", email: "oscar.isaac@example.com" },
  { id: 16, name: "Paul Walker", email: "paul.walker@example.com" },
  { id: 17, name: "Quinn Fabray", email: "quinn.fabray@example.com" },
  { id: 18, name: "Rachel Green", email: "rachel.green@example.com" },
  { id: 19, name: "Steve Rogers", email: "steve.rogers@example.com" },
  { id: 20, name: "Tina Fey", email: "tina.fey@example.com" },
  { id: 21, name: "Uma Thurman", email: "uma.thurman@example.com" },
];

export async function getContacts() {
  await delay(1000);

  return contacts;
}
