import { contacts } from "src/database/schema";

export type Contact = {
  id: string;
  name: string;
  email: string | null;
  isFavorite: number;
  birthDate: Date | null;
  phone: string;
  avatar: string | null;
};

export type LocalContact = typeof contacts.$inferInsert;
