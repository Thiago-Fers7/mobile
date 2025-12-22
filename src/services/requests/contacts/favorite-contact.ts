import { db } from "@database/client";
import { contacts } from "@database/schema";
import { delay } from "@utils/delay";
import { eq } from "drizzle-orm";

export type FavoriteContactParams = {
  contactId: number;
  isFavorite: boolean;
};

export async function favoriteContact({ contactId, isFavorite }: FavoriteContactParams) {
  await delay();

  console.log(`Updated favorite status for contact id: ${contactId} to ${isFavorite}`);

  const updatedContact = await db
    .update(contacts)
    .set({
      is_favorite: isFavorite ? 1 : 0,
    })
    .where(eq(contacts.id, Number(contactId)))
    .returning({
      id: contacts.id,
      name: contacts.name,
      email: contacts.email,
      isFavorite: contacts.is_favorite,
      phone: contacts.phone,
      avatar: contacts.avatar,
    });

  if (updatedContact.length === 0) {
    throw new Error("Contato não encontrado");
  }

  const contact = updatedContact[0];
  console.log("🚀 ~ contact:", contact);

  return contact;
}
