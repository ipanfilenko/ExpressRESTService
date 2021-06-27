import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import { User } from '../users/user.model';

const EXPIRE_TOKEN = 60 * 60 * 24;

export const getToken = (user: User, password: string, callback: (response: string, err: Error | null) => void) => {
  const { JWT_SECRET_KEY } = process.env;
  if (user === undefined) {
    return 'Incorrect login';
  }

  return bcryptjs.compare(password, user.password, (_err: Error|undefined, matches: boolean) => {
    let token: string;
    if (matches) {
      token = jwt.sign({id: user.id, login: user.login}, JWT_SECRET_KEY as string, {expiresIn: EXPIRE_TOKEN});
    } else {
      return 'Incorrect password';
    }
    return callback(token, null);
  });
};
