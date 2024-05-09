import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

const state = sqliteTable("state", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name", { length: 255 }).notNull().unique(),
  code: text("code", { length: 2 }).notNull().unique(),
  country: text("country", { length: 255 }).notNull().default("US"),
});

export default state;
