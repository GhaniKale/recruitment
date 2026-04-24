import { db } from "../db/index.js";
import { candidates, applications, applicationTimeline, candidateDocuments } from "../db/schema.js";
import { eq, desc, and } from "drizzle-orm";

export const CandidateService = {
    async getAllCandidates() {
        return await db.select().from(candidates).orderBy(desc(candidates.createdAt));
    },

    async getCandidateById(id: string) {
        const candidate = await db.query.candidates.findFirst({
            where: eq(candidates.id, id),
            with: {
                applications: {
                    with: {
                        job: true,
                        timeline: true
                    }
                },
                documents: true
            }
        });
        return candidate;
    },

    async createCandidate(data: typeof candidates.$inferInsert) {
        const result = await db.insert(candidates).values(data).returning();
        return result[0];
    },

    async createApplication(candidateId: string, jobId: string, resumeUrl?: string, coverLetter?: string) {
        const application = await db.insert(applications).values({
            candidateId,
            jobId,
            resumeUrl,
            coverLetter,
            status: 'baru'
        }).returning();

        // Add initial timeline
        await db.insert(applicationTimeline).values({
            applicationId: application[0].id,
            status: 'baru',
            notes: 'Application submitted',
        });

        return application[0];
    },

    async updateApplicationStatus(applicationId: string, status: any, notes?: string, userId?: string) {
        const result = await db.update(applications).set({ status }).where(eq(applications.id, applicationId)).returning();

        if (result.length > 0) {
            await db.insert(applicationTimeline).values({
                applicationId: applicationId,
                status,
                notes,
                createdBy: userId
            });
        }
        return result[0];
    }
};
