import { z } from "zod";

export const sheetSchema = z.object({
    character_name: z.string().min(1, { error: "O nome precisa ter pelo menos 1 caracter" }),
    health: z.object({
        max: z.number(),
        current: z.number(),
        bonus: z.number(),
    })
});

export type TSheet = z.infer<typeof sheetSchema>;
