const { v4: uuid } = require('uuid');

class User {
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
   * @returns {{name: *, id: *, login: *}} Object with user data for response
   */
  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
