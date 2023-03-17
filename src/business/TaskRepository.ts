import { task } from "../model/post"

export interface TaskRepository {
    createTask(task: task): unknown
    searchPost(): Promise<task[]> 
}