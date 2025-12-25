import { db } from "@database/client";
import { contacts } from "@database/schema";
import { CreateContactFormData } from "@screens/create-contact";
import { LocalContact } from "@types/contacts";
import { delay } from "@utils/delay";
import { eq } from "drizzle-orm";

type CreateContactParams = CreateContactFormData & {
  createdBy: string;
};

type CreateContactResponse =
  | {
      isSuccess: true;
      message: string;
      data: number;
    }
  | {
      isSuccess: false;
      message: string;
    };

export async function createContact(data: CreateContactParams): Promise<CreateContactResponse> {
  await delay();

  const dataToInsert: LocalContact = {
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

  const [createdContactId] = await db.insert(contacts).values(dataToInsert).returning({
    id: contacts.id,
  });

  return {
    isSuccess: true,
    message: "Contato criado com sucesso.",
    data: createdContactId.id,
  };
}
