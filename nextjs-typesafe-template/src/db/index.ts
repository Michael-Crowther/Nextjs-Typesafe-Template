import "dotenv/config";
import * as schema from "./schema";
import { drizzle } from "drizzle-orm/mysql2";
export const db = drizzle({
  schema,
  mode: "default",
  connection: { uri: process.env.DATABASE_URL },
});

/*
import * as schema from './schema';
import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  uri: process.env.PLANETSCALE_DATABASE_URL,
});

const db = drizzle({
  client: connection,
  schema,
  mode: 'planetscale', // specify mode as 'planetscale' for PlanetScale
});
*/
