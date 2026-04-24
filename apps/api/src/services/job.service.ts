import { db } from "../db/index.js";
import { jobs } from "../db/schema.js";
import { eq, desc } from "drizzle-orm";

export const JobService = {
    async getAllJobs() {
        return await db.select().from(jobs).orderBy(desc(jobs.createdAt));
    },

    async getJobBySlug(slug: string) {
        const result = await db.select().from(jobs).where(eq(jobs.slug, slug)).limit(1);
        return result[0];
    },

    async createJob(data: typeof jobs.$inferInsert) {
        const result = await db.insert(jobs).values(data).returning();
        return result[0];
    },

    async updateJob(id: string, data: Partial<typeof jobs.$inferInsert>) {
        const result = await db.update(jobs).set(data).where(eq(jobs.id, id)).returning();
        return result[0];
    },

    async deleteJob(id: string) {
        await db.delete(jobs).where(eq(jobs.id, id));
        return true;
    },
};
