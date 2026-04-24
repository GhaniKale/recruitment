import express from "express";
import cors from "cors";
import * as helmet from "helmet";
import dotenv from "dotenv";
import { jobRoutes } from "./routes/job.routes.js";
import { candidateRoutes } from "./routes/candidate.routes.js";
import { authRoutes } from "./routes/auth.routes.js";
dotenv.config();

const app = express();

app.use(helmet.default());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Recruitment App API");
});

app.use("/api/jobs", jobRoutes);
app.use("/api/candidates", candidateRoutes);
app.use(authRoutes);

// Export for Vercel instead of app.listen()
export default app;

// Keep listen() for local dev only
if (process.env.NODE_ENV !== "production") {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}
