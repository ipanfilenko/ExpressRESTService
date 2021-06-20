import {getRepository} from "typeorm";
import { Board } from './board.model';

const getAll = async (): Promise<Board[]> => getRepository(Board).find();

const create = async (board: Board): Promise<Board> => getRepository(Board).save(board);

const getById = async (boardId: string): Promise<Board|undefined> => getRepository(Board).findOne(boardId);

const deleteBoardById = async (boardId: string) =>  getRepository(Board).delete(boardId);

const updateBoard = async (board: Board) => getRepository(Board).update(board.id, board);

const boardRepo = { getAll, create, getById, deleteBoardById, updateBoard };

export default boardRepo;
