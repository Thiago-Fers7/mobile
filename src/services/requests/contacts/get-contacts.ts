import { delay } from "@utils/delay";

import { db } from "../../../database/client";
import { contacts } from "../../../database/schema";

export async function getContacts() {
  await delay();

  const contactsList = await db
    .select({
      id: contacts.id,
      name: contacts.name,
      email: contacts.email,
      isFavorite: contacts.is_favorite,
      phone: contacts.phone,
      avatar: contacts.avatar,
    })
    .from(contacts);

  return contactsList;
}
