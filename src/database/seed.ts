import { db } from "./client";
import { SYSTEM_CATEGORIES } from "./data/initialCategories";
import { categories } from "./schema";

export async function seedCategories() {
  try {
    console.log("🌱 Iniciando seed de categorias...");

    await db
      .insert(categories)
      .values(SYSTEM_CATEGORIES)
      .onConflictDoNothing({ target: categories.id });

    console.log("✅ Seed finalizado!");
  } catch (error) {
    console.error("❌ Erro no seed:", error);
  }
}
