import boardsRepo from './boards.memory.repository';
import { Board } from './board.model';

const getAll = (): Promise<Board[]> => boardsRepo.getAll();

const create = (board: Board): Promise<Board> => boardsRepo.create(board);

const getById = (boardId: string): Promise<Board|undefined> => boardsRepo.getById(boardId);

const deleteBoardById = (boardId: string) => boardsRepo.deleteBoardById(boardId);

const updateBoard = (board: Board) => boardsRepo.updateBoard(board);

const boardService = { getAll, create, getById, deleteBoardById, updateBoard };

export default boardService;
