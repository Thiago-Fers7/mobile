import { getFavoritesContacts } from "@services/requests/contacts/get-favorites-contacts";
import { useQuery } from "@tanstack/react-query";

import { contactsKeys } from "./contactsKeys";

export function useGetFavoritesContacts() {
  const query = useQuery({
    queryKey: contactsKeys.favorites(),
    queryFn: getFavoritesContacts,
  });

  return query;
}
