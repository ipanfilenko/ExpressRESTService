import Task from "../tasks/task.model";

export interface BoardModel {
    id?: string;
    title: string;
    columns: Task[];
}
