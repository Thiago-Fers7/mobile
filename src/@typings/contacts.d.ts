import { contacts } from "src/database/schema";

import { Category } from "./categories";

export type Contact = {
  id: string;
  name: string;
  email: string | null;
  isFavorite: number;
  birthDate: Date | null;
  phone: string;
  avatar: string | null;
};

export type ContactWithCategories = Contact & {
  categories: Category[];
};

export type LocalContact = typeof contacts.$inferInsert;
