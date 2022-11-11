import { verifyToken } from '../utils';
import { NextFunction, Request, Response } from 'express';

export default function authMiddleware(req: Response, res: Response, next: NextFunction) {

//   const authHeader = req.headers.authorization;

//   if(!authHeader || !authHeader.split(' ')[1]){

//     res.json({
//       status: 404,
//       message: 'Unauthorized'
//     })
    
//   }

//   const accesstoken = authHeader.split(' ')[1];

//   verifyToken(accesstoken, "vy73fhurf7r9g83hfenuvfnji029f3r8w7gbfru33yfg7r9ffh893fcr4");

  next()
  
}