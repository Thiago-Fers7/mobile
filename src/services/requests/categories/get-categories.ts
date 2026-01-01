import { db } from "@database/client";
import { categories } from "@database/schema";
import { delay } from "@utils/delay";

export async function getCategories() {
  await delay();

  const allCategories = await db.select().from(categories);

  return allCategories;
}
