import { v4 as uuid } from 'uuid';
import { BoardModel } from './board.interface';
import Task from '../tasks/task.model';

interface Board {
  config: BoardModel;
  id: string;
  title: string;
  columns: Task[];
}

class Board implements Board {
  constructor({
    id = uuid(),
    title = 'Title',
    columns = [],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

export default Board;
