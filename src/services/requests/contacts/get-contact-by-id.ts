import { delay } from "@utils/delay";
import { eq } from "drizzle-orm/";

import { db } from "../../../database/client";
import { contacts } from "../../../database/schema";

export async function getContactById(contactId: string) {
  await delay();

  const contact = await db
    .select({
      id: contacts.id,
      name: contacts.name,
      email: contacts.email,
      isFavorite: contacts.is_favorite,
      phone: contacts.phone,
      avatar: contacts.avatar,
    })
    .from(contacts)
    .where(eq(contacts.id, Number(contactId)))
    .limit(1);

  const [firstContact] = contact;

  return firstContact;
}
