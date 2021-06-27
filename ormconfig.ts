import { ConnectionOptions } from "typeorm";

const { DB_HOST, DB_PORT = 5432, DB_USER, DB_NAME, DB_PASS} = process.env;

const typeORMConfig: ConnectionOptions = {
   "type": "postgres",
   "host": DB_HOST,
   "port": +DB_PORT,
   "username": DB_USER,
   "password": DB_PASS,
   "database": DB_NAME,
   "synchronize": false,
   "logging": false,
   "entities": [
      "src/resources/users/user.model.ts",
      "src/resources/tasks/task.model.ts",
      "src/resources/boards/board.model.ts"
   ],
   "migrations": [
      "src/migrations/*.{ts,js}"
   ],
   "cli": {
      "migrationsDir": "src/migrations"
   }
};

export default typeORMConfig;
