import { db } from "./db/index.js";
import { users, sessions, accounts, verifications } from "./db/schema.js";

type BetterAuthFn = typeof import("better-auth").betterAuth;
type AuthInstance = ReturnType<BetterAuthFn>;
type NodeHandler = ReturnType<typeof import("better-auth/node").toNodeHandler>;

let authPromise: Promise<AuthInstance> | null = null;
let authHandlerPromise: Promise<NodeHandler> | null = null;

export function getAuth(): Promise<AuthInstance> {
    if (authPromise) return authPromise;

    authPromise = (async () => {
        // Use dynamic import to stay compatible with CommonJS bundlers/runtimes.
        const { betterAuth } = await import("better-auth");
        const { drizzleAdapter } = await import("better-auth/adapters/drizzle");

        return betterAuth({
            database: drizzleAdapter(db, {
                provider: "pg", // or "mysql", "sqlite"
                schema: {
                    user: users,
                    session: sessions,
                    account: accounts,
                    verification: verifications,
                },
            }),
            emailAndPassword: {
                enabled: true,
            },
            // Add other plugins or providers here
        });
    })();

    return authPromise;
}

export function getAuthHandler(): Promise<NodeHandler> {
    if (authHandlerPromise) return authHandlerPromise;

    authHandlerPromise = (async () => {
        const auth = await getAuth();
        const { toNodeHandler } = await import("better-auth/node");
        return toNodeHandler(auth);
    })();

    return authHandlerPromise;
}
