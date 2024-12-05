import { auth } from "express-oauth2-jwt-bearer";
import jwt from "jsonwebtoken";
import User from "../models/user";
import { NextFunction, Request, Response, Express, RequestHandler } from "express";


declare global {
  namespace Express {
    interface Request {
      
        auth0Id: string;
        userId: string;
      }
      
    }
    
  }


export const jwtCheck = auth({
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL, 
    tokenSigningAlg: 'RS256'
  });

export const jwtParse: RequestHandler = async (req:any,res:any,next:NextFunction) => {
    const { authorization } = req.headers;

    if(!authorization || !authorization.startsWith("Bearer ")){
      return res.sendStatus(401);
    }

    const token = authorization.split(" ")[1];

    try {
      const decoded = jwt.decode(token) as jwt.JwtPayload;
      const auth0Id = decoded.sub;

      const user = await User.findOne({ auth0Id });

      if(!user){
        return res.sendStatus(401);
      }
      req.auth0Id = auth0Id as string;
      req.userId = user._id.toString();
      next();
    } catch (error) {
      next(error)
      return res.sendStatus(401);
    }

  }