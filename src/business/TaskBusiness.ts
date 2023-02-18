import { generateId } from "../services/idGenerator";
import { TaskDatabase } from "../data/mySQL/TaskDatabase";
import { task, TaskInputDTO, TaskPostInputDTO } from "../model/post";
import { CustomError } from "../error/CustomError";

export class TaskBusiness {
  public createTask = async (input: TaskInputDTO) => {
    try {
      const { photo, description, type, created_at, authorId } = input;

      if (!description) {
        throw new Error(
          '"description", "type" e "authorId" são obrigatórios'
        );
      }

      const id: string = generateId();

      const taskDatabase = new TaskDatabase();
      const task: task = {
        id,
        photo,
        description,
        type,
        created_at,
        authorId,
      }

      await taskDatabase.insertTask(task);
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message)
    }
  }


  public searchPost = async (input: TaskPostInputDTO) => {

    try {

      const {id} = input;

      const taskDatabase = new TaskDatabase();


        if (!id) {
          throw new Error("Not Found!")
        }

        const returnPostId = await taskDatabase.searchPost(id)
        return returnPostId;

    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message)
  }
}
  
}