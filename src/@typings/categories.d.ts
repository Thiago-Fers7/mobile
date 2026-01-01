import { categories, contactsCategories } from "src/database/schema";

export type LocalCategory = typeof categories.$inferSelect;
export type ContactCategoriesRelations = typeof contactsCategories.$inferInsert;

export type Category = Pick<LocalCategory, "id" | "name" | "color">;
