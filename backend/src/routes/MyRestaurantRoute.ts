import express from "express";
import multer from "multer";
import MyRestaurantController from "../controllers/MyRestaurantController";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits:{
        fileSize: 5 * 1024 * 1025 // 5mb
    }
});


//  /api/my/resturant

router.post("/", upload.single("imageFile"), MyRestaurantController.createMyRestaurant);