import { Request, Response } from "express";
import { CandidateService } from "../services/candidate.service.js";

export const CandidateController = {
    async getAllCandidates(req: Request, res: Response) {
        try {
            const candidates = await CandidateService.getAllCandidates();
            res.json(candidates);
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch candidates" });
        }
    },

    async getCandidateById(req: Request, res: Response) {
        try {
            const candidate = await CandidateService.getCandidateById(req.params.id as string);
            if (!candidate) {
                res.status(404).json({ error: "Candidate not found" });
                return;
            }
            res.json(candidate);
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch candidate" });
        }
    },

    async createApplication(req: Request, res: Response) {
        // Expects partial candidate data + jobId
        // This is a simplified flow where we create candidate + application in one go or find existing
        try {
            const { jobId, name, email, phone, nik, resumeUrl, coverLetter, ...otherCandidateData } = req.body;

            // Check if candidate exists by email or NIK? For now simple create
            // In real app, check for duplicates
            const candidate = await CandidateService.createCandidate({
                name, email, phone, nik, ...otherCandidateData
            });

            const application = await CandidateService.createApplication(candidate.id, jobId, resumeUrl, coverLetter);

            res.status(201).json({ candidate, application });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to create application" });
        }
    },

    async updateApplicationStatus(req: Request, res: Response) {
        try {
            const { status, notes, userId } = req.body;
            const applicationId = req.params.applicationId as string;
            const result = await CandidateService.updateApplicationStatus(applicationId, status, notes, userId);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: "Failed to update status" });
        }
    }
};
