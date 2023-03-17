import { generateId } from "../services/idGenerator";
import { task, TaskInputDTO, TaskPostInputDTO } from "../model/post";
import { CustomError } from "../error/CustomError";
import { TaskRepository } from "./TaskRepository";

export class TaskBusiness {
  taskDatabase: any;
  constructor(private TaskDatabase: TaskRepository){}

  public createTask = async (input: TaskInputDTO) => {
    try {
      const { photo, description, type, created_at, authorId } = input;

      if (!description) {
        throw new Error(
          '"description", "type" e "authorId" são obrigatórios'
        );
      }

      const id: string = generateId();

      
      const task: task = {
        id,
        photo,
        description,
        type,
        created_at,
        authorId,
      }

      await this.TaskDatabase.createTask(task)
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message)
    }
  }


  public searchPost = async (input: TaskPostInputDTO) => {

    try {

      return await this. TaskDatabase.searchPost();

    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message)
    } 
  }
}