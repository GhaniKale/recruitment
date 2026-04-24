import { Router } from "express";
import { auth } from "../auth";
import { toNodeHandler } from "better-auth/node";

const router = Router();
const authHandler = toNodeHandler(auth);

// Correct implementation for Express with Better Auth
router.all("/api/auth/*", (req, res) => {
    return authHandler(req, res);
});

export const authRoutes = router;
