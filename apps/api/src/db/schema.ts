import { pgTable, text, timestamp, boolean, uuid, integer, jsonb, date, check } from "drizzle-orm/pg-core";
import { relations, sql } from "drizzle-orm";

// 1. Users (Admins)
export const users = pgTable("users", {
    id: uuid("id").defaultRandom().primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    password: text("password"), // Can be null if using OAuth? For now basic auth.
    role: text("role").default("admin").notNull(),
    emailVerified: boolean("email_verified").default(false),
    image: text("image"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Better Auth Tables (Session, Account, Verification)
export const sessions = pgTable("session", {
    id: text("id").primaryKey(),
    expiresAt: timestamp("expires_at").notNull(),
    token: text("token").notNull().unique(),
    createdAt: timestamp("created_at").notNull(),
    updatedAt: timestamp("updated_at").notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    userId: uuid("user_id").notNull().references(() => users.id), // Changed to UUID to match users.id
});

export const accounts = pgTable("account", {
    id: text("id").primaryKey(),
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),
    userId: uuid("user_id").notNull().references(() => users.id),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    idToken: text("id_token"),
    accessTokenExpiresAt: timestamp("access_token_expires_at"),
    refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
    scope: text("scope"),
    password: text("password"),
    createdAt: timestamp("created_at").notNull(),
    updatedAt: timestamp("updated_at").notNull(),
});

export const verifications = pgTable("verification", {
    id: text("id").primaryKey(),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: timestamp("expires_at").notNull(),
    createdAt: timestamp("created_at"),
    updatedAt: timestamp("updated_at"),
});

// 2. Jobs
export const jobs = pgTable("jobs", {
    id: uuid("id").defaultRandom().primaryKey(),
    title: text("title").notNull(),
    slug: text("slug").notNull().unique(),
    country: text("country").notNull(),
    city: text("city"),
    sector: text("sector").notNull(),
    description: text("description").notNull(),
    requirements: text("requirements"), // Rich text or JSON? Keeping text for now.
    contractType: text("contract_type"),
    quota: integer("quota").default(0),
    salaryRange: text("salary_range"),
    benefits: jsonb("benefits").$type<{
        asrama: boolean;
        asuransi: boolean;
        makan: boolean;
        transport: boolean;
    }>(),
    status: text("status", { enum: ["aktif", "nonaktif", "draft"] }).default("draft").notNull(),
    createdBy: uuid("created_by").references(() => users.id),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// 3. Candidates
export const candidates = pgTable("candidates", {
    id: uuid("id").defaultRandom().primaryKey(),
    name: text("name").notNull(),
    nik: text("nik").unique(), // Optional?
    email: text("email").notNull(),
    phone: text("phone").notNull(),
    placeOfBirth: text("place_of_birth"),
    dateOfBirth: date("date_of_birth"),
    address: text("address"),
    avatarUrl: text("avatar_url"),
    resumeUrl: text("resume_url"), // Moved resume here or keep in application? Candidate profile vs Application.
    // Actually, candidates can have multiple applications. Keeping resume here as "default" resume or in documents table.
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// 4. Applications
export const applications = pgTable("applications", {
    id: uuid("id").defaultRandom().primaryKey(),
    jobId: uuid("job_id").references(() => jobs.id).notNull(),
    candidateId: uuid("candidate_id").references(() => candidates.id).notNull(),
    status: text("status", { enum: ["baru", "screening", "interview", "offering", "diterima", "ditolak"] }).default("baru").notNull(),
    resumeUrl: text("resume_url"), // Resume specific to this application
    coverLetter: text("cover_letter"),
    appliedAt: timestamp("applied_at").defaultNow().notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// 5. Application Timeline
export const applicationTimeline = pgTable("application_timeline", {
    id: uuid("id").defaultRandom().primaryKey(),
    applicationId: uuid("application_id").references(() => applications.id).notNull(),
    status: text("status").notNull(), // The new status
    notes: text("notes"),
    createdBy: uuid("created_by"), // Could be system (null) or admin user
    createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 6. Documents
export const candidateDocuments = pgTable("candidate_documents", {
    id: uuid("id").defaultRandom().primaryKey(),
    candidateId: uuid("candidate_id").references(() => candidates.id).notNull(),
    name: text("name").notNull(),
    fileUrl: text("file_url").notNull(),
    type: text("type"), // PDF, etc
    size: integer("size"),
    uploadedAt: timestamp("uploaded_at").defaultNow().notNull(),
});

// Relations
export const jobsRelations = relations(jobs, ({ one, many }) => ({
    author: one(users, {
        fields: [jobs.createdBy],
        references: [users.id],
    }),
    applications: many(applications),
}));

export const candidatesRelations = relations(candidates, ({ many }) => ({
    applications: many(applications),
    documents: many(candidateDocuments),
}));

export const applicationsRelations = relations(applications, ({ one, many }) => ({
    job: one(jobs, {
        fields: [applications.jobId],
        references: [jobs.id],
    }),
    candidate: one(candidates, {
        fields: [applications.candidateId],
        references: [candidates.id],
    }),
    timeline: many(applicationTimeline),
}));

export const timelineRelations = relations(applicationTimeline, ({ one }) => ({
    application: one(applications, {
        fields: [applicationTimeline.applicationId],
        references: [applications.id],
    }),
    user: one(users, {
        fields: [applicationTimeline.createdBy],
        references: [users.id],
    }),
}));
