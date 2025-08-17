import { Router } from "express";
import { userDashboard, userProfile } from "../controllers/userController.js";
import { getAllJobs, getJobDetails } from "../controllers/jobsController.js";

const userRouter = Router();

userRouter.get('/dashboard/:id', userDashboard);
userRouter.get('/profile/:id', userProfile);
userRouter.get('/all-jobs/:id', getAllJobs);
userRouter.get('/job-details/:id', getJobDetails);
userRouter.post('/add-new-job/:id', addNewJob);



export default userRouter;