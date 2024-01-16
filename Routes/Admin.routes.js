import {registerAdmin,loginAdmin} from "../Controllers/Admin.controller.js";
import { Router } from "express";

const adminRouter = Router();

adminRouter.post("/register",registerAdmin);
adminRouter.post("/login",loginAdmin);

export default adminRouter;