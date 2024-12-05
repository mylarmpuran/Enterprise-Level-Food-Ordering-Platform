
import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";


export const handleValidationErrors = async (
    req: any,
    res: any,
    next: NextFunction,
) => {   

    try {
        const errors = validationResult(req); 
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array()});
        }
        res.json({message:"Success"});
    } catch (error) {
        next(error);
    
    }
}

export const validateMyUserRequest = [
    body("name").isString().notEmpty().withMessage("Name must be a string"),
    body("addressLine1").isString().notEmpty().withMessage("AddressLine1 must be a string"),
    body("city").isString().notEmpty().withMessage("City must be a string"),
    body("country").isString().notEmpty().withMessage("Country must be a string"),
    handleValidationErrors,
    
]