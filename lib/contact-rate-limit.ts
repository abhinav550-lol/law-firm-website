import { createHash } from "node:crypto";

const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;
const attempts = new Map<string, { count: number; expiresAt: number }>();

// Per-process protection; use a shared store when deploying multiple instances.
export function consumeContactLimit(request: Request, email: string): number {
  const now = Date.now();
  for (const [key, attempt] of attempts) {
    if (attempt.expiresAt <= now) attempts.delete(key);
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("x-real-ip") || "unknown";
  const keys = [`ip:${ip}`, `email:${email.toLowerCase()}`].map((value) =>
    createHash("sha256").update(value).digest("hex"),
  );

  const blockedUntil = Math.max(0, ...keys.map((key) => {
    const attempt = attempts.get(key);
    return attempt && attempt.count >= MAX_REQUESTS ? attempt.expiresAt : 0;
  }));
  if (blockedUntil > now) return Math.ceil((blockedUntil - now) / 1000);

  // Bound memory use even if many different addresses submit within one window.
  if (attempts.size + keys.length > 10000) return Math.ceil(WINDOW_MS / 1000);

  for (const key of keys) {
    const attempt = attempts.get(key);
    attempts.set(key, { count: (attempt?.count ?? 0) + 1, expiresAt: attempt?.expiresAt ?? now + WINDOW_MS });
  }
  return 0;
}
