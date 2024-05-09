import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import Database from "better-sqlite3";
import config from "../../drizzle.config";
import db, { sqlite } from ".";

// if (!env.DB_MIGRATING) {
//   throw new Error('You must set DB_MIGRATING to "true" when running migrations');
// }

migrate(db, { migrationsFolder: config.out! });

sqlite.close();
