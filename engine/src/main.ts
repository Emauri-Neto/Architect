import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "1.0.0").listen(3000);

console.log(
    `Starting \x1b[32mENGINE\x1b[0m at: \n\t➜  http://${app.server?.hostname}:${app.server?.port}`,
);
