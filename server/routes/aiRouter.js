import express from 'express';
import { summarizeJobDesc } from '../controllers/aiController.js';

const aiRouter = express.Router();

aiRouter.post('/summarize-job-description', summarizeJobDesc);

export default aiRouter;