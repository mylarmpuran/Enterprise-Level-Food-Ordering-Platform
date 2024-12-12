import express from "express";
import multer from "multer";
import MyRestaurantController from "../controllers/MyRestaurantController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyRestaurantRequest } from "../middleware/validation";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits:{
        fileSize: 5 * 1024 * 1025 // 5mb
    }
});


//  /api/my/resturant
router.get("/", jwtParse, MyRestaurantController.getMyRestaurant)


router.post(
  "/",
  jwtParse,
  upload.single("imageFile"),  
  MyRestaurantController.createMyRestaurant
);

router.put("/", upload.single("imageFile"), )


export default router;