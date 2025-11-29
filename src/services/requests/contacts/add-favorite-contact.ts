import { delay } from "@utils/delay";

import { editContactFavoriteStatus } from "./mocks";

export type FavoriteContactParams = {
  contactId: string;
  isFavorite: boolean;
};

export async function addFavoriteContact({ contactId, isFavorite }: FavoriteContactParams) {
  await delay(500);

  console.log(`Updated favorite status for contact id: ${contactId} to ${isFavorite}`);

  return editContactFavoriteStatus(contactId, isFavorite);
}
