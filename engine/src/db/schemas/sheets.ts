import { randomUUIDv7 } from "bun";
import { pgTable, text, uuid, timestamp, jsonb, pgEnum, integer } from "drizzle-orm/pg-core";

export const classEnum = pgEnum("class", [
    "COMBATENTE",
    "ESPECIALISTA",
    "OCULTISTA",
    "MUNDANO",
    "SOBREVIVENTE"
]);

export const sheetsTable = pgTable("sheet", {
    id: uuid("id").primaryKey().$defaultFn(randomUUIDv7),
    character_name: text("character_name").notNull(),
    health: jsonb("health").notNull().$type<{
        max: number;
        current: number;
        bonus: number;
    }>(),
    class: classEnum("class").notNull(),
    nex: integer("nex").notNull(),
    createdAt: timestamp("created_at").$defaultFn(() => new Date()),
    updatedAt: timestamp("updated_at")
        .$defaultFn(() => new Date())
        .$onUpdate(() => new Date()),
});
