import { ConnectionOptions } from "typeorm";

export const typeormConfig: ConnectionOptions = {
   "type": "postgres",
   "host": "localhost",
   "port": 5433,
   "username": "postgres",
   "password": "1234",
   "database": "trello",
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/resources/users/user.model.ts",
      "src/resources/tasks/task.model.ts",
      "src/resources/boards/board.model.ts"
   ]
};
