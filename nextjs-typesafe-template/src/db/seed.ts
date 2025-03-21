import "dotenv/config";
import { eq } from "drizzle-orm";
import { users } from "./schema";
import { db } from ".";

async function main() {
  const user: typeof users.$inferInsert = {
    name: "John",
    age: 30,
    email: "john@example.com",
  };

  await db.insert(users).values(user);
  console.log("New user created!");

  const dbUsers = await db.select().from(users);
  console.log("Getting all users from the database: ", dbUsers);
  /*
  const users: {
    id: number;
    name: string;
    age: number;
    email: string;
  }[]
  */

  await db
    .update(users)
    .set({
      age: 31,
    })
    .where(eq(users.email, user.email));
  console.log("User info updated!");

  // await db.delete(usersTable).where(eq(usersTable.email, user.email));
  // console.log("User deleted!");
}

main();
