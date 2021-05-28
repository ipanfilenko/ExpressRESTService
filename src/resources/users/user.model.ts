import { v4 as uuid } from 'uuid';
import { UserModel } from './user.interface';

interface User {
  config: UserModel;
  id: string;
  name: string;
  login: string;
  password: string;
}

class User implements User{
  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  }: UserModel = {} as UserModel) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  /**
   * Convert object with user data for response
   *
   * @param {User} user Object with user data
   * @returns {{name: *, id: *, login: *}} Object with user data for response
   */
  static toResponse(user: UserModel) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

export default User;
