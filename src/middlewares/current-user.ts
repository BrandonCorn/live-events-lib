import { Request, Response, NextFunction } from 'express';
import { Jwt } from '../utilities/jwt';

interface UserPayload {
    id: string,
    email: string,
}

declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayload;
        }
    }
}

export const currentUser = (req: Request, res: Response, next: NextFunction) => {
    //@ts-ignore
    if (!req.session?.jwt) {
        return next();
    }
    
    try{
        //@ts-ignore
        const payload = Jwt.verifyToken(req.session.jwt) as UserPayload;
        req.currentUser = payload;
    }
    catch(err) {

    }
    next();
}