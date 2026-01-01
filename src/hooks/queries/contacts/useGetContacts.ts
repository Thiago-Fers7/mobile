import { getContacts } from "@services/requests/contacts/get-contacts";
import { useQuery } from "@tanstack/react-query";

import { contactsKeys } from "./contactsKeys";

export function useGetContacts() {
  const query = useQuery({
    queryKey: contactsKeys.listAll(),
    queryFn: getContacts,
  });

  console.log("useGetContacts query", query);

  return query;
}
