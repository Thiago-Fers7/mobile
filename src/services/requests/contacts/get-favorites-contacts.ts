import { db } from "@database/client";
import { ContactWithCategories } from "@typings/contacts";
import { delay } from "@utils/delay";

export async function getFavoritesContacts() {
  await delay();

  const favoriteContactList = await db.query.contacts.findMany({
    where: (contacts, { eq }) => eq(contacts.is_favorite, 1),
    with: {
      categories: {
        columns: {},
        with: {
          category: {
            columns: { id: true, name: true, color: true },
          },
        },
      },
    },
    columns: {
      id: true,
      name: true,
      email: true,
      is_favorite: true,
      phone: true,
      avatar: true,
      birth_date: true,
    },
    orderBy: (contacts, { desc }) => [desc(contacts.created_at)],
  });

  const mappedFavoriteContacts: ContactWithCategories[] = favoriteContactList.map((contact) => ({
    ...contact,
    isFavorite: contact.is_favorite,
    birthDate: contact.birth_date,
    categories: contact.categories.map((catRel) => catRel.category),
  }));

  return mappedFavoriteContacts;
}
