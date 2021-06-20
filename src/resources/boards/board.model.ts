import { v4 as uuid } from 'uuid';
import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Board {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column('jsonb', { nullable: true })
  columns: {[key: string]: string}[];

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
