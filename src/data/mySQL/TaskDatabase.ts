import { BaseDatabase } from "./BaseDatabase";
import { task } from "../../model/post";
import { CustomError } from "../../error/CustomError";

export class TaskDatabase extends BaseDatabase {

   public insertTask = async (
      task: task
   ) => {
      await TaskDatabase.connection('labook_tasks')
         .insert({
            id: task.id,
            photo: task.photo,
            description: task.description,
            type: task.type,
            created_at: task.created_at,
            author_id: task.authorId
         })
   }


async searchPost (id: string) {
   try {

       const returnPostId: any = await this.connection('labook_tasks')
       .select("*")
       .where({id})

       return returnPostId;

       

   } catch (error:any) {
       throw new CustomError(error.statusCode, error.message);
   }
}
}   

