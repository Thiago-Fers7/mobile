import { delay } from "@utils/delay";

export async function getContacts() {
  await delay(1000);

  const response = await fetch("http://192.168.1.7:3000/contacts");
  const contacts = await response.json();

  return contacts;
}
