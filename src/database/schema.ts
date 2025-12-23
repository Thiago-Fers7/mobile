import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const contacts = sqliteTable("contacts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
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
