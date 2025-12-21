import { getContactById } from "@services/requests/contacts/get-contact-by-id";
import { useQuery } from "@tanstack/react-query";
import { Contact } from "src/@types/contacts";
import { UseQueryHookOptions } from "src/@types/use-query-hook-options";

import { contactsKeys } from "./contactsKeys";

export function useGetContactDetail(
  contactId: string,
  options?: UseQueryHookOptions<Contact | undefined>
) {
  const query = useQuery({
    queryKey: contactsKeys.detail(contactId),
    queryFn: () => getContactById(contactId),
    ...options,
  });

  return query;
}
