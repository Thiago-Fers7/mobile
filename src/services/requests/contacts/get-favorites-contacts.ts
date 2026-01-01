import { db } from "@database/client";
import { contacts } from "@database/schema";
import { delay } from "@utils/delay";
import { eq } from "drizzle-orm";

export async function getFavoritesContacts() {
  await delay();

  const favoriteContacts = await db
    .select({
      id: contacts.id,
      name: contacts.name,
      email: contacts.email,
      isFavorite: contacts.is_favorite,
      birthDate: contacts.birth_date,
      phone: contacts.phone,
      avatar: contacts.avatar,
    })
    .from(contacts)
    .where(eq(contacts.is_favorite, 1));

  return favoriteContacts;
}
