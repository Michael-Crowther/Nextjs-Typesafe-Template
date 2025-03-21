import { db } from "@/db";

export async function GET() {
  const dbUsers = await db.query.users.findMany();

  return new Response(JSON.stringify(dbUsers));
}
