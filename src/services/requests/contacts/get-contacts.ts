import { delay } from "@utils/delay";

import { contacts } from "./mocks";

export async function getContacts() {
  await delay(1000);

  console.log("Fetche contacts:");

  return contacts;
}
