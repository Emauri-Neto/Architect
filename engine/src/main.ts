import { Elysia } from "elysia";
import { HTTP_BASE, HTTP_PORT } from "@/utils/env";

const app = new Elysia().get(HTTP_BASE, () => "1.0.0").listen(HTTP_PORT);

console.log(
    `Starting \x1b[32mENGINE\x1b[0m at: \n\t➜  http://${app.server?.hostname}:${app.server?.port}`,
);
