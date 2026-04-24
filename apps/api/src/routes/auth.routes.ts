import { Router } from "express";
import { getAuthHandler } from "../auth.js";

const router = Router();

// Correct implementation for Express with Better Auth (lazy init)
router.all("/api/auth/*", async (req, res, next) => {
    try {
        const authHandler = await getAuthHandler();
        return authHandler(req, res);
    } catch (err) {
        next(err);
    }
});

export const authRoutes = router;
