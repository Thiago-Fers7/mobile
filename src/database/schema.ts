import "react-native-get-random-values";

import { relations } from "drizzle-orm";
import { integer, primaryKey, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { v4 as uuidv4 } from "uuid";

const generateId = () => uuidv4();

export const contacts = sqliteTable("contacts", {
  id: text("id").primaryKey().$default(generateId).notNull(),
  created_by: text("created_by").notNull(),
  name: text("name").notNull(),
  phone: text("phone").notNull().unique(),
  email: text("email").unique(),
  avatar: text("avatar"),
  created_at: integer("created_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
    .notNull(),
  updated_at: integer("updated_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
    .notNull(),
  is_favorite: integer("is_favorite")
    .notNull()
    .$default(() => 0),
  sync_status: text("sync_status")
    .notNull()
    .$default(() => "pending"),

  birth_date: integer("birth_date", { mode: "timestamp" }),
});

export const categories = sqliteTable("categories", {
  id: text("id").primaryKey().$default(generateId).notNull(),
  name: text("name").notNull().unique(),
  color: text("color"),
  created_at: integer("created_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
    .notNull(),
});

export const contactsCategories = sqliteTable(
  "contacts_categories",
  {
    contact_id: text("contact_id")
      .notNull()
      .references(() => contacts.id, { onDelete: "cascade" }),
    category_id: text("category_id")
      .notNull()
      .references(() => categories.id, { onDelete: "cascade" }),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.contact_id, table.category_id] }),
  })
);

export const contactsRelations = relations(contacts, ({ many }) => ({
  categories: many(contactsCategories),
}));

export const categoriesRelations = relations(categories, ({ many }) => ({
  contacts: many(contactsCategories),
}));

export const contactCategoriesRelations = relations(contactsCategories, ({ one }) => ({
  contact: one(contacts, {
    fields: [contactsCategories.contact_id],
    references: [contacts.id],
  }),
  category: one(categories, {
    fields: [contactsCategories.category_id],
    references: [categories.id],
  }),
}));
