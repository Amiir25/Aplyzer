import { Router } from "express";
import { userDashboard, userProfile } from "../controllers/userController.js";
import { addNewJob, deleteJob, favorite, getAllJobs, getJobDetails, updateJob } from "../controllers/jobsController.js";
import authenticateToken from "../middleware/authMiddleware.js";

const userRouter = Router();

userRouter.get('/dashboard/:id', authenticateToken, userDashboard);
userRouter.get('/profile/:id', userProfile);
userRouter.get('/all-jobs/:id', getAllJobs);
userRouter.get('/job-details/:id', getJobDetails);
userRouter.post('/add-new-job/:id', addNewJob);
userRouter.put('/update-job/:id', updateJob);
userRouter.delete('/delete-job/:id', deleteJob);
userRouter.patch('/favorite/:id', favorite);

export default userRouter;