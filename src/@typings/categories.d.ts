import { categories, contactsCategories } from "src/database/schema";

export type LocalCategory = typeof categories.$inferInsert;
export type ContactCategoriesRelations = typeof contactsCategories.$inferInsert;
