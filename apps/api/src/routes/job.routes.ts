import { Router } from "express";
import { JobController } from "../controllers/job.controller.js";

const router = Router();

router.get("/", JobController.getAllJobs);
router.post("/", JobController.createJob); // Should be protected
router.get("/:slug", JobController.getJobBySlug); // Route with slug
// router.get("/id/:id", JobController.getJobById); // Optional: route by ID
router.put("/:id", JobController.updateJob); // Should be protected
router.delete("/:id", JobController.deleteJob); // Should be protected

export const jobRoutes = router;
