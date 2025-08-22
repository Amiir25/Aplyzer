import { Router } from "express";
import { userDashboard, userProfile } from "../controllers/userController.js";
import { addNewJob, getAllJobs, getJobDetails, updateJob } from "../controllers/jobsController.js";

const userRouter = Router();

userRouter.get('/dashboard/:id', userDashboard);
userRouter.get('/profile/:id', userProfile);
userRouter.get('/all-jobs/:id', getAllJobs);
userRouter.get('/job-details/:id', getJobDetails);
userRouter.post('/add-new-job/:id', addNewJob);
userRouter.put('/user/update-job/:id', updateJob);

export default userRouter;