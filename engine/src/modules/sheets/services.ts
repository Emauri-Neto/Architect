import type { TSheet } from "./model";

export function normalizeHealth(v: Pick<TSheet, "health">) {
    if (v.health.current > v.health.max) {
        const excesso = v.health.current - v.health.max
        v.health.bonus += excesso
        v.health.current = v.health.max
    }

    return v.health
}