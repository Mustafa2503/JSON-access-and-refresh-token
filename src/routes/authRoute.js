import { Router } from "express";
import {signupController} from "../controllers/authController";
import { signinAuth } from "../middlewares/authMiddleware";

const authRouter = Router();
authRouter.post("/signup", signupController);
authRouter.post("/signin", signinAuth);
export default authRouter;