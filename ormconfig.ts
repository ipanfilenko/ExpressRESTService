import { ConnectionOptions } from "typeorm";

const { DB_HOST, DB_PORT, DB_USER, DB_NAME, DB_PASS} = process.env;

export const typeormConfig: ConnectionOptions = {
   "type": "postgres",
   "host": DB_HOST,
   "port": +DB_PORT!,
   "username": DB_USER,
   "password": DB_PASS,
   "database": DB_NAME,
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/resources/users/user.model.ts",
      "src/resources/tasks/task.model.ts",
      "src/resources/boards/board.model.ts"
   ]
};
