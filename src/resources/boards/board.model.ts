import { v4 as uuid } from 'uuid';
import { Task } from '../tasks/task.model';

export interface Board {
  id: string;
  title: string;
  columns: Task[];
}

export class Board {
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
