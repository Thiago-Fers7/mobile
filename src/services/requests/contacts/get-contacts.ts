import { delay } from "@utils/delay";

import { contacts } from "./mocks";

export async function getContacts() {
  await delay(400);

  return contacts;
}
