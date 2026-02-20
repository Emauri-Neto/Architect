import { Elysia } from "elysia";
import { HTTP_BASE, HTTP_PORT } from "@/utils/env";
import { sheetRouter } from "./modules/sheets";
import openapi from "@elysiajs/openapi";

const app = new Elysia()
    .onError(({ code, error, set }) => {
        if (code === 'VALIDATION') {
            set.status = 422

            const field = error.valueError?.path ?? null
            const message = error.valueError?.message ?? 'Erro de validação'

            return {
                success: false,
                error: {
                    type: 'validation_error',
                    field,
                    message
                }
            }
        }
    })
    .use(openapi())
    .use(sheetRouter)
    .get(HTTP_BASE, () => "1.0.0")
    .listen(HTTP_PORT);

console.log(
    `Starting \x1b[32mENGINE\x1b[0m at: \n\t➜  http://${app.server?.hostname}:${app.server?.port}`,
);
