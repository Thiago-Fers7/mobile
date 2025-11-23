import { getFavoritesContacts } from "@services/requests/contacts/get-favorites-contacts";
import { useQuery } from "@tanstack/react-query";
import { Contact } from "src/@types/contacts";
import type { UseQueryHookOptions } from "src/@types/use-query-hook-options";

import { contactsKeys } from "./contactsKeys";

export function useGetFavoritesContacts(options?: UseQueryHookOptions<Contact[]>) {
  const query = useQuery({
    queryKey: contactsKeys.favorites(),
    queryFn: getFavoritesContacts,
    ...options,
  });

  return query;
}
