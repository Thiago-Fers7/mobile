import { delay } from "@utils/delay";

export async function getContactById(contactId: string) {
  await delay(1000);

  const response = await fetch("http://192.168.1.7:3000/contacts/" + contactId);
  const contact = await response.json();
  console.log("🚀 ~ contact:", contact);

  return contact;
}
