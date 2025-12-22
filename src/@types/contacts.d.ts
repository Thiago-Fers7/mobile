import { contacts } from "src/database/schema";

export type Contact = {
  id: number;
  name: string;
  email: string | null;
  isFavorite: number;
  phone: string;
  avatar: string | null;
};

export type LocalContact = typeof contacts.$inferInsert;
