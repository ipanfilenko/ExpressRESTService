export interface TaskModel {
    id: string;
    title: string;
    order: number;
    description: string;
    userId: string | null,
    boardId?: string,
    columnId: string | null,
}
