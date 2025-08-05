import { Router } from "express";
import { getAllJobs, getJob } from "../controllers/jobsController.js";

const jobsRouter = Router();

jobsRouter.get('/jobs/:id', getAllJobs);
jobsRouter.get('/jobs/job/:id', getJob);

export default jobsRouter;