import express, { NextFunction, Request, Response } from 'express';
import {getRepository} from "typeorm";
import * as LoginService from './login.service';
import { User } from '../users/user.model';

const router = express.Router();

router.route('/').post(async (req: Request, res: Response, next: NextFunction) => {
  const usersRepository = getRepository(User);
  const user = await usersRepository.findOne({login: req.body.login});

  if (user) {
    LoginService.getToken(user, req.body.password, (response: string, err: Error|null) => {
      if (err) {
        next(err);
        return;
      }
      res.status(201).json({ 'token': response });
    });
  }
});

export default router;
