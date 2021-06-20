import { v4 as uuid } from 'uuid';
import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Task {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  order: number;

  @Column()
  description: string;

  @Column('varchar', { nullable: true })
  userId: string | null;

  @Column()
  boardId: string;


  @Column('varchar', { nullable: true })
  columnId: string | null;

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
