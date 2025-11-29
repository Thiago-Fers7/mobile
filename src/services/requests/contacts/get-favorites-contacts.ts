import { delay } from "@utils/delay";

import { contacts } from "./mocks";

export async function getFavoritesContacts() {
  await delay(500);

  console.log("Fetched favorite contacts:");

  const favorites = contacts.filter((contact) => contact.favorite);

  return favorites;
}
