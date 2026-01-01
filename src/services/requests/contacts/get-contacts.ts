import { db } from "@database/client";
import { delay } from "@utils/delay";

export async function getContacts() {
  await delay();

  const contactsList = await db.query.contacts.findMany({
    with: {
      categories: {
        with: {
          category: true,
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
  });

  const mappedContacts = contactsList.map((contact) => ({
    ...contact,
    isFavorite: contact.is_favorite,
    birthDate: contact.birth_date,
  }));

  return mappedContacts;
}
