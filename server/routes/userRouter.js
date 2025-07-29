import { Router } from "express";
import { userDashboard, userProfile } from "../controllers/userController.js";

const userRouter = Router();

userRouter.get('/dashboard/:id/', userDashboard);
userRouter.get('/profile/:id', userProfile);

export default userRouter;