import { delay } from "@utils/delay";

import { contacts } from "./mocks";

export async function getFavoritesContacts() {
  await delay(600);

  const favorites = contacts.filter((contact) => contact.favorite);

  return favorites;
}
