import { generalKeys } from "../general-keys";

export const contactsKeys = {
  all: ["contacts"] as const,
  lists: (filters: string) => [...contactsKeys.all, "list", filters] as const,
  detail: (id: string) => [...contactsKeys.all, "detail", id] as const,
  favorites: () => [...contactsKeys.all, "favorites"] as const,
  persistAll: () => [...contactsKeys.all, ...generalKeys.persistOffline] as const,
};
