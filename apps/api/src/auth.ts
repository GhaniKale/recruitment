import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";
import { users, sessions, accounts, verifications } from "./db/schema"; // Import your schema

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite"
        schema: {
            user: users,
            session: sessions,
            account: accounts,
            verification: verifications
        },
    }),
    emailAndPassword: {
        enabled: true,
    },
    // Add other plugins or providers here
});
