// @ts-nocheck
import { v4 as uuid } from 'uuid';

class Board {
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
