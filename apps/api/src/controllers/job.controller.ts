import { Request, Response } from "express";
import { JobService } from "../services/job.service";

export const JobController = {
    async getAllJobs(req: Request, res: Response) {
        try {
            const jobs = await JobService.getAllJobs();
            res.json(jobs);
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch jobs" });
        }
    },

    async getJobBySlug(req: Request, res: Response) {
        try {
            const job = await JobService.getJobBySlug(req.params.slug as string);
            if (!job) {
                // Return 404 but ensure the function returns/ends here
                res.status(404).json({ error: "Job not found" });
                return;
            }
            res.json(job);
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch job" });
        }
    },

    async createJob(req: Request, res: Response) {
        try {
            const job = await JobService.createJob(req.body);
            res.status(201).json(job);
        } catch (error) {
            res.status(500).json({ error: "Failed to create job" });
        }
    },

    async updateJob(req: Request, res: Response) {
        try {
            const job = await JobService.updateJob(req.params.id as string, req.body);
            res.json(job);
        } catch (error) {
            res.status(500).json({ error: "Failed to update job" });
        }
    },

    async deleteJob(req: Request, res: Response) {
        try {
            await JobService.deleteJob(req.params.id as string);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: "Failed to delete job" });
        }
    },
};
