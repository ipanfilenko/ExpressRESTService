import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload, VerifyErrors } from 'jsonwebtoken';
import UserService from '../resources/users/user.service';

const authentication = (req: Request, res: Response, next: NextFunction) => {
  const {JWT_SECRET_KEY} = process.env;
  const sessionToken = `${req.headers.authorization}`.split(' ')[1];

  if (!sessionToken) {
    res.status(401).send({auth: false, message: "Access token is missing or invalid"});
  } else {
    jwt.verify(
        sessionToken,
        JWT_SECRET_KEY as string,
        {complete: true},
        async (_err: VerifyErrors | null, decoded?: JwtPayload | {login: string} ) => {
          if (decoded) {
            const user = await UserService.loginUser(decoded.login);
            if (user) {
              next();
            } else {
              res.status(401).send({error: "not authorized"})
            }
          }
        }
    );
  }
};

export default authentication;
