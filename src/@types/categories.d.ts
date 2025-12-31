import { categories } from "src/database/schema";

export type LocalCategory = typeof categories.$inferInsert;
