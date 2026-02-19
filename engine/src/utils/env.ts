function GetEnv(key: string, fallback?: string): string {
    const value = Bun.env[key] || fallback;

    if (value === undefined) {
        throw new Error(`Environment variable ${key} is not defined`);
    }

    return value;
}

export const HTTP_PORT = GetEnv("HTTP_PORT", "4367");
export const HTTP_BASE = GetEnv("HTTP_BASE", "/");
export const DATABASE_URL = GetEnv("DATABASE_URL", "");
