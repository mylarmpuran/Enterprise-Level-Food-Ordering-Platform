import express from "express";
import MyUserController from "../controllers/MyUserController"
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";

const router = express.Router();

router.post("/", jwtCheck, validateMyUserRequest, MyUserController.createCurrentUser);
router.put("/", jwtCheck, jwtParse, MyUserController.updateCurrentUser);

export default router;