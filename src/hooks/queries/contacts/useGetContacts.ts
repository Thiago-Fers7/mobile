import { getContacts } from "@services/requests/contacts/get-contacts";
import { useQuery } from "@tanstack/react-query";
import { Contact } from "src/@types/contacts";
import type { UseQueryHookOptions } from "src/@types/use-query-hook-options";

import { contactsKeys } from "./contactsKeys";

export function useGetContacts(options?: UseQueryHookOptions<Contact[]>) {
  const query = useQuery({
    queryKey: contactsKeys.all,
    queryFn: getContacts,
    ...options,
  });

  return query;
}
