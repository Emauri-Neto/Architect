import { DATABASE_URL } from "@/utils/env";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "@/db/schema";

const db = drizzle(DATABASE_URL, { schema });

export default db;
