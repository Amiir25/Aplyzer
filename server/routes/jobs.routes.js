import { Router } from "express";

const jobsRouter = Router();

jobsRouter.get('/ping', (req, res) => {
  res.json({ message: 'pong' })
})

// jobsRouter.get('/', getJobs);
// jobsRouter.get('/:id', getJob);

export default jobsRouter;