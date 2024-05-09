import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

import * as schema from "./schema";

export const sqlite = new Database("./renderer/db/sqlite.db");
const db = drizzle(sqlite, { logger: true, schema });

export type db = typeof db;

export default db;
