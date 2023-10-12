import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET! || 'lasjdfljdslajf';

export class Jwt {
    
    static createToken(payload: string | object) {
        const token = jwt.sign(payload, JWT_SECRET);
        return token;
    }
    

    static verifyToken(token: string) {
        return jwt.verify(token, JWT_SECRET)
    } 

}