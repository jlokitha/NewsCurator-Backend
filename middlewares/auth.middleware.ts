import jwt, {Secret} from "jsonwebtoken";
import express from "express";

function authenticateToken(req : express.Request, res : express.Response, next : express.NextFunction){
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(' ')[1];

    if(!token) {
        console.log('No token provided');
        res.status(401).send('No token provided');
    }

    console.log('url', req.url)
    try{
        const payload = jwt.verify(token as string, process.env.SECRET_KEY as Secret) as {username: string, iat: number};
        req.body.username = payload.username;
        console.log('verified token', payload);
        next();
    }catch(err){
        console.log('Invalid token', err);
        res.status(401).send(err);
    }
}

export default authenticateToken;