import { BaseDatabase } from "./BaseDatabase";
import { task } from "../../model/post";

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
}

