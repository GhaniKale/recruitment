import { Router } from "express";
import { CandidateController } from "../controllers/candidate.controller";

const router = Router();

router.get("/", CandidateController.getAllCandidates); // Protected
router.get("/:id", CandidateController.getCandidateById); // Protected
router.post("/apply", CandidateController.createApplication); // Public
router.put("/applications/:applicationId/status", CandidateController.updateApplicationStatus); // Protected

export const candidateRoutes = router;
