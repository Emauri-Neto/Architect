import { z } from "zod";

export const sheetSchema = z.object({
    character_name: z.string().min(1, { error: "O nome precisa ter pelo menos 1 caracter" }),
    class: z.enum(["COMBATENTE", "ESPECIALISTA", "OCULTISTA", "MUNDANO", "SOBREVIVENTE"]),
    nex: z.number().min(0).max(99).refine(v => v % 5 === 0, {
        error: "O NEX deve ser multiplo de 5"
    }),
    health: z.object({
        max: z.number().positive(),
        current: z.number().positive(),
    })
});

export type TSheet = z.infer<typeof sheetSchema>;
