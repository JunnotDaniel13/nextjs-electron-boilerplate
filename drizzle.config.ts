import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./renderer/db/schema/index.ts",
  out: "./renderer/db/migrations",
  driver: "better-sqlite",
  dbCredentials: {
    url: "./renderer/db/sqlite.db",
  },
  verbose: true,
  strict: true,
});
