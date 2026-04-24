import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Recruitment App API");
});

import { jobRoutes } from "./routes/job.routes.js";
import { candidateRoutes } from "./routes/candidate.routes.js";
import { authRoutes } from "./routes/auth.routes.js";

app.use("/api/jobs", jobRoutes);
app.use("/api/candidates", candidateRoutes);
app.use(authRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
