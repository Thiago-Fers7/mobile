import { open } from "@op-engineering/op-sqlite";
import { drizzle } from "drizzle-orm/op-sqlite";
import { migrate } from "drizzle-orm/op-sqlite/migrator"; // Importe o migrador

import migrations from "./migrations/migrations";
import * as schema from "./schema";

const opsqlite = open({
  name: "my_contacts_db.sqlite",
});

export const db = drizzle(opsqlite, { schema });

export async function initDB() {
  try {
    await migrate(db, migrations);
    console.log("Migrations executadas com sucesso!");
  } catch (error) {
    console.error("Erro ao rodar migrations:", error);
  }
}
