import { v4 as uuid } from 'uuid';

export interface User {
  id?: string;
  name: string;
  login: string;
  password: string;
}

export class User {
  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  /**
   * Convert object with user data for response
   *
   * @param {User} user Object with user data
   * @returns {{name: string, id: string, login: string}} Object with user data for response
   */
  static toResponse(user: User): Partial<User> {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
