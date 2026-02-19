import { Elysia } from "elysia";
import { sheetSchema } from "./model";
import db from "@/db";
import { sheetsTable } from "@/db/schema";
import { normalizeHealth } from "./services";

export const sheetRouter = new Elysia({ prefix: "/sheets" }).post(
    "/new",
    async ({ body, status }) => {
        const [newSheet] = await db
            .insert(sheetsTable)
            .values({
                character_name: body.character_name,
                health: normalizeHealth(body)
            })
            .returning();

        return status("Created", newSheet);
    },
    {
        body: sheetSchema,
    },
);
