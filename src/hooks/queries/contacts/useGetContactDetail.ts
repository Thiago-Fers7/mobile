import { getContactById } from "@services/requests/contacts/get-contact-by-id";
import { useQuery } from "@tanstack/react-query";

import { contactsKeys } from "./contactsKeys";

export function useGetContactDetail(contactId: string) {
  const query = useQuery({
    queryKey: contactsKeys.detail(contactId),
    queryFn: () => getContactById(contactId),
  });

  return query;
}
