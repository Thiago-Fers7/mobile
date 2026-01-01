import { db } from "@database/client";
import { contacts, contactsCategories } from "@database/schema";
import { CreateContactFormData } from "@screens/create-contact";
import { ContactCategoriesRelations } from "@typings/categories";
import { LocalContact } from "@typings/contacts";
import { delay } from "@utils/delay";
import { eq } from "drizzle-orm";

type CreateContactParams = CreateContactFormData & {
  createdBy: string;
};

type CreateContactResponse =
  | {
      isSuccess: true;
      message: string;
      data: string;
    }
  | {
      isSuccess: false;
      message: string;
    };

export async function createContact(data: CreateContactParams): Promise<CreateContactResponse> {
  await delay();

  const newContactData: LocalContact = {
    name: data.name,
    email: data.email || null,
    phone: data.phone,
    birth_date: data.dateOfBirth,
    created_by: data.createdBy,
  };

  const [userByPhone] = await db.select().from(contacts).where(eq(contacts.phone, data.phone));

  if (userByPhone) {
    return {
      isSuccess: false,
      message: "Voce já possui um contato com este número de telefone.",
    };
  }

  const categoriesIds = data.categories || [];

  try {
    const createdContactId = await db.transaction(async (tx) => {
      const [createdContact] = await tx.insert(contacts).values(newContactData).returning({
        id: contacts.id,
      });

      if (categoriesIds.length > 0) {
        const categoryLinks: ContactCategoriesRelations[] = categoriesIds.map((categoryId) => ({
          contact_id: createdContact.id,
          category_id: categoryId,
        }));

        await tx.insert(contactsCategories).values(categoryLinks);
      }

      return createdContact.id;
    });

    return {
      isSuccess: true,
      message: "Contato criado com sucesso.",
      data: createdContactId,
    };
  } catch (error) {
    return {
      isSuccess: false,
      message: "Não foi possível criar o contato. Tente novamente mais tarde.",
    };
  }
}
