export function normalizeHealth(v: {
    bonus: number;
    max: number;
    current: number;
}) {
    if (v.current > v.max) {
        const excesso = v.current - v.max
        v.bonus += excesso
        v.current = v.max
    }

    return v
}