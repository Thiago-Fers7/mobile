import { createContact } from "@services/requests/contacts/create-contact";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { contactsKeys } from "./contactsKeys";

export function useCreateContact() {
  const queryClient = useQueryClient();

  const mutate = useMutation({
    mutationFn: createContact,
    mutationKey: contactsKeys.create(),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: contactsKeys.listAll(),
      });
    },
  });

  return mutate;
}
