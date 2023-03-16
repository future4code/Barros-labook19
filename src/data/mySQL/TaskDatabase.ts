import { BaseDatabase } from "./BaseDatabase";
import { task } from "../../model/post";
import { CustomError } from "../../error/CustomError";
import { TaskRepository } from "../../business/TaskRepository";

export class TaskDatabase extends BaseDatabase implements TaskRepository {

   public createTask = async (task: task):Promise<void> => {
      try {
      await TaskDatabase.connection('labook_tasks')
         .insert({
            id: task.id,
            photo: task.photo,
            description: task.description,
            type: task.type,
            created_at: task.created_at,
            author_id: task.authorId
         })
         .into("labook_tasks");
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
   };


   public searchPost = async (): Promise<task[]> => {
      try {
         const returnPostId = await TaskDatabase.connection
         .select("*")
         .from("labook_tasks")
         .where({});

         return returnPostId;
      }  catch (error:any) {
         throw new CustomError(error.statusCode, error.message);
      }
   };
}   

