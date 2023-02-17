import { Project } from "./project";
import { Tasks } from "./task";

export interface Board {
    id: number;
    name: string;
    description: string;
    position: number;
    projectId: number;
    project: Project;
    columns: Column[];
    tasks: Tasks[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

export interface Column {
    id: number;
    name: string;
    description: string;
    position: number;
    taskStatus: TaskState;
    boardId: number;
    board: string;
    tasks: Tasks[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}