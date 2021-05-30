import { v4 as uuid } from 'uuid';

export interface Task {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: string | null,
  boardId?: string,
  columnId: string | null,
}

export class Task {
  constructor({
    id = uuid(),
    title = 'title',
    order = 0,
    description = 'description',
    userId = null,
    boardId = '',
    columnId = null,
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}
