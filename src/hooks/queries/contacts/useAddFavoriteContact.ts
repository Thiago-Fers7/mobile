import {
  favoriteContact,
  FavoriteContactParams,
} from "@services/requests/contacts/favorite-contact";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Contact } from "src/@types/contacts";

import { contactsKeys } from "./contactsKeys";

export function useAddFavoriteContact() {
  const queryClient = useQueryClient();

  const mutation = useMutation<Contact | null, unknown, FavoriteContactParams>({
    mutationFn: favoriteContact,
    onSuccess: (updatedContact) => {
      queryClient.setQueryData<Contact[]>(contactsKeys.all, (oldContactsList) => {
        if (!oldContactsList) return oldContactsList;

        const updatedContactsList = oldContactsList.map((contact) =>
          contact.id === updatedContact?.id ? updatedContact : contact
        );

        return updatedContactsList;
      });

      queryClient.invalidateQueries({
        queryKey: contactsKeys.favorites(),
      });
    },
  });

  return mutation;
}
