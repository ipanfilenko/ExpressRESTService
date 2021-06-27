import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import { User } from '../users/user.model';

const EXPIRE_TOKEN = 60 * 60 * 24;

export const getToken = (user: User, password: string, callback: (response: string, err: Error | null) => void) => {
  const { JWT_SECRET_KEY } = process.env;

  if (!user) {
    throw new Error('Incorrect login');
  }

  bcryptjs.compare(password, user.password, (_err: Error | undefined, matches: boolean) => {
    if (matches) {
      const token = jwt.sign(
        {id: user.id, login: user.login},
        JWT_SECRET_KEY as string,
        {expiresIn: EXPIRE_TOKEN}
      );

      return callback(token, null);
    }

    throw new Error('Incorrect password');
  });
};
