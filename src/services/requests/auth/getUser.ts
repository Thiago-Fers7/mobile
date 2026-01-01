import { User } from "@typings/user";
import { delay } from "@utils/delay";

export async function getUser(): Promise<User> {
  await delay(300);

  return {
    id: "1",
    email: "user@example.com",
    name: "John Doe",
    avatarUrl: "https://example.com/avatar.jpg",
  };
}
