import { randomUUIDv7 } from "bun";
import { pgTable, text, uuid, timestamp } from "drizzle-orm/pg-core";

export const sheetsTable = pgTable("sheet", {
    id: uuid("id").primaryKey().$defaultFn(randomUUIDv7),
    character_name: text("character_name").notNull(),
    createdAt: timestamp("created_at").$defaultFn(() => new Date()),
    updatedAt: timestamp("updated_at")
        .$defaultFn(() => new Date())
        .$onUpdate(() => new Date()),
});
