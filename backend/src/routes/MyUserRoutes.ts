import express from "express";
import MyUserController from "../controllers/MyUserController"
import { jwtCheck, jwtParse } from "../middleware/auth";
import { handleValidationErrors, validateMyUserRequest } from "../middleware/validation";

const router = express.Router();

router.get("/", jwtParse, MyUserController.getCurrentUser);
router.post("/",MyUserController.createCurrentUser);
router.put("/", jwtParse, MyUserController.updateCurrentUser);

export default router;